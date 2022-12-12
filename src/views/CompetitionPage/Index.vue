<template>
	<div class="filter-top">
		<router-link to="/futebol">Partidas</router-link>
		<router-link to="/futebol">Longo Prazo</router-link>
	</div>
	
	<div class="title-main-sport-with-country">
		<img :src="require(`@/assets/icons-sports/${iconSport}`)" />
		<div>
			<label>{{leagueSelected?.name}}</label>
			<label>{{leagueSelected?.sport_label}} <font-awesome-icon icon="fa-solid fa-arrow-right" /> {{leagueSelected?.country?.label}}</label>
		</div>
	</div>
	

	<div class="header-list-odds">
		<div class="col-list-6">Resultado Final</div>
		<div class="col-list-2 col-center">Casa</div>
		<div class="col-list-2 col-center">Empate</div>
		<div class="col-list-2 col-center">Visitante</div>
	</div>


	<div v-for="(matcheDay, index) in leagueSelected?.matches">
		<div class="date-list-odds"><label>{{index}}</label></div>

		<div class="list-odds" v-for="matche in matcheDay">
			<div>
				<div class="col-list-1 col-timer">{{matche?.time}}</div>
				
				<div class="col-list-4 col-match">
					<router-link :to="'/bets-match/'+matche.apievents_sport_id+'/'+matche.apievents_league_id+'/'+matche.bet365_matche_id+'/principal'">
						<label>{{matche?.team_home_name}} x {{matche?.team_away_name}}</label>
					</router-link>
				</div>

				<div class="col-list-1 col-action"><font-awesome-icon icon="fa-solid fa-bar-chart" /></div>

				<div class="col-list-2 col-odd"
					:class="containBet(matche, 'full_time_result', 0)"
					@click="(e) => addBetList(matche, 'full_time_result', 0, matche?.team_home_name, 1)"
				>
					{{formatOdd(matche?.object_odds_prematche?.main.sp['full_time_result']?.odds[0]?.odds)}}
				</div>

				<div class="col-list-2 col-odd"
					:class="containBet(matche, 'full_time_result', 1)"
					@click="(e) => addBetList(matche, 'full_time_result', 1, 'Empate', 'draw')"
				>
					{{formatOdd(matche?.object_odds_prematche?.main.sp['full_time_result']?.odds[1]?.odds)}}
				</div>

				<div class="col-list-2 col-odd"
					:class="containBet(matche, 'full_time_result', 2)"
					@click="(e) => addBetList(matche, 'full_time_result', 2, matche?.team_away_name, 2)"
				>
					{{formatOdd(matche?.object_odds_prematche?.main.sp['full_time_result']?.odds[2]?.odds)}}
				</div>
				
			</div>
		</div>
		
	</div>
	{{leagueSelected}}
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		data(){
			return {
				iconSport: 'futebol.png',
			}
		},
		methods:{
			addBetList(matche, subtypeBet, oddId, oddNameLabel, customer_bet){
				this.$store.dispatch({
					type: 'bets/addBetInList',
					typeEvent: 'prematche',
					typeBet: 'main',
					subtypeBet: subtypeBet,
					customer_bet: customer_bet,
					apievents_sport_id: matche?.apievents_sport_id,
					bet365_matche_id: matche?.bet365_matche_id,
					apievents_league_id: matche?.apievents_league_id,
					subtypeBetLabel: matche?.object_odds_prematche['main'].sp[subtypeBet].name,
					labelMatche: `${matche?.team_home_name} x ${matche?.team_away_name}`,
					oddId: oddId,
					odd: matche?.object_odds_prematche['main'].sp[subtypeBet].odds[oddId].odds,
					oddName: matche?.object_odds_prematche['main'].sp[subtypeBet].odds[oddId].name,
					oddNameLabel: oddNameLabel,
				});
			},

			containBet(matche, subtypeBet, oddId){
				let data = {
					matcheId: matche?.bet365_matche_id,
					leagueId: matche?.apievents_league_id,
					typeEvent: 'prematche',
					typeBet: 'main',
					subtypeBet: subtypeBet,
					oddId: oddId,
				};
				let findIndex = this.$store.getters['bets/betsSelected'].findIndex((item) =>
					JSON.stringify(item.ids) == JSON.stringify(data)
				);

				if(findIndex >= 0)
					return 'odd-active';
				else
					return '';
			},

			formatOdd(odd){
				return parseFloat(odd).toFixed(2);
			}







			/*
			addBetList(e, matche, betObject, oddId, labelBet){
				this.$store.dispatch({
					type: 'bets/addBetInList',
					matche: matche,
					betName: betObject.name,
					oddId: oddId,
					odd: betObject.odds[oddId].odds,
					labelBet: labelBet,
				});
			},

			returnOdd(odds, idOdd){
				
				if(odds == null){
					return null;
				}else{
					return parseFloat(odds[idOdd].odds).toFixed(2);
				}
			},

			containBet(matche, betObject, oddId){
				let data = {
					matcheId: matche?.bet365_matche_id,
					leagueId: matche?.apievents_league_id,
					betName: betObject?.name,
					oddId: oddId,
				};
				let findIndex = this.$store.getters['bets/betsSelected'].findIndex((item) =>
					JSON.stringify(item.ids) == JSON.stringify(data)
				);

				if(findIndex >= 0)
					return 'odd-active';
				else
					return '';
			}
			*/
			
		},
		mounted(){
			this.$store.dispatch({
				type: 'bets/selectLeague',
				countryCode: this.$route.params.countryCode,
				sportId: this.$route.params.sportId,
				leagueId: this.$route.params.leagueId,
			});

		},
		computed: {
	    	...mapGetters({
	    		leagueSelected: 'bets/leagueSelected',
	    	})
	    },
	}
</script>

<style scoped>
	div.filter-top {float:left; width:100%; background-color:#464646; padding:5px 10px;}
	div.filter-top a {color:#bbbbbb; font-size:13px; text-decoration:none; padding:5px 8px;}
	div.filter-top a:first-child {border-bottom:2px solid #ff8800;}
</style>