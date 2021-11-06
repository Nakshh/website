<template>
	<div class="hero">
		
		<div class="image-holder">
			<img src="../assets/me.jpg" alt="Image of Nakshh Kohli" />
		</div>
		<div class="text">
			<div class="top-text">
				<h1>
					Hi, I'm Nakshh Kohli.
				</h1>
			</div>
			<div class="bottom-text">
				<p class="b-margin" align="justify">
					I'm a 12th grade student at The Shri Ram School, Moulsari
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
					>. I am also an aspiring developer, and have pursued computer
					science for the past 5 years using YT videos and online courses

				</p>
				<p class="b-margin" align="justify">
					On here, you can see some of my programs along with other
					projects I have worked on. I hope the progess of this website
					mimics my progress in computer science, as I intend to update
					it regularly with any new stuff I have done.
					If interested about my work away from computer science, you 
					can check my <a class="color" href="https://www.linkedin.com/in/nakshhkohli/">Linkedin</a> and <a class="color" href="CV.pdf">Resume</a>. 
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
	font-size: 2rem;
}

p {
	font-weight: 300;
	font-size: 1.1rem;
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
