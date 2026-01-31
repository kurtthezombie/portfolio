<script setup>
import { Projects } from '@/constants/projects';
</script>

<template>
  <section id="projects" class="mb-32">
  <div class="flex justify-center">
    <h1 class="text-5xl text-black dark:text-white">Projects</h1>
  </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 w-1/2 mx-auto">
      <div
        v-for="project in Projects"
        :key="project.title"
        class="project-card p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg
               hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200"
      >
        <img 
          :src="project.image"
          :alt="project.title"
          class="w-full h-auto rounded-lg mb-4"
        />

        <h2 class="md:text-2xl mb-3 min-[320px]:text-base sm:text-lg text-purple-900 dark:text-purple-200">
          {{ project.title }}
        </h2>

         <p class="mb-3 text-gray-700 dark:text-white">
          {{ project.subtitle }}
        </p>

        <a
          :href="project.url"
          target="_blank"
          class="text-gray-700 dark:text-gray-400 hover:text-purple-800 dark:hover:text-purple-400"
        >
          {{ project.type === 1 ? 'Repository' : 'Link' }}
        </a>

      </div>
    </div>
  </section>
</template>