<template>
  <div id="app">
    <div class="snap-container">

      <!-- Hero -->
      <section class="snap-section hero-section">
        <div class="hero-inner">
          <header class="header">
            <div class="profile-section">
              <div class="profile-image-container">
                <img src="./assets/me.jpg" alt="Nakshh Kohli" class="profile-image" @click="toggleSunglasses">
                <img v-if="showSunglasses"
                     src="/glasses.png"
                     alt="Cool Sunglasses"
                     class="sunglasses"
                     :class="{
                       'sunglasses-animate': sunglassesAnimating,
                       'sunglasses-animate-out': sunglassesAnimatingOut
                     }">
              </div>
              <div class="profile-info">
                <h1 class="name">Nakshh Kohli</h1>
                <p class="title">Software Engineer · Hang Ten Systems</p>
                <p class="location">📍 Menlo Park, California</p>
                <p class="status">CS & AI · Purdue '26</p>
              </div>
              <div class="social-links">
                <a href="mailto:nakshh764@gmail.com" class="social-link" title="Email">
                  <i class="fas fa-envelope social-icon"></i>
                  <span class="social-text">Email</span>
                </a>
                <a href="https://github.com/nakshh" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
                  <i class="fab fa-github social-icon"></i>
                  <span class="social-text">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/nakshhkohli" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                  <i class="fab fa-linkedin social-icon"></i>
                  <span class="social-text">LinkedIn</span>
                </a>
                <a href="https://resume.nakshhkohli.com" target="_blank" rel="noopener noreferrer" class="social-link" title="Resume">
                  <i class="fas fa-file social-icon"></i>
                  <span class="social-text">Resume</span>
                </a>
              </div>
            </div>
            <div class="core-pursuit">
              <p><em>"Blend technology for everyday solutions"</em></p>
            </div>
          </header>

          <div class="about-section">
            <div class="content">
              <p>
                I'm a <strong>Software Engineer at Hang Ten Systems</strong>, based in <strong>Menlo Park, California</strong>. I recently graduated from Purdue with a degree in <strong>Computer Science & AI</strong>. Previously, I built <strong>LLM infrastructure</strong> at <strong>DevRev</strong> — writing code that runs in production and scales with users. Before that, I built a <strong>thermal diagnostics dashboard</strong> for <strong>agri-machinery</strong> and worked at <strong>Krafton</strong> on <strong>text clustering</strong> and <strong>recommendation systems</strong>.
              </p>
              <p>
                This site tracks my work, but it's not just a portfolio. It's also where the rest of me shows up — the part that spends too much time curating <strong>DJ sets</strong>, has a soft spot for my <strong>Audi</strong>, and thought <strong>skydiving</strong> would be a fun way to stay grounded.
              </p>
              <p>
                I've always liked <em>figuring things out</em> — why something works, why it doesn't, and what happens if you push it a little further. Most of what I do comes down to <strong>logic</strong>, <strong>structure</strong>, and getting the pieces to fit cleanly.
              </p>
            </div>
          </div>
        </div>

        <div class="scroll-hint">
          <i class="fas fa-chevron-down"></i>
        </div>
      </section>

      <!-- Projects -->
      <SelectedBuilds />

      <!-- Thoughts -->
      <section class="snap-section thoughts-section">
        <div class="thoughts-inner">
          <h2 class="section-title">Thoughts</h2>
          <p class="empty-state">Nothing here yet — check back soon.</p>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectedBuilds from './components/SelectedBuilds.vue'

const showSunglasses = ref(false)
const sunglassesAnimating = ref(false)
const sunglassesAnimatingOut = ref(false)

const toggleSunglasses = () => {
  if (!showSunglasses.value) {
    showSunglasses.value = true
    sunglassesAnimating.value = true
    sunglassesAnimatingOut.value = false
    setTimeout(() => {
      sunglassesAnimating.value = false
    }, 800)
  } else {
    sunglassesAnimatingOut.value = true
    sunglassesAnimating.value = false
    setTimeout(() => {
      showSunglasses.value = false
      sunglassesAnimatingOut.value = false
    }, 600)
  }
}
</script>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
  overscroll-behavior-x: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background-color: #0a0a0a;
  color: #e1e1e1;
  line-height: 1.6;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}

#app {
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

/* ─── Snap scroll ────────────────────────────────────────── */
.snap-container {
  height: 100vh;
  height: 100svh;
  overflow-y: scroll;
  overflow-x: hidden;
  overscroll-behavior-x: none;
  touch-action: pan-y;
  scroll-snap-type: y mandatory;
}

.snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3rem 2rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Hero ───────────────────────────────────────────────── */
.hero-section {
  align-items: center;
  justify-content: center;
}

.hero-inner {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-out;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  font-size: 1.1rem;
  animation: bounce 2s infinite;
  pointer-events: none;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-8px); }
  60% { transform: translateX(-50%) translateY(-4px); }
}

