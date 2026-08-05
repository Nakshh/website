<template>
  <section class="snap-section projects-section" aria-label="Selected builds">
    <header class="builds-header">
      <span class="builds-eyebrow">SELECTED BUILDS</span>
      <h2 class="builds-title">Projects</h2>
      <p class="builds-subtitle">Systems I've taken from idea to working software.</p>
    </header>

    <div class="builds-main">
      <Transition name="swap" mode="out-in">
        <div class="builds-pair" :key="activeProject.id">
          <div class="builds-visual">
            <div class="visual-frame" :style="{ '--accent': activeProject.accent }">
              <span class="reg-mark reg-mark--tl" aria-hidden="true"></span>
              <span class="reg-mark reg-mark--br" aria-hidden="true"></span>
              <span class="visual-tag">BUILD {{ activeProject.number }}</span>
              <span class="visual-status" :style="{ color: statusColor(activeProject.status) }">
                <span class="status-dot" :style="{ background: statusColor(activeProject.status) }" aria-hidden="true"></span>{{ activeProject.status }}
              </span>
              <img
                v-if="activeProject.image"
                :src="activeProject.image"
                :alt="`${activeProject.name} preview`"
                class="visual-image"
              >
              <i v-else :class="['visual-icon', 'fas', activeProject.icon]" aria-hidden="true"></i>
            </div>
          </div>

          <div
            class="builds-info"
            role="tabpanel"
            :id="`build-panel-${activeProject.id}`"
            :aria-labelledby="`build-tab-${activeProject.id}`"
            aria-live="polite"
          >
            <div class="info-head">
              <span class="info-number">PROJECT_{{ activeProject.number }}</span>
              <span class="info-year">{{ activeProject.year }}</span>
            </div>
            <h3 class="info-name">{{ activeProject.name }}</h3>
            <p class="info-tagline">{{ activeProject.tagline }}</p>

            <dl class="info-facts">
              <div v-for="fact in activeProject.facts" :key="fact.label" class="fact">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
            </dl>

            <div class="info-stack">
              <span v-for="tech in activeProject.stack" :key="tech" class="stack-tag">{{ tech }}</span>
            </div>

            <div class="info-actions">
              <a
                v-if="activeProject.github"
                :href="activeProject.github"
                target="_blank"
                rel="noopener noreferrer"
                class="action-link"
              >
                <i class="fab fa-github" aria-hidden="true"></i> Repository
              </a>
              <a
                v-if="activeProject.live"
                :href="activeProject.live"
                target="_blank"
                rel="noopener noreferrer"
                class="action-link"
              >
                <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> Live
              </a>
              <span v-if="!activeProject.github && !activeProject.live" class="action-note">
                Private build — not public
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <nav class="builds-selector" aria-label="Select a project">
      <div
        class="selector-rail"
        :style="{ gridTemplateColumns: `repeat(${projects.length}, 1fr)`, '--rail-accent': activeProject.accent }"
        role="tablist"
        aria-label="Projects"
        @keydown="onSelectorKeydown"
      >
        <span class="selector-track" :style="trackStyle" aria-hidden="true"></span>
        <button
          v-for="(project, i) in projects"
          :key="project.id"
          :id="`build-tab-${project.id}`"
          type="button"
          role="tab"
          :aria-selected="i === activeIndex ? 'true' : 'false'"
          :aria-controls="`build-panel-${project.id}`"
          :tabindex="i === activeIndex ? 0 : -1"
          :class="['selector-item', { active: i === activeIndex }]"
          :ref="(el) => setSelectorRef(el, i)"
          @click="selectProject(i)"
        >
          <span class="selector-number">{{ project.number }}</span>
          <span class="selector-name">{{ project.name }}</span>
        </button>
      </div>
    </nav>
  </section>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import sherlockGptCli from '../assets/sherlock-gpt-cli.png'
import wireframeViewer from '../assets/wireframe-viewer.png'
import mdsearchDemo from '../assets/mdsearch-demo.png'
import siteHero from '../assets/site-hero.jpg'

