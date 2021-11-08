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
					science for the past 5 years. I know how to code in JS, Java, Python, 
					and C. This website is set in Gibson, and uses Font Awesome for all the icons.
					It's coded in Vue.js and uses Netlify functions. I plan to implement some
					cool APIs in the near future. You can visit the source
					<a class="orange" href="https://www.github.com/nakshh/nakshhkohli.com">here</a> if you see something you like!
					My <a class="orange" href="https://www.github.com/nakshh/">Github</a> has the source to all the projects
					showcased here as well. This website is far from finished and hopefully the 
					changes in this website reflect the new skills I learn through my journey of pursuing CS.
					<br><br>
					Apart from computer science, I have a keen interest in entrepreneurship,
					I also love playing golf! If interested about my work away from computer science, you 
					can check my
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
					
					<!--<a class="color" href="https://www.linkedin.com/in/nakshhkohli/">Linkedin</a> and <a class="color" href="CV.pdf">Resume</a>.-->
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
	font-size: 1.15rem;
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
