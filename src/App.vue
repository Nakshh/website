<template>
  <div id="app">
    <div class="container">
      
      <!-- Header Section -->
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
              <p class="title">CS & AI · Purdue '26</p>
              <p class="location">📍 West Lafayette, Indiana</p>
              <p class="status">Open to full-time roles • Available now</p>
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

      <!-- About Section (Always Visible) -->
      <section class="about-section">
        <div class="content" @mouseenter="hideThoughtBubble">
          <p>
            I recently graduated from Purdue with a degree in <strong>Computer Science & AI</strong>. Most recently, I built <strong>LLM infrastructure</strong> at <strong>DevRev</strong> — writing code that runs in production and scales with users. Before that, I built a <strong>thermal diagnostics dashboard</strong> for <strong>agri-machinery</strong> and worked at <strong>Krafton</strong> on <strong>text clustering</strong> and <strong>recommendation systems</strong>. I'm now looking for full-time <strong>software engineering</strong> or <strong>AI</strong> roles where I can keep building things that matter.
          </p>
          <p>
            This site tracks my work, but it's not just a portfolio. It's also where the rest of me shows up — the part that spends too much time curating <strong>DJ sets</strong>, has a soft spot for my <strong>Audi</strong>, and thought <strong>skydiving</strong> would be a fun way to stay grounded.
          </p>
          <p>
            I've always liked <em>figuring things out</em> — why something works, why it doesn't, and what happens if you push it a little further. Most of what I do comes down to <strong>logic</strong>, <strong>structure</strong>, and getting the pieces to fit cleanly.
          </p>
        </div>
        
        <!-- Thought Bubble Hint -->
        <div v-if="showThoughtBubble" class="thought-bubble" :class="{ 'fading-out': thoughtBubbleFadingOut }" @click="hideThoughtBubble">
          <div class="bubble-content">
            Hover for keywords! 💡
          </div>
          <div class="bubble-tail"></div>
        </div>
      </section>

      <!-- Tab Navigation -->
      <nav class="tab-navigation">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['tab-button', { 'active': activeTab === tab.id }]"
        >
          {{ tab.name }}
        </button>
      </nav>

      <!-- Tab Content -->
      <section class="tab-content">

        <!-- Experience Tab -->
        <div v-show="activeTab === 'experience'" class="tab-panel">
          <div class="experience-list">
            
            <div class="experience-item">
              <div class="experience-header">
                <div class="experience-title">
                  <h3>AI Intern</h3>
                  <span class="company">DevRev • Palo Alto, CA</span>
                </div>
                <span class="duration">May 2025 - Aug 2025</span>
              </div>
              <ul class="experience-details">
                <li>Engineered chat completion support and rejection rules at the gateway level using Go, reducing latency and preventing abuse</li>
                <li>Developed token/model-level tracers on LangChain, Python, and Go services for usage analytics and rate limiting</li>
                <li>Shipped provider-agnostic LLM proxy to production, enabling global policy control and compliance enforcement across geographic regions</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="experience-header">
                <div class="experience-title">
                  <h3>Software Developer</h3>
                  <span class="company">Chariot Command • West Lafayette, IN</span>
                </div>
                <span class="duration">Aug 2024 - May 2025</span>
              </div>
              <ul class="experience-details">
                <li>Engineered PyQt5 and OpenCV interface for FLIR thermal and RGB stream processing with temperature tracking</li>
                <li>Built multi-threaded playback engine supporting 8 sensor units with synchronized logging and diagnostics</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="experience-header">
                <div class="experience-title">
                  <h3>Deep Learning Intern</h3>
                  <span class="company">Krafton Inc. (PUBG Corporation) • Madison, WI</span>
                </div>
                <span class="duration">Jun 2024 - Aug 2024</span>
              </div>
              <ul class="experience-details">
                <li>Developed LLM-based text clustering framework achieving 96% accuracy for product feature prioritization</li>
                <li>Deployed Minsimi AI Slackbot company-wide, surfacing real-time community sentiment from 100+ YouTube and Twitch channels on each PUBG update cycle</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="experience-header">
                <div class="experience-title">
                  <h3>Software Engineering Intern</h3>
                  <span class="company">Saama Technologies • Campbell, CA</span>
                </div>
                <span class="duration">May 2023 - Aug 2023</span>
              </div>
              <ul class="experience-details">
                <li>Automated clinical trial data preparation with modular SQL scripts, streamlining development pipeline</li>
                <li>Ingested and analyzed multi-source clinical trial datasets to support research pipeline delivery and reporting</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Skills Tab -->
        <div v-show="activeTab === 'skills'" class="tab-panel">
          <div class="skills-section">
            <div class="skills-row">
              <h4 class="skills-row-title">Languages</h4>
              <div class="skills-icons">
                <div class="skill-item">
                  <i class="fab fa-python skill-icon"></i>
                  <span class="skill-name">Python</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-code skill-icon"></i>
                  <span class="skill-name">Go</span>
                </div>
                <div class="skill-item">
                  <i class="fab fa-java skill-icon"></i>
                  <span class="skill-name">Java</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-code skill-icon"></i>
                  <span class="skill-name">C</span>
                </div>
                <div class="skill-item">
                  <i class="fab fa-r-project skill-icon"></i>
                  <span class="skill-name">R</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-database skill-icon"></i>
                  <span class="skill-name">SQL</span>
                </div>
              </div>
            </div>
            
            <div class="skills-row">
              <h4 class="skills-row-title">Technologies</h4>
              <div class="skills-icons">
                <div class="skill-item">
                  <i class="fab fa-aws skill-icon"></i>
                  <span class="skill-name">AWS</span>
                </div>
                <div class="skill-item">
                  <i class="fab fa-git-alt skill-icon"></i>
                  <span class="skill-name">Git</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-database skill-icon"></i>
                  <span class="skill-name">PostgreSQL</span>
                </div>
                <div class="skill-item">
                  <i class="fab fa-docker skill-icon"></i>
                  <span class="skill-name">Docker</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-brain skill-icon"></i>
                  <span class="skill-name">PyTorch</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-link skill-icon"></i>
                  <span class="skill-name">LangChain</span>
                </div>
                <div class="skill-item">
                  <i class="fas fa-network-wired skill-icon"></i>
                  <span class="skill-name">REST/gRPC</span>
                </div>
              </div>
            </div>
          </div>
          <p class="skills-disclaimer">
            I have varying levels of experience with many other popular languages and frameworks, but these represent the technologies I have the most knowledge with and enjoy working with most.
          </p>
        </div>

        <!-- Education Tab -->
        <div v-show="activeTab === 'education'" class="tab-panel">
          <div class="content">
            <div class="education-item">
              <h3>Bachelor of Science in Computer Science & Artificial Intelligence</h3>
              <p class="education-details">Purdue University • West Lafayette, IN • Aug 2022 – May 2026</p>
              <p><strong>GPA:</strong> 3.46</p>
              <p><strong>Key Courses:</strong> CS 577 - Natural Language Processing, CS 373 - Data Mining & Machine Learning, CS 381 - Advanced Analysis of Algorithms, CS 251 - Data Structures and Algorithms</p>
              
              <div style="margin-top: 1.5rem;">
                <h4 style="color: #8bb3e0; margin-bottom: 0.75rem; font-size: 1rem;">Leadership & Teaching</h4>
                <p><strong>Teaching Assistant for Object Oriented Programming in Java:</strong> Mentored 60 students each semester for 3 consecutive semesters, providing guidance on programming concepts and best practices.</p>
                <p><strong>Department of Computer Science Ambassador:</strong> Provide comprehensive academic guidance to current CS students, addressing their educational needs and career aspirations, including hosting focused events with faculty.</p>
                <p><strong>Guest Center Tour Guide as Alumni Committee Lead:</strong> Lead tours for prospective students and VIP alumni, representing the university and department.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeTab = ref('experience')
