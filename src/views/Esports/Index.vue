<template>
	<div class="area">
		<div class="col-lg-6 col-md-6 col-sm-12">
			<SlideShow />
			<BestMatch />
			<Live />
		</div>
		<div class="col-lg-6 col-md-6 col-sm-12">
			<BestListDestak />
			<!--<Competition :competition="libertadores" />
			<Competition :competition="BrasileiroSerieB" />-->
		</div>
	</div>
</template>

<script>
	import SlideShow from './SlideShow/Index.vue'
	import BestMatch from './BestMatch/Index.vue'
	import BestListDestak from './BestListDestak/Index.vue'
	import Live from './Lives/Index.vue'
	//import Competition from '../../components/Competition/Index.vue'
	export default {
    	name: 'Esports',
	    components: {
	    	SlideShow,
	    	BestMatch,
	    	BestListDestak,
		    Live,
		    //Competition,
	    },
	    data(){
	    	return {
	    		libertadores: {
	    			name: 'Copa Libertadores',
	    			iconSport: 'futebol.png',
	    			typeSport: 'Futebol',
	    			listMatchs: [
		    			{
		    				dateMatch: 'Amanhã',
		    				matchs: [
		    					{
			    					hour: '11:00',
			    					opponent1: 'Corinthians SP',
			    					opponent2: 'Vasco',
			    					oddHouse: '2.36',
			    					oddDraw: '2.80',
			    					oddVisitor: '3.50',
		    					},
		    					{
			    					hour: '12:00',
			    					opponent1: 'Botafogo SP',
			    					opponent2: 'Ponte preta SP',
			    					oddHouse: '2.36',
			    					oddDraw: '2.80',
			    					oddVisitor: '3.50',
		    					},
		    				],
		    			},		
	    			],
	    		},
	    		BrasileiroSerieB: {
	    			name: 'Brasileirão Série B',
	    			iconSport: 'futebol.png',
	    			typeSport: 'Futebol',
	    			listMatchs: [
		    			{
		    				dateMatch: 'Amanhã',
		    				matchs: [
		    					{
			    					hour: '11:00',
			    					opponent1: 'Corinthians SP',
			    					opponent2: 'Vasco',
			    					oddHouse: '2.36',
			    					oddDraw: '2.80',
			    					oddVisitor: '3.50',
		    					},
		    				],
		    			},		
	    			],
	    		},
	    	}
	    },
	}
</script>

<style scoped>
	div.area {width:100%; float:left; display:flex; flex-wrap:wrap;}

</style>