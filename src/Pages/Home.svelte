<script>
	import Hero from '../Sections/Hero.svelte';
	import BasicBookCopy from '../Sections/BasicBookCopy.svelte';
	import Container from '../Elements/Container.svelte';
	import CtaButton from '../CtaButton.svelte';
</script>

<Container>
	<h1 class="lead">The simple techniques you need to bring success to every project, 
				even if you don't have a project management certificate, 
				years of experience, or the perfect job title.</h1>
</Container>

<Hero/>

<section class="alt-bg">
	<BasicBookCopy/>
</section>


<style>
	.lead {
		margin: 2em auto auto 1em;
	}

	.alt-bg {
		width: 100%;
	}
</style>