<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">1º Marcador</label>
			<div class="odds">
				<div v-for="(item, index) in oddsPlayers.goalscorers">
					<div class="col-list-4 col-odd" v-if="item.header == 'First'">
						{{item.name}}
						<span class="color-odd">{{parseFloat(item.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Último Marcador</label>
			<div class="odds">
				<div v-for="(item, index) in oddsPlayers.goalscorers">
					<div class="col-list-4 col-odd" v-if="item.header == 'Last'">
						{{item.name}}
						<span class="color-odd">{{parseFloat(item.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Marcador a Qualquer Altura (Tempo Regulamentar)</label>
			<div class="odds">
				<div v-for="(item, index) in oddsPlayers.goalscorers">
					<div class="col-list-4 col-odd" v-if="item.header == 'Anytime'">
						{{item.name}}
						<span class="color-odd">{{parseFloat(item.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Tiros do jogador no alvo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">-</div>
				<div class="col-list-3 col-odd">Acima de</div>
				<div class="col-list-3 col-odd">-</div>
			</div>
			<div class="odds" v-for="(item, index) in oddsPlayers.player_shots_on_target">
				<div class="col-list-6 col-odd">
					{{item.name}}
				</div>
				<div class="col-list-3 col-odd">
					{{item.handicap}}
				</div>
				<div class="col-list-3 col-odd">
					<span class="color-odd">{{parseFloat(item.odds).toFixed(2)}}</span>
				</div>
				
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Tiros do jogador</label>
			<div class="odds">
				<div class="col-list-6 col-odd">-</div>
				<div class="col-list-3 col-odd">Acima de</div>
				<div class="col-list-3 col-odd">-</div>
			</div>
			<div class="odds" v-for="(item, index) in oddsPlayers.player_shots">
				<div class="col-list-6 col-odd">
					{{item.name}}
				</div>
				<div class="col-list-3 col-odd">
					{{item.handicap}}
				</div>
				<div class="col-list-3 col-odd">
					<span class="color-odd">{{parseFloat(item.odds).toFixed(2)}}</span>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import BetService from "../../../services/bet.service";

	export default {

	    data(){
	    	return {
	    		matche: [],
	    		oddsPlayers: {
					goalscorers: [],
					multi_scorers: [],//a fazer
					scorecast: [],//a fazer
					anytime_scorecast: [],//a fazer
					wincast: [],//a fazer
					timecast: [],//a fazer
					_1st_half_scorecast: [],//a fazer
					team_goalscorer: [],//a fazer
					_1st_player_booked: [],//a fazer
					player_to_be_sent_off: [],//a fazer
					player_shots_on_target: [],
					player_shots: [],
	    		},
	    		
	    	}
	    },

	    mounted() {
	    	this.$store.dispatch('bets/setLoading', true);
			BetService.getMatcheOdds(this.$route.params.idLeague, this.$route.params.idMache).then(
				(response) => {
					this.matche = response.data.match;
					let dataOddsMinutes = response.data.odds.player.sp;
					this.oddsPlayers.goalscorers = dataOddsMinutes.goalscorers.odds;
					this.oddsPlayers.multi_scorers = dataOddsMinutes.multi_scorers.odds;
					this.oddsPlayers.scorecast = dataOddsMinutes.scorecast.odds;
					this.oddsPlayers.anytime_scorecast = dataOddsMinutes.anytime_scorecast.odds;
					this.oddsPlayers.wincast = dataOddsMinutes.wincast.odds;
					this.oddsPlayers.timecast = dataOddsMinutes.timecast.odds;
					this.oddsPlayers._1st_half_scorecast = dataOddsMinutes['1st_half_scorecast'].odds;
					this.oddsPlayers.team_goalscorer = dataOddsMinutes.team_goalscorer.odds;
					this.oddsPlayers._1st_player_booked = dataOddsMinutes['1st_player_booked'].odds;
					this.oddsPlayers.player_to_be_sent_off = dataOddsMinutes.player_to_be_sent_off.odds;
					this.oddsPlayers.player_shots_on_target = dataOddsMinutes.player_shots_on_target.odds;
					this.oddsPlayers.player_shots = dataOddsMinutes.player_shots.odds;

					
					this.$store.dispatch('bets/setLoading', false);
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>