const showSunglasses = ref(false)
const sunglassesAnimating = ref(false)
const sunglassesAnimatingOut = ref(false)
const showThoughtBubble = ref(false)
const thoughtBubbleFadingOut = ref(false)

const tabs = [
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'education', name: 'Education' }
]

const toggleSunglasses = () => {
  if (!showSunglasses.value) {
    // Flying IN
    showSunglasses.value = true
    sunglassesAnimating.value = true
    sunglassesAnimatingOut.value = false
    // Remove animation class after animation completes
    setTimeout(() => {
      sunglassesAnimating.value = false
    }, 800)
  } else {
    // Flying OUT
    sunglassesAnimatingOut.value = true
    sunglassesAnimating.value = false
    // Hide sunglasses after fly-out animation completes
    setTimeout(() => {
      showSunglasses.value = false
      sunglassesAnimatingOut.value = false
    }, 600)
  }
}

const hideThoughtBubble = () => {
  if (showThoughtBubble.value && !thoughtBubbleFadingOut.value) {
    thoughtBubbleFadingOut.value = true
    // Hide completely after fade-out animation
    setTimeout(() => {
      showThoughtBubble.value = false
      thoughtBubbleFadingOut.value = false
    }, 600)
  }
}

// Show thought bubble after 5 seconds on page load
onMounted(() => {
  setTimeout(() => {
    showThoughtBubble.value = true
    // Auto-hide after 10 seconds
    setTimeout(() => {
      hideThoughtBubble()
    }, 10000)
  }, 5000)
})
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background-color: #0a0a0a;
  color: #e1e1e1;
  line-height: 1.6;
  scroll-behavior: smooth;
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
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.header {
  margin-bottom: 3rem;
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

/* Desktop hover effects only */
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

/* Custom Sunglasses Image */
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
  0% {
    transform: translateX(-200px) translateY(-100px) rotate(-20deg) scale(0.5);
    opacity: 0;
  }
  60% {
    transform: translateX(-40px) translateY(10px) rotate(5deg) scale(1.1);
    opacity: 1;
  }
  80% {
    transform: translateX(-60px) translateY(-5px) rotate(-2deg) scale(0.95);
  }
  100% {
    transform: translateX(-50%) translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes flyOutSunglasses {
  0% {
    transform: translateX(-50%) translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  60% {
    transform: translateX(-30px) translateY(-10px) rotate(15deg) scale(1.1);
    opacity: 0.8;
  }
  80% {
    transform: translateX(50px) translateY(-40px) rotate(45deg) scale(0.8);
    opacity: 0.4;
  }
  100% {
    transform: translateX(250px) translateY(-120px) rotate(90deg) scale(0.3);
    opacity: 0;
  }
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
  font-weight: 400;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  position: relative;
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

/* About Section (Always Visible) */
.about-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
}

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

/* Thought Bubble - Desktop Only */
@media (min-width: 769px) {
  .about-section {
    position: relative;
  }

  .thought-bubble {
    position: absolute;
    top: 20%;
    right: -180px;
    z-index: 15;
    animation: bubbleFadeIn 0.8s ease-out;
    cursor: pointer;
  }

  .thought-bubble.fading-out {
    animation: bubbleFadeOut 0.6s ease-in forwards;
  }

  .bubble-content {
    background: rgba(136, 136, 136, 0.15);
    border: 1px solid rgba(136, 136, 136, 0.3);
    color: #999;
    padding: 0.75rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .bubble-content:hover {
    background: rgba(136, 136, 136, 0.25);
    border-color: rgba(136, 136, 136, 0.5);
    color: #bbb;
  }

  .bubble-tail {
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 12px solid rgba(136, 136, 136, 0.15);
  }

  @keyframes bubbleFadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.9);
    }
    60% {
      opacity: 1;
      transform: translateY(-5px) scale(1.05);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes bubbleFadeOut {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    40% {
      opacity: 0.6;
      transform: translateY(-3px) scale(0.95);
    }
    100% {
      opacity: 0;
      transform: translateY(8px) scale(0.8);
    }
  }
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #333;
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tab-navigation::-webkit-scrollbar {
  display: none;
}

.tab-button {
  background: none;
  border: none;
  color: #888;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  font-family: inherit;
}

.tab-button:hover {
  color: #c1c1c1;
  background-color: rgba(255, 255, 255, 0.02);
}

.tab-button.active {
  color: #ffffff;
  border-bottom-color: #6b9bd1;
  background-color: rgba(255, 255, 255, 0.03);
}

.tab-button:focus {
  outline: none;
}

/* Tab Content */
.tab-content {
  min-height: 400px;
}

.tab-panel {
  animation: fadeInTab 0.3s ease-out;
}

@keyframes fadeInTab {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Content Styles */
.content {
  font-size: 1rem;
  line-height: 1.7;
  color: #c1c1c1;
}

.content p {
  margin-bottom: 1.2rem;
}

.content a {
  color: #6b9bd1;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.content a:hover {
  color: #8bb3e0;
  border-bottom-color: #6b9bd1;
}

/* Experience */
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid #333;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.experience-item:hover {
  background-color: rgba(255, 255, 255, 0.04);
  border-color: #444;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.experience-title h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.company {
  font-size: 0.95rem;
  color: #8bb3e0;
  font-weight: 400;
}

.duration {
  font-size: 0.9rem;
  color: #888;
  white-space: nowrap;
  margin-left: 1rem;
}

.experience-details {
  list-style: none;
  padding: 0;
}

.experience-details li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #c1c1c1;
  line-height: 1.5;
}

.experience-details li::before {
  content: "•";
  color: #6b9bd1;
  position: absolute;
  left: 0;
}

/* Skills */
.skills-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skills-row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skills-row-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #8bb3e0;
  margin-bottom: 1.5rem;
  text-align: center;
}

.skills-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid #333;
  border-radius: 12px;
  transition: all 0.3s ease;
  width: 70px;
  height: 70px;
}

.skill-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: #6b9bd1;
  transform: translateY(-2px);
}

