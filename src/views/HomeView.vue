<script setup>
</script>

<template>
  <main class="bg-gray-900 text-white scroll-smooth flex flex-col justify-center">
    <section id="landing">
      <div class="flex flex-row gap-x-20 justify-center items-center h-screen gap-y-10">
        <div class="flex flex-col gap-y-5 items-start">
          <h1 class="text-5xl">Hi, I'm <span class="text-purple-300">Kurt Desmond Cabaluna</span></h1>
          <div class="flex flex-row justify-start gap-x-10">
            <a href="#about" class="pb-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-500 transition duration-200">About</a>
            <a href="#projects" class="pb-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-00 transition duration-200">Projects</a>
            <a href="#" class="pb-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-500 transition duration-200">Contact</a>
          </div>
        </div>
        <div class="flex">
          <img src="../assets/kurt.png" alt="" width="300"
            class="rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-700 shadow-gray-700 transition duration-500 ease-in-out" />
        </div>
      </div>
    </section>

    <section id="about" class="flex flex-col items-center justify-center gap-y-10 mb-10">
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
      <div>
        <a class="rounded-lg bg-purple-800 hover:bg-purple-600 p-3 px-3 hover:shadow-lg hover:shadow-emerald-800 transition duration-500 ease-in-out" href="/Resume.pdf" download>Download Resume</a>
      </div>
    </section>
    
    <section id="projects">

    </section>
  </main>
</template>
