<template>
	<div>
		<p>
			"The best solution to a problem is usually the easiest one!"
		</p>
		<div class="row">
			<p class="italic">
				— Glados, Portal 2
			</p>
			<p class="top" @click="scrollToTop">Go to top</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		},
	},
};
</script>

<style scoped>
.top {
	text-decoration: underline;
}

.top:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
	cursor: pointer;
}

div {
	color: white;
}

.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.italic {
	font-style: italic;
	width: 70%;
}

p {
	line-height: 1.3;
}
</style>
