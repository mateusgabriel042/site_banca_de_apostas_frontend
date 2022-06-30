<template>
	<div class="row">
		<div class="col-12">
			<Nav />
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<NavInfo />
		</div>
	</div>
</template>

<script>
	import Nav from '../Nav/Index.vue'
	import NavInfo from '../NavInfo/Index.vue'
	
	export default {
		name: 'Header',
		components: {
	    	Nav,
	    	NavInfo
	    }
	}
</script>

<style scoped>
	
</style>