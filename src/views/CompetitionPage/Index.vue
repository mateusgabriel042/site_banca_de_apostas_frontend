<template>
	<Competition :competition="competition" :idLeague="idLeague" />
</template>

<script>
	import Competition from '../../components/Competition/Index.vue'
	import BetService from "../../services/bet.service";
	export default {
    	name: 'CompetitionPage',
	    components: {
	    	Competition
	    },
	    data(){
	    	return {
	    		competition: {
	    			name: this.$route.params.nameLeague,
	    			iconSport: 'futebol.png',
	    			typeSport: 'Futebol',
	    			listMatchs: []
	    		},
	    		idLeague: this.$route.params.idLeague,
	    	}
	    },

	    methods: {
	    	msToTime(utcSeconds) {
	    		let d = new Date(utcSeconds*1000);
			    return d.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
			}
	    },


	    mounted() {
			BetService.getMatchesByLeague(this.$route.params.idLeague).then(
				(response) => {
				    let data = response.data;
				    if(data.matchesByDay.length > 0){
					    data.matchesByDay.forEach((item, index) => {
					    	let matchsTemp = [];
					    	item.matches.forEach((itemMatche, index) => {
					    		matchsTemp.push(
					    			{
					    				id: itemMatche.match.id,
				    					hour: this.msToTime(itemMatche.match.time),
				    					opponent1: itemMatche.match.home.name,
				    					opponent2: itemMatche.match.away.name,
				    					oddHouse: parseFloat(itemMatche?.odds?.main?.sp.full_time_result.odds[0].odds).toFixed(2),
				    					oddDraw: parseFloat(itemMatche?.odds?.main?.sp.full_time_result.odds[1].odds).toFixed(2),
				    					oddVisitor: parseFloat(itemMatche?.odds?.main?.sp.full_time_result.odds[2].odds).toFixed(2),
			    					},
					    		);
					    	});
						    this.competition.listMatchs.push(
						    	{
				    				dateMatch: item.dayLabel,
				    				matchs: matchsTemp,
				    			}
						    );
						});
					}else{
						alert('nenhuma partida encontrada');
					}
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>

<style scoped>

</style>