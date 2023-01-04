<template>
	<div class="title-main-sport-with-country">
		<img src="@/assets/icons-sports/futebol.png" />
		<div>
			<label>{{matche?.team_home_name}} x {{matche?.team_away_name}}</label>
			<label>Futebol&nbsp;<font-awesome-icon icon="fa-solid fa-arrow-right" />&nbsp;{{matche?.league?.label_name}}</label>
		</div>
	</div>
	<div class="filter-top">
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/principal'" active-class="active">Principal</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/asian-bets'" active-class="active">Apostas asiáticas</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/gols'" active-class="active">Gols</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/tempos'" active-class="active">1º Tempo / 2º Tempo</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/escanteios'" active-class="active">Escanteios</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/cartoes'" active-class="active">Cartões</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/jogador'" active-class="active">Jogador</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/minutos'" active-class="active">Minutos</router-link>
		<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/especial'" active-class="active">Especial</router-link>
		
	</div>
	<label class="date">Sexta-feira, 08 de julho, 19:00hs</label>

	<router-view></router-view>
</template>

<script>
	import BetService from "../../services/bet.service";

	export default {

	    data(){
	    	return {
	    		matche: [],
	    	}
	    },

	    methods: {
	    	
	    },

	    mounted() {
	    	this.$store.dispatch('bets/setLoading', true);
			BetService.getMatcheOdds(this.$route.params.sportId, this.$route.params.leagueId, this.$route.params.matcheId).then(
				(response) => {
					this.matche = response.data.data.item;
					this.$store.dispatch('odds/pupulateOdds', response.data.data.item);
					this.$store.dispatch('bets/setLoading', false);
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>

<style scoped>
	div.filter-top {float:left; width:100%; background-color:#464646; padding:5px 10px; border-bottom:1px solid #555555;}
	div.filter-top a {color:#bbbbbb; font-size:13px; text-decoration:none; padding:5px 8px;}

	label.date {float:left; width:100%; text-align:center; padding:5px 0px; background-color:#464646; font-size:13px; color:#bbbbbb;}
	.active {border-bottom:2px solid #ff8800;}

	
</style>

<style>
	div.area-bets-match {}
	div.area-bets-match div.area-odds {float:left; width:100%; }
	div.area-bets-match div.area-odds > label {float:left; width:100%; padding:5px 8px; 
		background-color:#bbbbbb; font-size:13px; color:#555555;}
	div.area-bets-match div.area-odds div.odds {float:left; width:100%; border-bottom:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-lb {color:#e3e3e3; padding:4px 8px; display:flex; justify-content:center; border-left:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-odd-lb {color:#e3e3e3; border-left:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-odd {color:#e3e3e3; border-left:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-odd:hover {background-color:#666666; cursor:pointer;}
	div.area-bets-match div.area-odds div.col-odd span.color-odd {margin-left:7px; color:#ffdf1b;}
	div.area-bets-match div.area-odds .center {display:flex; justify-content:center;}
	div.area-bets-match div.area-odds .bg-gray-1 {background-color:#595959;}
	div.area-bets-match div.area-odds .bg-gray-2 {background-color:#555555;}
	div.area-bets-match div.area-odds .center {display:flex; justify-content:center;}

</style>