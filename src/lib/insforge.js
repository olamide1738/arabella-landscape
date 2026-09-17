// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — InsForge Backend SDK Client & Services
// ─────────────────────────────────────────────────────────────────

import { createClient } from '@insforge/sdk'
import { PROJECTS as INITIAL_PROJECTS } from '../data/projects'

// InsForge Configuration
const INSFORGE_URL = import.meta.env.VITE_INSFORGE_URL || 'https://api.insforge.dev/app/arabella-landscape'
const INSFORGE_ANON_KEY = import.meta.env.VITE_INSFORGE_ANON_KEY || 'insforge_anon_demo_key_arabella_2026'

export const insforge = createClient({
  baseUrl: INSFORGE_URL,
  anonKey: INSFORGE_ANON_KEY,
})

// Local Cache / Storage key for instant UI sync
const STORAGE_KEY = 'arabella_managed_projects'

// Get all projects (combines InsForge remote db + local storage cache)
export function getManagedProjects() {
  try {
    const cached = localStorage.getItem(STORAGE_KEY)
    if (cached) {
      const parsed = JSON.parse(cached)
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure any new default projects are seamlessly included
        const existingSlugs = new Set(parsed.map(p => p.slug))
        const missingDefaults = INITIAL_PROJECTS.filter(p => !existingSlugs.has(p.slug))
        if (missingDefaults.length > 0) {
          const merged = [...parsed, ...missingDefaults]
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
          return merged
        }
        return parsed
      }
    }
  } catch (err) {
    console.warn('LocalStorage error reading managed projects:', err)
  }
  return INITIAL_PROJECTS
}

// Save projects to local storage sync
export function saveManagedProjects(projects) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    window.dispatchEvent(new Event('arabella-projects-updated'))
  } catch (err) {
    console.error('LocalStorage error saving projects:', err)
  }
}

// InsForge Database API Service
export const insforgeService = {
  // Test connection to InsForge server
  async testConnection() {
    try {
      const response = await fetch(`${INSFORGE_URL}/health`, {
        headers: { 'apikey': INSFORGE_ANON_KEY }
      })
      if (response.ok) {
        return { success: true, message: 'Connected to InsForge Backend server' }
      }
      return { success: false, message: 'InsForge server reachable, running in hybrid mode' }
    } catch (e) {
      return { success: false, message: 'Running in InsForge Local-First Hybrid mode' }
    }
  },

  // Fetch projects from InsForge database
  async fetchProjects() {
    try {
      // Fetch from InsForge table 'projects'
      const { data, error } = await insforge.database
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data && data.length > 0) {
        saveManagedProjects(data)
        return data
      }
    } catch (err) {
      console.log('InsForge DB fetch fallback to local manager:', err)
    }
    return getManagedProjects()
  },

  // Upload Project Image file to InsForge Storage Bucket
  async uploadImage(file) {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `project_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`
      
      const { data, error } = await insforge.storage
        .from('project-images')
        .upload(fileName, file)

      if (!error && data) {
        return `${INSFORGE_URL}/storage/v1/object/public/project-images/${fileName}`
      }
    } catch (err) {
      console.warn('InsForge Storage upload fallback to object URL:', err)
    }

    // Fallback: convert to Base64/DataURL for immediate local preview and persistence
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(file)
    })
  },

  // Create & Save a new Project in InsForge
  async createProject(projectData) {
    const current = getManagedProjects()
    
    // Format new project object
    const newProject = {
      slug: projectData.slug || projectData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: projectData.category || 'Commercial',
      name: projectData.name,
      location: projectData.location || 'Lagos, Nigeria',
      coords: projectData.coords || [6.4531, 3.3958],
      year: projectData.year || String(new Date().getFullYear()),
      image: projectData.image || '/images/abuja-gate-4.png',
      images: projectData.images && projectData.images.length > 0 ? projectData.images : [projectData.image || '/images/abuja-gate-4.png'],
      area: projectData.area || '1.0 hectare',
      client: projectData.client || 'Private Client',
      services: projectData.services || ['Landscape Architecture', 'Planting & Irrigation'],
      highlights: projectData.highlights || ['Custom planting scheme', 'Automated irrigation', 'Night illumination'],
      description: projectData.description || `${projectData.name} — a landmark landscape development delivered by Arabella Landscape.`,
      detail: projectData.detail || `Arabella Landscape Limited was commissioned for design, construction, and maintenance services at ${projectData.name}.`,
      createdAt: new Date().toISOString()
    }

    // Try posting to InsForge Database
    try {
      await insforge.database
        .from('projects')
        .insert([newProject])
    } catch (err) {
      console.log('InsForge DB insert fallback:', err)
    }

    // Update local cache & dispatch update event
    const updated = [newProject, ...current]
    saveManagedProjects(updated)
    return newProject
  },

  // Delete a Project from InsForge
  async deleteProject(slug) {
    // Try deleting from InsForge Database
    try {
      await insforge.database
        .from('projects')
        .delete()
        .eq('slug', slug)
    } catch (err) {
      console.log('InsForge DB delete fallback:', err)
    }

    const current = getManagedProjects()
    const updated = current.filter(p => p.slug !== slug)
    saveManagedProjects(updated)
    return true
  },

  // Update an existing Project in InsForge
  async updateProject(targetSlug, projectData) {
    // Try updating InsForge Database
    try {
      await insforge.database
        .from('projects')
        .update(projectData)
        .eq('slug', targetSlug)
    } catch (err) {
      console.log('InsForge DB update fallback:', err)
    }

    const current = getManagedProjects()
    const updatedList = current.map(p => p.slug === targetSlug ? { ...p, ...projectData } : p)
    saveManagedProjects(updatedList)
    return projectData
  }
}
