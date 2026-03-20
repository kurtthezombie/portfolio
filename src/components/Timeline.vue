<script setup>
import experiences from '@/constants/experiences'
</script>

<template>
  <section id="timeline" class="max-w-4xl mx-auto py-16 px-6">
    <h1 class="text-center text-4xl mb-10 text-black dark:text-white">
      Experience
    </h1>

    <div class="relative border-l-2 border-gray-300 dark:border-gray-700">
      <div
        v-for="(item, index) in experiences"
        :key="item.position + item.period"
        class="relative mb-10 ml-6"
      >
        <span
          class="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 ring-8 ring-gray-100 dark:ring-gray-900"
        ></span>

        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ item.position }}
        </h3>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ item.company }} • {{ item.period }}
        </p>

        <div
          v-for="(project, projectIndex) in item.projects"
          :key="project.name + projectIndex"
          class="mt-4 space-y-2"
        >
          <p class="text-gray-800 dark:text-gray-200">
            <span class="font-semibold">{{ project.name }}</span>          
          </p>

          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li
              v-for="(detail, detailIndex) in project.details"
              :key="detail + detailIndex"
            >
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>