const projects = [
  {
    id: 'sherlock-gpt',
    number: '01',
    name: 'Sherlock GPT',
    tagline: 'A 9.6M-parameter transformer trained from scratch on the Sherlock Holmes canon, with an interactive terminal chat interface.',
    facts: [
      { label: 'MODEL', value: '9.6M-param decoder-only transformer' },
      { label: 'SCALE', value: '3.27M-char corpus, 8 Doyle novels' },
      { label: 'ROLE', value: 'Built model, training pipeline & CLI from scratch' },
    ],
    stack: ['Python', 'PyTorch', 'NumPy'],
    status: 'EXPERIMENT',
    year: '2026',
    github: 'https://github.com/Nakshh/sherlock-gpt',
    live: null,
    accent: '#c9a24a',
    icon: 'fa-magnifying-glass',
    image: sherlockGptCli,
  },
  {
    id: 'wireframe-viewer',
    number: '02',
    name: '3D Wireframe Viewer',
    tagline: 'A browser-based OBJ model viewer with a software 3D pipeline built from scratch — no WebGL, no Three.js, just math and a 2D canvas.',
    facts: [
      { label: 'PIPELINE', value: 'Hand-rolled Vec3/Mat3 math, rotation & perspective projection' },
      { label: 'FEATURES', value: 'OBJ parser, painter\'s-algorithm solid shading, free-fly controls' },
      { label: 'ROLE', value: 'Built renderer, parser & controls from scratch' },
    ],
    stack: ['TypeScript', 'Vite', 'HTML5 Canvas'],
    status: 'OPERATIONAL',
    year: '2026',
    github: 'https://github.com/Nakshh/3d-wireframe-viewer',
    live: 'https://3dwireframeviewer.netlify.app',
    accent: '#7dd3e0',
    icon: 'fa-cube',
    image: wireframeViewer,
  },
  {
    id: 'mdsearch',
    number: '03',
    name: 'mdsearch',
    tagline: 'Semantic search over a folder of markdown notes — finds what a note is about, not just what words it uses. Published to PyPI, with an MCP server so Claude can search your vault directly.',
    facts: [
      { label: 'PIPELINE', value: 'Heading-aware chunking -> local sentence-transformers embeddings -> FAISS' },
      { label: 'PERFORMANCE', value: 'SHA256 file manifest for incremental re-index — unchanged vaults re-index in ~0.01s' },
      { label: 'ROLE', value: 'Built chunker, embedding/index pipeline, CLI & MCP server; shipped to PyPI' },
    ],
    stack: ['Python', 'FAISS', 'sentence-transformers', 'Typer', 'MCP'],
    status: 'OPERATIONAL',
    year: '2026',
    github: 'https://github.com/Nakshh/mdsearch',
    live: 'https://pypi.org/project/mdsearch-cli/',
    accent: '#5ee6a0',
    icon: 'fa-magnifying-glass-chart',
    image: mdsearchDemo,
  },
  {
    id: 'site',
    number: '04',
    name: 'nakshhkohli.com',
    tagline: "This site — a hand-built Vue 3 SPA, no component library, down to a keyboard-navigable project carousel and mobile viewport quirks tuned by hand. You're looking at it.",
    facts: [
      { label: 'BUILD', value: 'Vue 3 + Vite SPA — every section, transition, and the carousel above is hand-rolled' },
      { label: 'UX', value: 'Accessible tablist-pattern project selector, scroll-snap layout tuned for mobile toolbar quirks' },
      { label: 'DEPLOY', value: 'Netlify, CI/CD on push to main, custom domain' },
    ],
    stack: ['Vue 3', 'Vite', 'Netlify'],
    status: 'OPERATIONAL',
    year: '2025–2026',
    github: 'https://github.com/nakshh/website',
    live: 'https://nakshhkohli.com',
    accent: '#8bb3e0',
    icon: 'fa-code',
    image: siteHero,
  },
]

const activeIndex = ref(0)
const activeProject = computed(() => projects[activeIndex.value])

const trackStyle = computed(() => ({
  width: `${100 / projects.length}%`,
  transform: `translateX(${activeIndex.value * 100}%)`,
  background: activeProject.value.accent,
}))

const statusColors = {
  OPERATIONAL: '#8fcf9a',
  EXPERIMENT: '#e0b975',
}
function statusColor(status) {
  return statusColors[status] || '#999'
}

const selectorEls = []
function setSelectorRef(el, i) {
  selectorEls[i] = el
}

function selectProject(i) {
  activeIndex.value = i
}

function onSelectorKeydown(e) {
  const navKeys = ['ArrowRight', 'ArrowLeft', 'Home', 'End']
  if (!navKeys.includes(e.key)) return
  e.preventDefault()

  let next = activeIndex.value
  if (e.key === 'ArrowRight') next = (activeIndex.value + 1) % projects.length
  else if (e.key === 'ArrowLeft') next = (activeIndex.value - 1 + projects.length) % projects.length
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = projects.length - 1

  activeIndex.value = next
  nextTick(() => selectorEls[next]?.focus())
}
</script>

