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
              <p class="title">CS + AI at Purdue</p>
              <p class="location">📍 West Lafayette, Indiana</p>
              <p class="status">Open to full-time roles • Graduating May 2026</p>
            </div>
          <div class="social-links">
            <a href="mailto:kohli16@purdue.edu" class="social-link" title="Email">
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
        <div class="content">
          <p>
            I'm a senior at Purdue studying <strong>Computer Science & AI</strong>. Right now, I'm working on <strong>LLM infrastructure</strong> at <strong>DevRev</strong>, writing code that runs in production and scales with users. Before that, I built a <strong>thermal diagnostics dashboard</strong> for <strong>agri-machinery</strong> and worked across <strong>data tooling and system design</strong>.
          </p>
          <p>
            I've always liked <em>figuring things out</em> — why something works, why it doesn't, and what happens if you push it a little further. Most of what I do comes down to <strong>logic</strong>, <strong>structure</strong>, and getting the pieces to fit cleanly.
          </p>
          <p>
            This site tracks my work, but it's not just a portfolio. It's also where the rest of me shows up — the part that spends too much time curating <strong>DJ sets</strong>, has a soft spot for old <strong>Audis</strong>, and thought <strong>skydiving</strong> would be a fun way to reset before finals. You'll find a few projects, maybe a few thoughts, and if you catch a bug or a typo, congrats. You've just joined the QA team.
          </p>
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
                <span class="duration">May 2025 - Present</span>
              </div>
              <ul class="experience-details">
                <li>Engineered chat completion support and rejection rules at the gateway level using Go, reducing latency and preventing abuse</li>
                <li>Developed token/model-level tracers on LangChain, Python, and Go services for usage analytics and rate limiting</li>
                <li>Designing provider-agnostic proxy for global policy control and compliance across geographic regions</li>
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
                <li>Created Minsimi AI Slackbot delivering insights from 100+ YouTube channels for community sentiment analysis</li>
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
                <li>Executed data ingestion and analysis using Saama's Data Hub platform for clinical research</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Skills Tab -->
        <div v-show="activeTab === 'skills'" class="tab-panel">
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Languages</h4>
              <p>Python, Java, C, R, SQL</p>
            </div>
            <div class="skill-category">
              <h4>Technologies</h4>
              <p>AWS, Git, PostgreSQL, Docker, PyTorch, LangChain, REST/gRPC</p>
            </div>
            <div class="skill-category">
              <h4>Soft Skills</h4>
              <p>Design Thinking, Technical Writing, Collaboration</p>
            </div>
          </div>
        </div>

        <!-- Education Tab -->
        <div v-show="activeTab === 'education'" class="tab-panel">
          <div class="content">
            <div class="education-item">
              <h3>Bachelor of Science in Computer Science & Artificial Intelligence</h3>
              <p class="education-details">Purdue University • West Lafayette, IN • Aug 2022 - May 2026</p>
              <p><strong>GPA:</strong> 3.46 • <strong>Recognition:</strong> Dean's List and Semester Honors</p>
              <p><strong>Key Courses:</strong> Natural Language Processing, Data Mining & Machine Learning, Advanced Analysis of Algorithms, Data Structures and Algorithms</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('experience')
const showSunglasses = ref(false)
const sunglassesAnimating = ref(false)
const sunglassesAnimatingOut = ref(false)

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

.profile-image:hover {
  transform: scale(1.02);
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

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #6b9bd1;
  transform: translateY(-1px);
  width: 120px;
  justify-content: flex-start;
  padding-left: 12px;
  padding-right: 12px;
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

.social-icon {
  font-size: 1.5rem;
  color: #c1c1c1;
  transition: color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  flex-shrink: 0;
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-category h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.skill-category p {
  font-size: 0.95rem;
  color: #c1c1c1;
  line-height: 1.5;
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
    width: 45px;
    height: 45px;
  }
  
  .social-icon {
    font-size: 1.3rem;
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
  
  .skills-grid {
    grid-template-columns: 1fr;
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
  }
  
  .social-links {
    position: static;
  }
  
  .social-icon {
    font-size: 1rem;
  }
  
  .social-text {
    font-size: 0.85rem;
    margin-left: 6px;
    opacity: 1;
    width: auto;
    transform: translateX(0);
  }
  
  /* Mobile Sunglasses */
  .sunglasses {
    width: 80px;
  }
}
</style>
