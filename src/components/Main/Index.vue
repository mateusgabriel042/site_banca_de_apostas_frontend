<template>
	<div v-show="loadingBets == false" class="area-main">
		<router-view></router-view>
		<Footer />
	</div>
	<div v-show="loadingBets" class="box-loading">
		<span><font-awesome-icon icon="fa-solid fa-refresh" /></span>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Footer from '../Footer/Index.vue';

	export default {
		name: 'Main',
		components: {
			Footer
		},
		computed: {
			...mapGetters({
	        	loadingBets: 'bets/loadingBets',
	    	}),
		},
	}
</script>

<style scoped>
	div.area-main {background-color:#5a5a5a; height:calc(100vh - 128px); overflow-y:auto; overflow-x:hidden;}

	div.box-loading {width:100%; height:calc(100vh - 128px); background-color:#5a5a5a; display:flex; justify-content:center; align-items:center; align-content:center;}
	div.box-loading span {font-size:150px; color:#fdfdfe;
		width:150px;
		height:150px;
		display:flex;
		justify-content:center;
		align-content:center;
		align-items:center;
		-webkit-animation-name: spin;
		-webkit-animation-duration: 2000ms;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
		-moz-animation-name: spin;
		-moz-animation-duration: 2000ms;
		-moz-animation-iteration-count: infinite;
		-moz-animation-timing-function: linear;
		-ms-animation-name: spin;
		-ms-animation-duration: 2000ms;
		-ms-animation-iteration-count: infinite;
		-ms-animation-timing-function: linear;
	}

	@-moz-keyframes spin {
	    from { -moz-transform: rotate(0deg); }
	    to { -moz-transform: rotate(360deg);}
	}
	@-webkit-keyframes spin {
	    from { -webkit-transform: rotate(0deg);}
	    to { -webkit-transform: rotate(360deg);}
	}
	@keyframes spin {
	    from {transform:rotate(0deg);}
	    to {transform:rotate(360deg);}
	}
</style>
