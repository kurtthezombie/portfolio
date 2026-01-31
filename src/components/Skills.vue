<script setup>
import { Skills } from '@/constants/skills'
</script>

<template>
  <div class="flex flex-col justify-center items-center mb-20">
    <div class="flex flex-col items-center gap-y-5 mb-5 min-[320px]:px-10">
      <h3 class="text-4xl mb-5 text-black dark:text-white">Skills</h3>

        <div class="flex flex-wrap justify-center gap-5 max-w-xl">
          <a
            v-for="skill in Skills"
            :key="skill.name"
            :href="skill.link"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold
                 hover:bg-gray-200 hover:scale-110 transition duration-200"
          >
            {{ skill.name }}
          </a>
        </div>
    </div>
  </div>
</template>