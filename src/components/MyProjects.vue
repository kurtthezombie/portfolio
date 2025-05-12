<template>
      <section id="projects" class="mb-32">
      <div class="flex justify-center">
        <h1 class="text-5xl text-black dark:text-white">Projects</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 w-1/2 mx-auto">
        <div class="project-card p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project1.png" alt="Project 1" class="w-full h-auto rounded-lg mb-4">
          <h2 class="md:text-2xl mb-3 min-[320px]:text-base sm:text-lg text-purple-900 dark:text-purple-200">Student Task Calendar</h2>
          <p class="mb-3 text-gray-700 dark:text-white">A task calendar to keep track of to-dos and deadlines</p>
          <a href="https://github.com/kurtthezombie/task-calendar" target="_blank" class="text-gray-700 dark:text-gray-400 hover:text-purple-800 dark:hover:text-purple-400"><i class="fas fa-code-branch"></i> Repository</a>
        </div>
        <div class="project-card p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project2.png" alt="Project 2" class="w-full h-auto rounded-lg mb-4">
          <h2 class="md:text-2xl mb-3 min-[320px]:text-base sm:text-lg text-purple-900 dark:text-purple-200">WheelsOnDeals</h2>
          <p class="mb-3 text-gray-700 dark:text-white">A simple car showcasing site using .NET</p>
          <a href="https://github.com/kurtthezombie/wheels-on-deals" target="_blank" class="text-gray-700 dark:text-gray-400 hover:text-purple-800 dark:hover:text-purple-400"><i class="fas fa-code-branch"></i> Repository</a>
        </div>
        <div class="project-card p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project3.png" alt="Project 3" class="w-full h-auto rounded-lg mb-4">
          <h2 class="md:text-2xl mb-3 min-[320px]:text-base sm:text-lg text-purple-900 dark:text-purple-200">ForumsUnknown</h2>
          <p class="mb-3 text-gray-700 dark:text-white">A forum site for the creepy and eerie stuff.</p>
          <a href="https://github.com/kurtthezombie/forums-unknown-mvc" target="_blank" class="text-gray-700 dark:text-gray-400 hover:text-purple-800 dark:hover:text-purple-400"><i class="fas fa-code-branch"></i> Repository</a>
        </div>
        <!-- Add more project cards as needed -->
        <div class="project-card p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project4.png" alt="Project 4" class="w-full h-auto rounded-lg mb-4">
          <h2 class="md:text-2xl mb-3 min-[320px]:text-base sm:text-lg text-purple-900 dark:text-purple-200">Nothing</h2>
          <p class="mb-3 text-gray-700 dark:text-white">A site that tracks how long you have been doing nothing.</p>
          <a href="https://nothing-ktz.vercel.app/" target="_blank" class="text-gray-700 dark:text-gray-400 hover:text-purple-800 dark:hover:text-purple-400"><i class="fas fa-link"></i> Link</a>
        </div>
      </div>
    </section>
</template>

<script setup>
</script>