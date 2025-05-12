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
    
    <AboutMe />
    <Skills />
    <MyProjects />
    <SocialLinks />

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
              :disabled="isLoading"
              class="btn bg-purple-800 hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-300"
            >
              <span v-if="isLoading" class="loading loading-spinner"></span> <!-- Show spinner when loading -->
              <span v-else>Send Message</span> <!-- Show text when not loading -->
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
  import AboutMe from '@/components/AboutMe.vue';
import MyProjects from '@/components/MyProjects.vue';
import Skills from '@/components/Skills.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import { sendEmail } from '@/services/email.service';
import toast from '@/utils/toast';
import { onMounted, ref } from 'vue';

  const currentYear = ref(new Date().getFullYear());
  const isDarkMode = ref(true);
  const formData = ref({
    name: '',
    subject: '',
    message: ''
  });
  const isLoading = ref(false);

  const canSend = () => {
    const lastSent = localStorage.getItem("lastEmailSent");
    if (!lastSent) return true;

    const now = new Date();
    const lastDate = new Date(parseInt(lastSent, 10));

    return now.toDateString() !== lastDate.toDateString();
  }

  const handleSubmit = async () => {
    if(!canSend()) {
      toast.error('You can only send one message per day.');
      return;
    }

    isLoading.value = true;
    try {
      console.log('Form submitted:', formData.value);
      
      await sendEmail(formData.value);
      localStorage.setItem("lastEmailSent", Date.now());
      formData.value = {
        name: '',
        subject: '',
        message: ''
      };
      toast.success('Email successfully sent.');
    } catch (error) {
      console.error('Email send failed', error);
      toast.error('Something went wrong. Try again later.');
    } finally {
      isLoading.value = false;
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