.skill-icon {
  font-size: 1.5rem;
  color: #6b9bd1;
  transition: color 0.3s ease;
}

.skill-item:hover .skill-icon {
  color: #8bb3e0;
}

.skill-name {
  font-size: 0.7rem;
  color: #c1c1c1;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
}

.skills-disclaimer {
  margin-top: 2.5rem;
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
  text-align: center;
  line-height: 1.5;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Education */
.education-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.education-details {
  font-size: 0.95rem;
  color: #8bb3e0;
  margin-bottom: 0.75rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .container {
    padding: 2rem 1rem;
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
  
  .name {
    font-size: 2rem;
  }
  
  .title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .status {
    font-size: 0.9rem;
    padding: 0.35rem 0.7rem;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    justify-content: flex-start;
  }
  
  .tab-navigation {
    justify-content: flex-start;
  }
  
  .tab-button {
    padding: 1rem 1rem;
    font-size: 0.9rem;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .duration {
    margin-left: 0;
  }
  
  .skills-section {
    gap: 1.5rem;
  }
  
  .skills-icons {
    gap: 0.75rem;
  }
  
  .skill-item {
    width: 60px;
    height: 60px;
    padding: 0.5rem;
  }
  
  .skill-icon {
    font-size: 1.25rem;
  }
  
  .skill-name {
    font-size: 0.65rem;
  }
  
  .skills-disclaimer {
    margin-top: 2rem;
    font-size: 0.85rem;
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem 1rem;
  }
  
  .name {
    font-size: 1.8rem;
  }
  
  .title {
    font-size: 1rem;
  }
  
  .status {
    font-size: 0.85rem;
    padding: 0.3rem 0.6rem;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    justify-content: flex-start;
  }
  
  .tab-button {
    padding: 0.75rem 0.75rem;
    font-size: 0.85rem;
  }
  
  .experience-item {
    padding: 1rem;
  }
  
  .social-link {
    width: auto;
    justify-content: flex-start;
    padding-left: 10px;
    padding-right: 10px;
    transition: none;
  }
  
  .social-links {
    position: static;
  }
  
  .social-icon {
    font-size: 1rem;
    transition: none;
  }
  
  .social-text {
    font-size: 0.85rem;
    margin-left: 6px;
    opacity: 1;
    width: auto;
    max-width: none;
    transform: translateX(0);
    transition: none;
  }
  
  /* Mobile Sunglasses */
  .sunglasses {
    width: 80px;
  }
}
</style>
