
<template>
  <main class="bg-gray-900 text-white scroll-smooth flex flex-col justify-center">
    <section id="landing">
      <div class="flex flex-row gap-x-20 justify-center items-center h-screen gap-y-10">
        <div class="flex flex-col gap-y-3 items-start">
          <h1 class="text-5xl">Hi, I'm <span class="text-purple-300">Kurt Desmond Cabaluna</span></h1>
          <h1 class="text-xl">Web Developer</h1>
          <div class="flex flex-row justify-start gap-x-10">
            <a href="#about" class="pb-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-500 transition duration-200">About</a>
            <a href="#projects" class="pb-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-00 transition duration-200">Projects</a>
            <a href="#contact" class="pb-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-500 transition duration-200">Contacts</a>
          </div>
        </div>
        <div class="flex">
          <img src="../assets/kurt.png" alt="" width="300"
            class="rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-700 shadow-gray-700 transition duration-500 ease-in-out" />
        </div>
      </div>
    </section>

    <section id="about" class="flex flex-col items-center justify-center gap-y-10 mb-32 ">
      <div class="flex justify-center">
        <h1 class="text-5xl">About <span class="text-purple-400">Me</span></h1>
      </div>
      <div class="flex justify-center w-1/2">
        <p class="text-justify text-2xl font-sans">
          I’m an aspiring software developer and a dedicated student with a passion for learning new things. I thrive
          on
          exploring innovative solutions, building meaningful projects, and continuously enhancing my skills to grow
          in
          the dynamic field of technology.
        </p>
      </div>
      <div class="flex flex-col items-center gap-y-5 mb-5">
        <div class="">
          <h3 class="text-4xl mb-5">Skills</h3>
        </div>
        <div class="flex flex-row justify-center gap-x-5">
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Laravel</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Vue.js</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">.NET</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">MySQL</p>
        </div>
        <div class="flex flex-row justify-center gap-x-5">
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">MSSQL</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Tailwind</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Python</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">C#</p>
        </div>
      </div>
      <div>
        <a class="rounded-lg bg-purple-800 hover:bg-purple-600 p-3 px-3 hover:shadow-lg hover:shadow-emerald-800 transition duration-500 ease-in-out" 
        href="/Resume.pdf" target="_blank">View Resume</a>
      </div>
    </section>
    
    <section id="projects" class="mb-32">
      <div class="flex justify-center">
        <h1 class="text-5xl">Projects</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 w-1/2 mx-auto">
        <div class="project-card p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project1.png" alt="Project 1" class="w-full h-auto rounded-lg mb-4">
          <h2 class="text-2xl mb-3">Student Task Calendar</h2>
          <p class="mb-3">A task calendar to keep track of to-dos and deadlines</p>
          <a href="https://github.com/kurtthezombie/task-calendar" target="_blank" class="hover:text-purple-400"><i class="fas fa-code-branch"></i> Repository</a>
        </div>
        <div class="project-card p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project2.png" alt="Project 2" class="w-full h-auto rounded-lg mb-4">
          <h2 class="text-2xl mb-3">WheelsOnDeals</h2>
          <p class="mb-3">A simple car showcasing site using .NET</p>
          <a href="https://github.com/kurtthezombie/wheels-on-deals" target="_blank" class="hover:text-purple-400"><i class="fas fa-code-branch"></i> Repository</a>
        </div>
        <div class="project-card p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project3.png" alt="Project 3" class="w-full h-auto rounded-lg mb-4">
          <h2 class="text-2xl mb-3">ForumsUnknown</h2>
          <p class="mb-3">A forum site for the creepy and eerie stuff.</p>
          <a href="https://github.com/kurtthezombie/forums-unknown-mvc" target="_blank" class="hover:text-purple-400"><i class="fas fa-code-branch"></i> Repository</a>
        </div>
        <!-- Add more project cards as needed -->
        <div class="project-card p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-800 hover:scale-105 cursor-pointer transition duration-200">
          <img src="../assets/project4.png" alt="Project 4" class="w-full h-auto rounded-lg mb-4">
          <h2 class="text-2xl mb-3">Nothing</h2>
          <p class="mb-3">A site that tracks how long you have been doing nothing.</p>
          <a href="https://nothing-ktz.vercel.app/" target="_blank" class="hover:text-purple-400"><i class="fas fa-link"></i> Link</a>
        </div>
      </div>
    </section>

    <section id="contact" class="mb-32">
      <div class="text-center">
        <h1 class="text-5xl">Connect with <span class="text-purple-400">Me</span></h1>
      </div>
      
      <!-- Contact Information -->
      <div class="flex flex-col items-center justify-center mt-10 w-full gap-y-3 mb-10">
        <p class="text-lg text-justify flex items-center gap-x-2"><span class="text-purple-400"><i class="fas fa-envelope"></i></span> kurt.desmond619@gmail.com</p>
        <p class="text-lg text-justify flex items-center gap-x-2"><span class="text-purple-400"><i class="fas fa-phone-alt"></i></span> 09682011541 </p>
      </div>
      
      <!-- Social Links -->
      <div class="flex flex-row justify-center gap-x-5">
        <a href="https://github.com/kurtthezombie/" target="_blank" class="text-xl hover:text-green-400 transition duration-200"><i class="fab fa-github w-6 h-6 mr-2"></i>Github</a>
        <a href="https://www.linkedin.com/in/kurt-desmond-cabaluna-0253a8312/" target="_blank" class="text-xl hover:text-sky-400 transition duration-200"><i class="fab fa-linkedin w-6 h-6 mr-2"></i>LinkedIn</a>
      </div>
    </section>

    <section class="mb-10">
      <p class="text-center text-sm text-gray-300">kurtthezombie © {{ currentYear }}</p>
    </section>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  const currentYear = ref(new Date().getFullYear());
</script>
