<template>
	<div class="area-main">
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
	import Footer from '../Footer/Index.vue';

	export default {
		name: 'Main',
		components: {
			Footer
		}
	}
</script>

<style scoped>
	div.area-main {background-color:#5a5a5a; height:calc(100vh - 128px); overflow-y:auto; overflow-x:hidden;}
</style>