/* ─── Header ─────────────────────────────────────────────── */
.header {
  margin-bottom: 2.5rem;
}

.profile-section {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.profile-image-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 25%;
  object-fit: cover;
  border: 2px solid #333;
  transition: transform 0.2s ease;
}

@media (hover: hover) {
  .profile-image:hover {
    transform: scale(1.02);
  }

  .social-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #6b9bd1;
    transform: translateY(-1px);
    width: 120px;
    justify-content: flex-start;
    padding-left: 12px;
    padding-right: 12px;
  }

  .social-link:hover .social-icon {
    color: #ffffff;
  }

  .social-link:hover .social-text {
    opacity: 1;
    transform: translateX(0);
    color: #ffffff;
    max-width: 80px;
    margin-left: 8px;
  }
}

/* Sunglasses */
.sunglasses {
  position: absolute;
  top: 30%;
  left: 49%;
  transform: translateX(-50%);
  z-index: 10;
  width: 90px;
  height: auto;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  pointer-events: none;
}

.sunglasses-animate {
  animation: flyInSunglasses 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.sunglasses-animate-out {
  animation: flyOutSunglasses 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

@keyframes flyInSunglasses {
  0%   { transform: translateX(-200px) translateY(-100px) rotate(-20deg) scale(0.5); opacity: 0; }
  60%  { transform: translateX(-40px) translateY(10px) rotate(5deg) scale(1.1); opacity: 1; }
  80%  { transform: translateX(-60px) translateY(-5px) rotate(-2deg) scale(0.95); }
  100% { transform: translateX(-50%) translateY(0) rotate(0deg) scale(1); opacity: 1; }
}

@keyframes flyOutSunglasses {
  0%   { transform: translateX(-50%) translateY(0) rotate(0deg) scale(1); opacity: 1; }
  60%  { transform: translateX(-30px) translateY(-10px) rotate(15deg) scale(1.1); opacity: 0.8; }
  80%  { transform: translateX(50px) translateY(-40px) rotate(45deg) scale(0.8); opacity: 0.4; }
  100% { transform: translateX(250px) translateY(-120px) rotate(90deg) scale(0.3); opacity: 0; }
}

.profile-info {
  flex: 1;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.title {
  font-size: 1.2rem;
  color: #8bb3e0;
  font-weight: 500;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
}

.location {
  font-size: 1rem;
  color: #c1c1c1;
  margin-bottom: 0.5rem;
}

.status {
  font-size: 0.85rem;
  color: #6b9bd1;
  font-weight: 500;
  background: rgba(107, 155, 209, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 16px;
  border: 1px solid rgba(107, 155, 209, 0.2);
  display: inline-block;
  letter-spacing: 0.2px;
  width: fit-content;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  align-items: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  white-space: nowrap;
}

.social-icon {
  font-size: 1.5rem;
  color: #c1c1c1;
  transition: color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  flex-shrink: 0;
}

.social-text {
  font-size: 0.95rem;
  color: #c1c1c1;
  font-weight: 500;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-left: 0;
  white-space: nowrap;
  max-width: 0;
  overflow: hidden;
}

.core-pursuit {
  text-align: center;
  margin-top: 1rem;
}

.core-pursuit p {
  font-size: 1.1rem;
  color: #8bb3e0;
  font-style: italic;
}

/* ─── About ──────────────────────────────────────────────── */
.about-section .content {
  text-align: justify;
}

@media (hover: hover) and (pointer: fine) {
  .about-section:hover .content p {
    color: #777;
  }

  .about-section:hover .content strong,
  .about-section:hover .content em {
    color: #e1e1e1;
  }
}

.content {
  font-size: 1rem;
  line-height: 1.7;
  color: #c1c1c1;
}

.content p {
  margin-bottom: 1.2rem;
}

.content p:last-child {
  margin-bottom: 0;
}

/* ─── Thoughts ───────────────────────────────────────────── */
.thoughts-section {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.thoughts-inner {
  animation: fadeIn 0.6s ease-out;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: 0.3px;
}

.empty-state {
  color: #666;
  font-size: 0.95rem;
}

/* ─── Mobile ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  .snap-section {
    padding: 2rem 1.25rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    align-items: center;
  }

  .social-links {
    position: static;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
  }

  .social-link {
    width: auto;
    height: 45px;
    justify-content: flex-start;
    padding-left: 10px;
    padding-right: 10px;
    transition: none;
  }

  .social-icon {
    font-size: 1.3rem;
    transition: none;
  }

  .social-text {
    font-size: 0.9rem;
    margin-left: 6px;
    opacity: 1;
    width: auto;
    max-width: none;
    transform: translateX(0);
    transition: none;
  }

  .profile-info {
    height: auto;
    align-items: center;
  }

  .name {
    font-size: 2rem;
  }

  .title {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 1.8rem;
  }

  .title {
    font-size: 1rem;
  }
}
</style>
