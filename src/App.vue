<template>
	<div id="app">
		<div class="home">
			<Navbar></Navbar>
			<HorizontalDivider></HorizontalDivider>
			<p class="warn">This website is not yet optimised for mobile devices. Please view it on a laptop or PC.</p>
			<HorizontalDivider></HorizontalDivider>
			<Hero></Hero>
			<HorizontalDivider></HorizontalDivider>
			<Code></Code>
			<HorizontalDivider></HorizontalDivider>
			<BumfGames></BumfGames>
			<HorizontalDivider></HorizontalDivider>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HorizontalDivider from "./components/HorizontalDivider.vue";
import Hero from "./components/Hero.vue";

import Code from "./components/Code.vue";
import BumfGames from "./components/BumfGames.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Navbar,
		HorizontalDivider,
		Hero,
		Code,
		BumfGames,
		Footer,
	},
	data() {
		return {
			projects: null,
		};
	},
	
};
</script>

<style>
* {
	box-sizing: border-box;
}

.warn {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: rgb(124, 124, 124);
	text-align: center;
}

html {
	padding: 0;
	margin: 0;
}

body {
	background-color: #1a202c;
	font-family: "canada-type-gibson";
}

::-webkit-scrollbar {
	width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #2c3649;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #20496b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #122b3f;
}

.home {
	max-width: 870px;
	margin: 2rem auto;
}


@media screen and (max-width: 1500px) {
	.home {
		margin: 2rem 20rem;
	}
}

@media screen and (max-width: 1380px) {
	.home {
		margin: 2rem 15rem;
	}
}

@media screen and (max-width: 936px) {
	.home {
		margin: 2rem;
	}
}

@media screen and (max-width: 320px) {
	.home {
		margin: 2rem 1rem;
	}
}
</style>
