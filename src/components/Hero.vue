<template>
	<div class="hero">
		
		<div class="image-holder">
			<img src="../assets/me.jpg" alt="Image of Nakshh Kohli" />
		</div>
		<div class="text">
			<div class="top-text">
				<h1>
					Hi, I'm Nakshh. I'm a developer from New Delhi.
				</h1>
			</div>
			<div class="bottom-text">
				<p class="b-margin">
					I'm a 12th grade student at The Shri Ram School,
					and founder of
					<a
						target="_blank"
						rel="noopener noreferrer"
						class="orange"
						href="https://ethniquemojo.com"
						>Ethnique Mojo</a
					> and
					<a
						target="_blank"
						rel="noopener noreferrer"
						class="orange"
						href="https://happinessproject.co.in"
						>Happiness Project</a
					>. I'm an avid web developer with a focus on front-end and
					back-end in Node.js. I also love making games and using CS
					to create small fun projects.
				</p>
				<p class="b-margin">
					You can see some of my programs below along with other projects
					I have worked on. Apart from computer science I have taken up
					intereCheck out my linkedin and my resume for more
					information. Will update soon
				</p>
				<p>
					I also do this and that and this and that and this and that
					and that and this and that and this and that and that and
					this and that and this and that and this and that and this and
					this and that and this and that and this and that and this
					and that and <span class="color">this</span>.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
.color {
	/* border-bottom: 4px solid #1da7ea; */
	color: #1da7ea;
}

.orange {
	color: #ff9c4a;
}

img {
	height: 400px;
	border-radius: 8px;
}

.b-margin {
	margin-bottom: 1rem;
}

.image-holder {
	height: 125px;
}

.hero {
	display: flex;
}
.text {
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: white;
	margin-left: 2rem;
}

h1,
p {
	margin: 0;
}

h1 {
	font-weight: 500;
	font-size: 1.8rem;
}

p {
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	/* text-align: justify; */
}

@media screen and (max-width: 1258px) {
	.hero {
		flex-direction: column;
	}

	img {
		height: 150px;
		width: auto;
		clip-path: circle(60px at center);
		position: relative;
		top: -20px;
		margin: 0;
	}

	.text {
		margin-left: 0;
		height: auto;
	}

	h1 {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
}
</style>