<style scoped>
.projects-section {
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  padding: 1.85rem 2.5rem 1.5rem;
  background-color: #0c0d0f;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ─── Header ─────────────────────────────────────────────── */
.builds-header {
  flex-shrink: 0;
  margin-bottom: 1.5rem;
}

.builds-eyebrow {
  display: block;
  font-family: 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: #6b9bd1;
  letter-spacing: 0.18em;
  margin-bottom: 0.5rem;
}

.builds-title {
  font-size: 1.65rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.2px;
}

.builds-subtitle {
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.3rem;
}

/* ─── Main: visual + info ────────────────────────────────── */
.builds-main {
  flex: 1;
  min-height: 0;
}

.builds-pair {
  height: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2.25rem;
  align-items: stretch;
}

.builds-visual {
  min-height: 0;
  display: flex;
}

.visual-frame {
  --accent: #6b9bd1;
  position: relative;
  width: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%);
}

.reg-mark {
  position: absolute;
  width: 16px;
  height: 16px;
  opacity: 0.55;
}

.reg-mark--tl {
  top: 12px;
  left: 12px;
  border-top: 2px solid var(--accent);
  border-left: 2px solid var(--accent);
}

.reg-mark--br {
  bottom: 12px;
  right: 12px;
  border-bottom: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
}

.visual-tag {
  position: absolute;
  top: 14px;
  left: 36px;
  z-index: 1;
  font-family: 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
}

.visual-status {
  position: absolute;
  top: 14px;
  right: 20px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.85);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.visual-icon {
  font-size: 3.5rem;
  color: var(--accent);
  opacity: 0.9;
}

.visual-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1.5rem;
}

.builds-info {
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.65rem;
}

.info-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: #666;
}

.info-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
}

.info-tagline {
  font-size: 0.9rem;
  color: #a8a8a8;
  line-height: 1.5;
}

.info-facts {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.65rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.fact {
  display: flex;
  gap: 0.75rem;
  font-size: 0.82rem;
}

.fact dt {
  flex-shrink: 0;
  min-width: 62px;
  font-family: 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: #666;
  padding-top: 0.1rem;
}

.fact dd {
  color: #c1c1c1;
}

.info-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.stack-tag {
  font-size: 0.73rem;
  color: #8bb3e0;
  background: rgba(107, 155, 209, 0.1);
  border: 1px solid rgba(107, 155, 209, 0.2);
  border-radius: 4px;
  padding: 0.18rem 0.5rem;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.info-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.15rem;
}

.action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: #c1c1c1;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 0.4rem 0.75rem;
  transition: border-color 0.2s ease, color 0.2s ease;
}

@media (hover: hover) {
  .action-link:hover {
    border-color: #6b9bd1;
    color: #8bb3e0;
  }
}

.action-note {
  font-size: 0.8rem;
  color: #555;
  align-self: center;
  font-style: italic;
}

/* ─── Selector rail ──────────────────────────────────────── */
.builds-selector {
  flex-shrink: 0;
  margin-top: 1.4rem;
}

.selector-rail {
  position: relative;
  display: grid;
  gap: 0.6rem;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.selector-track {
  position: absolute;
  top: -1px;
  left: 0;
  height: 2px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.selector-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0.65rem;
  text-align: left;
  cursor: pointer;
  color: #666;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.selector-item.active {
  border-color: var(--rail-accent, #6b9bd1);
  color: #ffffff;
  background: rgba(255, 255, 255, 0.03);
}

@media (hover: hover) {
  .selector-item:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: #c1c1c1;
  }

  .selector-item.active:hover {
    border-color: var(--rail-accent, #6b9bd1);
    color: #ffffff;
  }
}

.selector-item:focus-visible,
.action-link:focus-visible {
  outline: 2px solid #6b9bd1;
  outline-offset: 2px;
}

.selector-number {
  font-family: 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  opacity: 0.8;
}

.selector-name {
  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─── Transition ─────────────────────────────────────────── */
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.swap-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.swap-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .swap-enter-active,
  .swap-leave-active,
  .selector-track,
  .action-link,
  .selector-item {
    transition: none !important;
  }
}

/* ─── Mobile ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  .projects-section {
    height: auto;
    min-height: 100vh;
    min-height: 100svh;
    overflow: visible;
    padding: 2.25rem 1.25rem 2rem;
  }

  .builds-main {
    flex: none;
  }

  .builds-pair {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .builds-visual {
    height: 200px;
  }

  .builds-info {
    overflow: visible;
  }

  .builds-selector {
    margin-top: 1.75rem;
  }

  .selector-rail {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .selector-track {
    display: none;
  }

  .selector-item {
    flex-shrink: 0;
    min-width: 150px;
  }
}
</style>
