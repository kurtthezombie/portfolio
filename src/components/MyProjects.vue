<script setup>
import { Projects } from '@/constants/projects'
</script>

<template>
  <section class="content-section" id="work">
    <div class="page-wrap">
      <div class="section-heading"><h2>Selected work</h2></div>
      <div class="projects-list">
        <a v-for="(project, index) in Projects" :key="project.title" :href="project.url" target="_blank" rel="noopener noreferrer" class="project-row">
          <span class="project-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <span>
            <strong>{{ project.title }}</strong>
            <span class="project-description">{{ project.subtitle }}</span>
            <span class="project-detail">{{ project.type === 1 ? 'Open repository' : 'Visit live project' }}</span>
          </span>
          <span class="project-stack">
            <span class="project-trace" aria-hidden="true"><i></i><b></b><i></i><b></b><i></i></span>
            <span v-for="technology in project.stack" :key="technology">{{ technology }}</span>
          </span>
        </a>
      </div>
      <aside class="current-work" aria-label="Current work">
        <div class="current-work-label">currently working on<br>September 2026</div>
        <div>
          <h3>YouTube data-collection script</h3>
          <p>Exploring a script that collects and organizes YouTube data for analysis and experimentation.</p>
        </div>
      </aside>
    </div>
  </section>
</template>
