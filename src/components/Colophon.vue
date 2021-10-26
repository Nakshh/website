<template>
	<div>
		<h1>BUMF</h1>
		<p>
			I know how to code in JS, Java, Python, a little bit of C, and my personal favourite <span class="color">Scratch</span>.
			This website was built using vue and is far from finished. Hopefully the changes in this website reflect
			the new skills I learn through my journey of pursuing CS.
			
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
