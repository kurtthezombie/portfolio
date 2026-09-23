<template>
  <main class="site-shell" id="top">
    <header class="site-header">
      <div class="page-wrap nav-bar">
        <a class="brand" href="#top">kurt.gpt</a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
        </nav>
        <button class="theme-toggle" type="button" @click="toggleTheme">theme</button>
      </div>
    </header>

    <section class="page-wrap hero-section">
      <div>
        <p class="eyebrow">kurt cabaluna · software engineer</p>
        <h1>Making web software make sense.</h1>
      </div>
      <div class="hero-copy">
        <p>
          I build web apps, explore ideas through code, and enjoy figuring out
          how all the pieces fit together.
        </p>
        <div class="hero-meta">
          <span>Cebu, PH</span>
          <span>Open to work</span>
          <span>Full stack / C# / .NET / React / Laravel</span>
        </div>
        <aside class="system-card" aria-label="How I approach software projects">
          <div class="system-card-head">
            <span>how I tend to work</span>
            <span class="availability"><i></i>open to work</span>
          </div>
          <div class="system-flow" aria-hidden="true">
            <span class="system-node">interface</span>
            <span class="system-link"></span>
            <span class="system-node">application</span>
            <span class="system-link"></span>
            <span class="system-node">data</span>
          </div>
          <div class="system-card-foot">
            <span>make it useful</span>
            <span>make it hold together</span>
          </div>
        </aside>
      </div>
    </section>

    <MyProjects />
    <AboutMe />
    <Timeline />

    <section class="contact-section" id="contact">
      <div class="page-wrap">
        <h2>Have a project or role in mind?</h2>
        <p class="contact-intro">
          Open to software-engineering roles, project conversations, and a
          good technical problem.
        </p>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="contact-form-row">
            <label>
              <span>name</span>
              <input v-model="formData.name" type="text" autocomplete="name" required>
            </label>
            <label>
              <span>subject</span>
              <input v-model="formData.subject" type="text" required>
            </label>
          </div>
          <label class="message-field">
            <span>message</span>
            <textarea v-model="formData.message" rows="5" required></textarea>
          </label>
          <div class="form-footer">
            <button class="submit-button" type="submit" :disabled="isLoading">
              {{ isLoading ? 'Sending...' : 'Send message' }}
            </button>
            <SocialLinks />
          </div>
        </form>
      </div>
    </section>

    <footer class="page-wrap site-footer">
      <span>Copyright {{ currentYear }} Kurt</span>
      <span>built by boredom</span>
    </footer>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AboutMe from '@/components/AboutMe.vue'
import MyProjects from '@/components/MyProjects.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import Timeline from '@/components/Timeline.vue'
import { sendEmail } from '@/services/email.service'
import toast from '@/utils/toast'

const currentYear = new Date().getFullYear()
const formData = ref({ name: '', subject: '', message: '' })
const isLoading = ref(false)
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

function setTheme(theme, save = false) {
  document.documentElement.dataset.theme = theme

  if (save) {
    localStorage.setItem('theme', theme)
  }
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  setTheme(nextTheme, true)
}

function handleSystemThemeChange(event) {
  if (!localStorage.getItem('theme')) {
    setTheme(event.matches ? 'dark' : 'light')
  }
}

function canSend() {
  const lastSent = localStorage.getItem('lastEmailSent')
  if (!lastSent) return true

  return new Date().toDateString() !== new Date(Number(lastSent)).toDateString()
}

async function handleSubmit() {
  if (!canSend()) {
    toast.error('You can only send one message per day.')
    return
  }

  isLoading.value = true
  try {
    await sendEmail(formData.value)
    localStorage.setItem('lastEmailSent', Date.now())
    formData.value = { name: '', subject: '', message: '' }
    toast.success('Email successfully sent.')
  } catch (error) {
    console.error('Email send failed', error)
    toast.error('Something went wrong. Try again later.')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  setTheme(localStorage.getItem('theme') || (systemTheme.matches ? 'dark' : 'light'))
  systemTheme.addEventListener('change', handleSystemThemeChange)
})

onBeforeUnmount(() => {
  systemTheme.removeEventListener('change', handleSystemThemeChange)
})
</script>
