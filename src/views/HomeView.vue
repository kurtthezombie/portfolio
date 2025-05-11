<template>
  <main class="bg-gray-200 dark:bg-gray-900 text-white scroll-smooth flex flex-col justify-center min-h-screen" :class="{ 'dark': isDarkMode }">
    <section id="landing">
      <div class="flex justify-end pt-5 pr-5">
        <button class="bg-gray-900 dark:bg-white dark:text-black rounded-full p-2 px-5 transition duration-200 shadow-lg" :class="isDarkMode ? 'hover:shadow-purple-300' : 'shadow-md hover:shadow-violet-950'" @click="toggleTheme">
          <span :class="isDarkMode ? 'text-purple-900' : 'text-purple-300'">
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </span>
        </button>
      </div>
      <div class="flex flex-col md:flex-row md:gap-x-20 md:px-20 justify-center items-center h-screen gap-y-10">
        <div class="flex flex-col gap-y-3 md:items-start sm:items-center">
          <h1 class="text-3xl md:text-5xl md:text-start min-[320px]:text-center text-gray-900 dark:text-white">Hi, I'm <span class="text-violet-900 dark:text-purple-300">Kurt Desmond Cabaluna</span></h1>
          <h1 class="text-xl sm:text-center md:text-center min-[320px]:text-center text-gray-700 dark:text-white">Web Developer</h1>
          <div class="flex flex-row justify-start gap-x-10 min-[320px]:justify-center">
            <a href="#about" class="pb-2 border-b-2 border-transparent hover:border-purple-800 dark:hover:border-purple-400 dark:hover:text-purple-500 hover:text-purple-800 text-gray-700 dark:text-white transition duration-200">About</a>
            <a href="#projects" class="pb-2 border-b-2 border-transparent hover:border-purple-800 dark:hover:border-purple-400 dark:hover:text-purple-500 hover:text-purple-800 text-gray-700 dark:text-white transition duration-200">Projects</a>
            <a href="#contact" class="pb-2 border-b-2 border-transparent hover:border-purple-800 dark:hover:border-purple-400 dark:hover:text-purple-500 hover:text-purple-800 text-gray-700 dark:text-white transition duration-200">Contacts</a>
          </div>
        </div>
        <div class="flex">
          <img src="../assets/kurt.png" alt=""
            class="md:w-80 min-[320px]:w-48 rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-700 shadow-gray-500 transition duration-500 ease-in-out cursor-pointer" />
        </div>
      </div>
    </section>

    <section id="about" class="flex flex-col items-center justify-center gap-y-10 mb-32 ">
      <div class="flex justify-center">
        <h1 class="sm:text-5xl min-[320px]:text-3xl text-gray-800 dark:text-white">About <span class="text-purple-800 dark:text-purple-400">Me</span></h1>
      </div>
      <div class="flex justify-center w-1/2">
        <p class="text-justify md:text-2xl sm:text-xl min-[320px]:text-lg font-sans text-gray-800 dark:text-white">
          I'm an aspiring software developer and a dedicated student with a passion for learning new things. I thrive
          on
          exploring innovative solutions, building meaningful projects, and continuously enhancing my skills to grow
          in
          the dynamic field of technology.
        </p>
      </div>
      <div class="flex flex-col items-center gap-y-5 mb-5 min-[320px]:px-10">
        <div class="">
          <h3 class="text-4xl mb-5 text-black dark:text-white">Skills</h3>
        </div>
        <div class="flex flex-row justify-center gap-x-5">
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Laravel</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Vue.js</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">.NET</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">MySQL</p>
        </div>
        <div class="flex flex-row justify-center gap-x-5">
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">MSSQL</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Tailwind</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">Python</p>
          <p class="p-3 bg-gray-300 rounded-lg text-gray-700 font-semibold dark:hover:shadow-teal-600 hover:shadow-md hover:scale-110 transition duration-200 cursor-pointer">C#</p>
        </div>
      </div>
      <div>
        <a class="rounded-lg bg-purple-800 hover:bg-purple-600 p-3 px-3 hover:shadow-lg hover:shadow-emerald-800 transition duration-500 ease-in-out" 
        href="/Resume.pdf" target="_blank">View Resume</a>
      </div>
    </section>
    
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
    
    <section>
      <!-- Social Links -->
      <div class="flex flex-row justify-center gap-x-5 my-10">
        <a href="https://github.com/kurtthezombie/" target="_blank" 
          class="text-xl hover:text-green-900 dark:hover:text-green-400 transition duration-200 text-black dark:text-white">
          <i class="fab fa-github w-6 h-6 mr-2"></i>Github
        </a>
        <a href="https://www.linkedin.com/in/kurt-desmond-cabaluna-0253a8312/" target="_blank" 
          class="text-xl hover:text-sky-900 dark:hover:text-sky-400 transition duration-200 text-black dark:text-white">
          <i class="fab fa-linkedin w-6 h-6 mr-2"></i>LinkedIn
        </a>
      </div>
    </section>
  
    <section id="contact" class="mb-32">
      <div class="text-center">
        <h1 class="md:text-5xl sm:text-3xl min-[320px]:text-2xl text-black dark:text-white">Connect with <span class="text-purple-800 dark:text-purple-400">Me</span></h1>
      </div>
      
      <!-- Contact Form -->
      <div class="flex justify-center mt-10">
        <form @submit.prevent="handleSubmit" class="w-full max-w-lg p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              class="w-full px-3 py-2 text-gray-700 dark:text-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              required
            >
          </div>
          
          <div class="mb-4">
            <label for="subject" class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject"
              class="w-full px-3 py-2 text-gray-700 dark:text-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              required
            >
          </div>
          
          <div class="mb-6">
            <label for="message" class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              rows="4"
              class="w-full px-3 py-2 text-gray-700 dark:text-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
              required
            ></textarea>
          </div>
          
          <div class="flex justify-center">
            <button 
              type="submit"
              class="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="mb-10">
      <p class="text-center text-sm text-gray-900 dark:text-gray-300">kurtthezombie © {{ currentYear }}</p>
    </section>
  </main>
</template>

<script setup>
  import { sendEmail } from '@/services/email.service';
import { onMounted, ref } from 'vue';

  const currentYear = ref(new Date().getFullYear());
  const isDarkMode = ref(true);
  const formData = ref({
    name: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async () => {
    try {
      console.log('Form submitted:', formData.value);
      await sendEmail(formData.value);
      
      // Reset form
      formData.value = {
        name: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      console.error('Email send failed', error);
    }
  };

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle("dark",isDarkMode.value);
  }

  onMounted(() => {
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
    }
  })

</script>
