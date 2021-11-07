<template>
	<div>
		<h1>Bumf</h1>
		<p>
			This website is set in Gibson, and uses Font Awesome for all the icons.
			It's coded in Vue.js and uses Netlify functions. I plan to implement some
			cool APIs in the near future. You can visit the source
			<a href="https://www.github.com/nakshh/nakshhkohli.com">here</a> if you see something you like!
			My <a href="https://www.github.com/nakshh/">Github</a> has the source to all the projects
			showcased here as well.
			
			
		</p>
	</div>
</template>

<script>
export default {
	name: "BUMF",
};
</script>

<style scoped>
.color {
	color: #1da7ea;
}

a {
	color: white;
}

div {
	width: 45%;
}
h1 {
	font-size: 1.8rem;
	color: white;
	font-weight: 500;
	border-bottom: 10px solid #204665;
	line-height: 0.4;
	width: 75px;
	margin-block-start: 0;
}
p {
	color: white;
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	margin-block-end: 0;
}

a:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

@media screen and (max-width: 610px) {
	div {
		width: 100%;
	}
}
</style>
