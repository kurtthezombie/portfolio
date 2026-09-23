<script setup>
import experiences from '@/constants/experiences'
</script>

<template>
  <section class="content-section" id="experience">
    <div class="page-wrap">
      <div class="section-heading"><h2>Experience</h2></div>
      <div class="experience-list">
        <article v-for="(item, index) in experiences" :key="item.position + item.period" class="experience-row" :class="{ current: index === 0 }">
          <time>{{ item.period }}</time>
          <span class="timeline-node" aria-hidden="true"></span>
          <div>
            <h3>{{ item.position }}</h3>
            <p class="experience-company">{{ item.company }}</p>
            <details v-for="project in item.projects" :key="project.name" class="experience-detail">
              <summary>{{ project.name }}</summary>
              <ul>
                <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
              </ul>
            </details>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
