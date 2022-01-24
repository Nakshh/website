<template>
	<div>
		<div class="row">
			<h1>Projects</h1>
			<div>
				<button v-on:click="expandDiv">
					<i id="chevron" class="fas fa-chevron-down fa-lg"></i>
				</button>
			</div>
		</div>

		<div class="cards">
			<Card
				v-for="card in cards"
				:key="card.title"
				:title="card.title"
				:emoji="card.emoji"
				:link="card.link"
			></Card>
		</div>
	</div>
</template>

<script>
import Card from "./Card.vue";
export default {
	name: "Code",
	components: { Card },
	data() {
		return {
			cards: [
				{
					title: "Ethnique Mojo",
					emoji: "🛒",
					link: "https://www.ethniquemojo.com",
				},
				{
					title: "Happiness Project",
					emoji: "😀",
					link: "https://www.happinessproject.co.in",
				},
				{
					title: "Maze",
					emoji: "🧩",
					link: "https://maze-nakshhkohli.netlify.app",
				},
				{
					title: "Cipher",
					emoji: "🔑",
					link: "https://cipher-nakshhkohli.netlify.app",
				},
				{
					title: "Rubiks Cube",
					emoji: "🧊",
					link: "https://cube-nakshhkohli.netlify.app",
				},
				{
					title: "Game",
					emoji: "🚀",
					link: "https://game-nakshhkohli.netlify.app",
				},
				{
					title: "Logo Maker",
					emoji: "💮",
					link: "https://logo-maker-nakshhkohli.netlify.app",
				},
				/* {
					title: "Mic Visuals",
					emoji: "🎙",
					link: "https://mic-nakshhkohli.netlify.app",
				},*/
				{
					title: "Shrek 3",
					emoji: "🍿",
					link: "https://github.com/Nakshh/shrek",
				},
				/*{
					title: "Chat",
					emoji: "💬",
					link: "https://chat-nakshhkohli.netlify.app",
				},*/
				{
					title: "Fourier",
					emoji: "⭕️",
					link: "https://fourier-nakshhkohli.netlify.app",
				},
				{
					title: "Graph",
					emoji: "📈",
					link: "https://graph-nakshhkohli.netlify.app",
				},
				{
					title: "Paint",
					emoji: "🎨",
					link: "https://paint-nakshhkohli.netlify.app",
				},
				{
					title: "Tree",
					emoji: "🌲",
					link: "https://tree-nakshhkohli.netlify.app",
				},
				{
					title: "Clock",
					emoji: "🕒",
					link: "https://clock-nakshhkohli.netlify.app",
				},
				{
					title: "Snake",
					emoji: "🐍",
					link: "https://snake-nakshhkohli.netlify.app",
				},
				{
					title: "Todo",
					emoji: "✅",
					link: "https://todo-nakshhkohli.netlify.app",
				},
				{
					title: "News API",
					emoji: "🗞",
					link: "https://news-nakshhkohli.netlify.app",
				}
			],
		};
		// eslint-disable-next-line no-unreachable
		isExpanded = false;
	},
	methods: {
		expandDiv() {
			const div = document.querySelector(".cards");
			const chevron = document.getElementById("chevron");

			if (!this.isExpanded) {
				div.classList.add("expandedCards");
				chevron.style.transform = "rotate(180deg)";
				this.isExpanded = true;
			} else {
				div.classList.remove("expandedCards");
				chevron.style.transform = "rotate(0deg)";
				this.isExpanded = false;
			}
			console.log(div.classList);
		},
	},
};
</script>

<style scoped>
.cards {
	grid-gap: 1rem;
	margin: 0 auto;
	display: grid;
	height: 320px;
	overflow: hidden;
}

@media screen and (max-width: 1015px) {
	.cards {
		height: 275px;
	}
}

.expandedCards {
	height: 100%;
}

@media (min-width: 600px) {
	.cards {
		grid-template-columns: repeat(2, 1fr);
	}
}

.rotate {
	transform: rotate(180deg);
}

.no-rotate {
	transform: rotate(0deg);
}

h1 {
	font-size: 1.8rem;
	font-weight: 500;
	color: white;
	border-bottom: 10px solid #204665;
	line-height: 0.4;
	width: 100px;
}
.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

svg {
	color: white;
}

.row button {
	border: none;
	padding: 10px;
	border-radius: 8px;
	background-color: #1b405e;
}

.row button:hover {
	background-color: #15334b;
	transition: background-color ease 0.2s;
	cursor: pointer;
}

.row button:focus {
	outline: none;
}
</style>
