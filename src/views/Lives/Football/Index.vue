<template>
	<div class="title-main-sport">
		<img src="@/assets/icons-sports/futebol.png" />
		<label>Futebol</label>
	</div>

	<div class="header-list-odds">
		<div class="col-list-6">Resultado Final</div>
		<div class="col-list-2 col-center">Casa</div>
		<div class="col-list-2 col-center">Empate</div>
		<div class="col-list-2 col-center">Visitante</div>
	</div>

	<div v-for="(leagueItem, index) in leagues" :key="index">
		<div class="date-list-odds"><label>{{leagueItem.league}}</label></div>

		<div class="list-odds-live" v-for="(matcheItem, index) in leagueItem.matches" :key="index">
			<div>
				<div class="col-list-1 col-timer">{{matcheItem?.odds[0][0].TM}}</div>
				
				<div class="col-list-3 col-match">
					<router-link :to="'/bets-match-live/'+matcheItem.matche.league.id+'/'+matcheItem.matche.id+'/principal'">
						<label>{{matcheItem.matche.home.name}}</label>
						<label>{{matcheItem.matche.away.name}}</label>
					</router-link>
				</div>

				<div class="col-list-1 col-action">
					<img src="@/assets/icons/icon-campo.png" />
				</div>
				
				<div class="col-list-1 col-scoreboard">

					<label>{{matcheItem.odds[0][0].SS == null ? '' : new String(matcheItem.odds[0][0].SS).split('-')[0]}}</label>
					<label>{{matcheItem.odds[0][0].SS == null ? '' : new String(matcheItem.odds[0][0].SS).split('-')[1]}}</label>
				</div>

				<div class="col-list-2 col-odd">{{getOddsResultFinal(matcheItem.odds[0], 'home')}}</div>
				<div class="col-list-2 col-odd">{{getOddsResultFinal(matcheItem.odds[0], 'draw')}}</div>
				<div class="col-list-2 col-odd">{{getOddsResultFinal(matcheItem.odds[0], 'away')}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BetService from "../../../services/bet.service";

	export default {

	    data(){
	    	return {
	    		leagues: [],
	    	}
	    },

	    methods: {
	    	msToTime(utcSeconds) {
	    		let d = new Date(utcSeconds*1000);
			    return d.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
			},

			getOddsResultFinal(odds, order){
			    let indexOddTitle = odds.findIndex(element => element.NA === "Fulltime Result");

			    if(indexOddTitle < 0){
			    	return '-';
			    }

			    if(order === 'home'){
			    	return (parseInt(new String(odds[indexOddTitle+2].OD).split('/')[0]) / parseInt(new String(odds[indexOddTitle+2].OD).split('/')[1]) +1).toFixed(2);
			    }

			    if(order === 'draw'){
			    	return (parseInt(new String(odds[indexOddTitle+3].OD).split('/')[0]) / parseInt(new String(odds[indexOddTitle+3].OD).split('/')[1]) +1).toFixed(2);
			    }

			    if(order === 'away'){
			    	return (parseInt(new String(odds[indexOddTitle+4].OD).split('/')[0]) / parseInt(new String(odds[indexOddTitle+4].OD).split('/')[1]) +1).toFixed(2);
			    }

			    return '-';
			}
	    },


	    mounted() {
			BetService.getMatchesInLive().then(
				(response) => {
					this.leagues = response.data;

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