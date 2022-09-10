<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">Resultado Final 1º tempo</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsHalfTime.half_time_result[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsHalfTime.half_time_result[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsHalfTime.half_time_result[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Resultado Final 1º tempo Dupla Hipótese</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsHalfTime.half_time_double_chance[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsHalfTime.half_time_double_chance[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsHalfTime.half_time_double_chance[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Placar Exato do 1º tempo</label>
			<div class="odds">
				<div class="col-list-4 col-odd center" v-for="(item, index) in oddsHalfTime.half_time_correct_score" :key="index">
					{{item?.name}}
					<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem no 1º tempo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_in_1st_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_in_1st_half[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem no 2º tempo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_in_2nd_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_in_2nd_half[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<!--<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem no 1º tempo e no 2º tempo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_1st_half_2nd_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_1st_half_2nd_half[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>-->

		<div class="area-odds">
			<label class="teste">Handicap Asiático 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsHalfTime._1st_half_asian_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_asian_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsHalfTime._1st_half_asian_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_asian_handicap[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Gols +/-</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsHalfTime._1st_half_goal_line[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_goal_line[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_goal_line[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Handicap 1º tempo</label>
			<div class="odds">
				<div class="col-list-2 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-2 col-odd">{{oddsHalfTime._1st_half_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-2 col-odd">Empate</div>
				<div class="col-list-2 col-odd">{{oddsHalfTime._1st_half_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_handicap[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-2 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-2 col-odd">{{oddsHalfTime._1st_half_handicap[2]?.handicap}} <span class="color-odd">{{parseFloat(oddsHalfTime._1st_half_handicap[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsHalfTime.first_half_corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.first_half_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.first_half_corners[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.first_half_corners[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para marcar em uma das partes</label>
			<div class="odds">
				<div class="col-list-6 col-lb">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-lb">Sim</div>
				<div class="col-list-3 col-lb">Não</div>
			</div>
			
			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">1º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[2]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">2º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[3]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-lb">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-lb">Sim</div>
				<div class="col-list-3 col-lb">Não</div>
			</div>
			
			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">1º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[4]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[6]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">2º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[5]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsHalfTime.to_score_in_half[7]?.odds).toFixed(2)}}</span></div>
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
	    		oddsHalfTime: {
	    			half_time_result: [],
					half_time_double_chance: [],
					half_time_result_both_teams_to_score: [],//a fazer
					half_time_result_total_goals: [],//a fazer
					half_time_correct_score: [],
					both_teams_to_score_in_1st_half: [],
					both_teams_to_score_in_2nd_half: [],
					both_teams_to_score_1st_half_2nd_half: [],//a fazer
					_1st_half_asian_handicap: [],
					_1st_half_goal_line: [],
					alternative_1st_half_asian_handicap: [],//a fazer
					alternative_1st_half_goal_line: [],//a fazer
					_1st_half_handicap: [],
					alternative_1st_half_handicap_result: [],//a fazer
					first_half_goals: [],//a fazer
					exact_1st_half_goals: [],//a fazer
					first_half_corners: [],
					_1st_half_goals_odd_even: [],//a fazer
					_1st_half_scorecast: [],//a fazer
					to_score_in_half: [],
					half_with_most_goals: [],//a fazer

					home_team_highest_scoring_half: [],//a fazer
					away_team_highest_scoring_half: [],//a fazer
					_2nd_half_result: [],//a fazer
					_2nd_half_goals: [],//a fazer
					exact_2nd_half_goals: [],//a fazer
					_2nd_half_goals_odd_even: [],//a fazer


	    		},
	    		
	    	}
	    },

	    mounted() {
	    	this.$store.dispatch('bets/setLoading', true);
			BetService.getMatcheOdds(this.$route.params.idLeague, this.$route.params.idMache).then(
				(response) => {
					this.matche = response.data.match;
					let dataOddsHalfTime = response.data.odds.half.sp;
					this.oddsHalfTime.half_time_result = dataOddsHalfTime.half_time_result.odds;
					this.oddsHalfTime.half_time_double_chance = dataOddsHalfTime.half_time_double_chance.odds;

					this.oddsHalfTime.half_time_result_both_teams_to_score = dataOddsHalfTime.half_time_result_both_teams_to_score.odds;
					this.oddsHalfTime.half_time_result_total_goals = dataOddsHalfTime.half_time_result_total_goals.odds;
					this.oddsHalfTime.half_time_correct_score = dataOddsHalfTime.half_time_correct_score.odds;
					this.oddsHalfTime.both_teams_to_score_in_1st_half = dataOddsHalfTime.both_teams_to_score_in_1st_half.odds;
					this.oddsHalfTime.both_teams_to_score_in_2nd_half = dataOddsHalfTime.both_teams_to_score_in_2nd_half.odds;
					this.oddsHalfTime.both_teams_to_score_1st_half_2nd_half = dataOddsHalfTime.both_teams_to_score_1st_half_2nd_half.odds;
					this.oddsHalfTime._1st_half_asian_handicap = dataOddsHalfTime['1st_half_asian_handicap'].odds;
					this.oddsHalfTime._1st_half_goal_line = dataOddsHalfTime['1st_half_goal_line'].odds;
					this.oddsHalfTime.alternative_1st_half_asian_handicap = dataOddsHalfTime.alternative_1st_half_asian_handicap.odds;
					this.oddsHalfTime.alternative_1st_half_goal_line = dataOddsHalfTime.alternative_1st_half_goal_line.odds;
					this.oddsHalfTime._1st_half_handicap = dataOddsHalfTime['1st_half_handicap'].odds;
					this.oddsHalfTime.alternative_1st_half_handicap_result = dataOddsHalfTime.alternative_1st_half_handicap_result.odds;
					this.oddsHalfTime.first_half_goals = dataOddsHalfTime.first_half_goals.odds;
					this.oddsHalfTime.exact_1st_half_goals = dataOddsHalfTime.exact_1st_half_goals.odds;
					this.oddsHalfTime.first_half_corners = dataOddsHalfTime.first_half_corners.odds;
					this.oddsHalfTime._1st_half_goals_odd_even = dataOddsHalfTime['1st_half_goals_odd_even'].odds;
					this.oddsHalfTime._1st_half_scorecast = dataOddsHalfTime['1st_half_scorecast'].odds;
					this.oddsHalfTime.to_score_in_half = dataOddsHalfTime.to_score_in_half.odds;
					this.oddsHalfTime.half_with_most_goals = dataOddsHalfTime.half_with_most_goals.odds;
					this.oddsHalfTime.home_team_highest_scoring_half = dataOddsHalfTime.home_team_highest_scoring_half.odds;
					this.oddsHalfTime.away_team_highest_scoring_half = dataOddsHalfTime.away_team_highest_scoring_half.odds;
					this.oddsHalfTime._2nd_half_result = dataOddsHalfTime['2nd_half_result'].odds;
					this.oddsHalfTime._2nd_half_goals = dataOddsHalfTime['2nd_half_goals'].odds;
					this.oddsHalfTime.exact_2nd_half_goals = dataOddsHalfTime.exact_2nd_half_goals.odds;
					this.oddsHalfTime._2nd_half_goals_odd_even = dataOddsHalfTime['2nd_half_goals_odd_even'].odds;
				    
				    
					this.$store.dispatch('bets/setLoading', false);
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>