<template>
	<div class="hero">
		
		<div class="image-holder">
			<img src="../assets/me.jpg" alt="Image of Nakshh Kohli" />
		</div>
		<div class="text">
			<div class="top-text">
				<h1>
					Hi, I'm a Developer.
				</h1>
			</div>
			<div class="bottom-text">
				<p class="b-margin">
					As an IB student at The Shri Ram School, Moulsari, I take great pride in my work. 
					In hopes of pursuing computer science, I’ve become fluent in JavaScript, Java, Python, 
					and C. On this website, you can find all my projects. I created it using Vue.js, and 
					it uses Netlify functions; I plan on implementing some APIs in the future. If you’re 
					interested, you can check out the source code <a class="orange" href="https://www.github.com/nakshh/nakshhkohli.com">here</a>. 
					My <a class="orange" href="https://www.github.com/nakshh/">Github</a> also has the source code 
					for all my projects. As I improve, I’ll update this website to ensure my programming 
					skills represent where I am in my journey.
					<br><br>
					Apart from computer science, I also have a keen interest in entrepreneurship - I founded
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
					>. Not to mention, I love playing golf in my free time. 
					If you’re interested about my work away from computer science, 
					you can check my
					<a
						target="_blank"
						rel="noopener noreferrer"
						class="orange"
						href="https://www.linkedin.com/in/nakshhkohli/"
						>Linkedin</a
					> and
					<a
						target="_blank"
						rel="noopener noreferrer"
						class="orange"
						href="CV.pdf"
						>Resume</a
					>.
					
					
					
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
	margin-top: 1.4rem;
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
	font-size: 1rem;
	line-height: 1;
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
