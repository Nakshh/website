<template>
	<div class="row">
		<Colophon></Colophon>
		<div class="divider"></div>
		<Music
			:song1="song1"
			:song2="song2"
			:song3="song3"
			:artist1="artist1"
			:artist2="artist2"
			:artist3="artist3"
		></Music>
	</div>
</template>

<script>
import Colophon from "./Colophon.vue";
import Music from "./Music.vue";
export default {
	name: "BumfGames",
	components: { Colophon, Music },
	data() {
		return {
			song1: "Rocket League",
			artist1: "D3",
			song2: "GTA V",
			artist2: null,
			song3: "Fifa 22",
			artist3: null,
		};
	},
};
</script>

<style scoped>
.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.divider {
	display: none;
	width: 100%;
	height: 3px;
	background-color: #1b405e;
	margin: 2rem 0;
}

@media screen and (max-width: 610px) {
	.divider {
		display: block;
	}
	.row {
		flex-direction: column;
	}
}
</style>
