<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">Gols +/-</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsGoals.goals_over_under[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsGoals.goals_over_under[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsGoals.goals_over_under[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsGoals.both_teams_to_score[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsGoals.both_teams_to_score[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem no 1º tempo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsGoals.both_teams_to_score_in_1st_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsGoals.both_teams_to_score_in_1st_half[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem no 2º tempo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsGoals.both_teams_to_score_in_2nd_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsGoals.both_teams_to_score_in_2nd_half[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para o time não tomar gols</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Sim</div>
				<div class="col-list-4 col-lb">Não</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{matche?.home?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsGoals.clean_sheet[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsGoals.clean_sheet[1]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{matche?.away?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsGoals.clean_sheet[2]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsGoals.clean_sheet[3]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Gols Ímpar/Par</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Ímpar <span class="color-odd">{{parseFloat(oddsGoals.goals_odd_even[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Par <span class="color-odd">{{parseFloat(oddsGoals.goals_odd_even[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Primeiros 10 minutos (00:00 - 09:59)</label>
			<div class="odds">
				<div class="col-list-6 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">Gols</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsGoals.first_10_minutes_[0]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsGoals.first_10_minutes_[0]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsGoals.first_10_minutes_[1]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsGoals.first_10_minutes_[1]?.odds).toFixed(2)}}
					</span>
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
	    		oddsGoals: {
	    			goals_over_under: [],
					alternative_total_goals: [],// a fazer
					result_total_goals: [],//a fazer
					total_goals_both_teams_to_score: [],//a fazer
					exact_total_goals: [],//a fazer
					number_of_goals_in_match: [],//a fazer
					both_teams_to_score: [],
					teams_to_score: [],//a fazer
					both_teams_to_score_in_1st_half: [],
					both_teams_to_score_in_2nd_half: [],
					both_teams_to_score_1st_half_2nd_half: [],//a fazer
					first_half_goals: [],//a fazer
					exact_1st_half_goals: [],//a fazer
					total_goal_minutes: [],//a fazer
					first_team_to_score: [],//a fazer
					first_goal_method: [],//a fazer
					early_goal: [],//a fazer
					late_goal: [],//a fazer
					time_of_first_goal_brackets: [],//a fazer
					_2nd_half_goals: [],//a fazer
					exact_2nd_half_goals: [],//a fazer
					half_with_most_goals: [],//a fazer
					home_team_highest_scoring_half: [],//a fazer
					away_team_highest_scoring_half: [],//a fazer
					clean_sheet: [],
					team_total_goals: [],//a fazer
					home_team_exact_goals: [],//a fazer
					away_team_exact_goals: [],//a fazer
					winning_margin: [],//a fazer
					time_of_1st_team_goal: [],//a fazer
					goals_odd_even: [],
					home_team_odd_even_goals: [],//a fazer
					away_team_odd_even_goals: [],//a fazer
					_1st_half_goals_odd_even: [],//a fazer
					last_team_to_score: [],//a fazer
					first_10_minutes_: [],
	    		},
	    		
	    	}
	    },

	    mounted() {
	    	this.$store.dispatch('bets/setLoading', true);
			BetService.getMatcheOdds(this.$route.params.idLeague, this.$route.params.idMache).then(
				(response) => {
					this.matche = response.data.match;
					let dataOddsGoals = response.data.odds.goals.sp;
					this.oddsGoals.goals_over_under = dataOddsGoals.goals_over_under.odds;
					this.oddsGoals.alternative_total_goals = dataOddsGoals.alternative_total_goals.odds;
					this.oddsGoals.result_total_goals = dataOddsGoals.result_total_goals.odds;
					this.oddsGoals.total_goals_both_teams_to_score = dataOddsGoals.total_goals_both_teams_to_score.odds;
					this.oddsGoals.exact_total_goals = dataOddsGoals.exact_total_goals.odds;
					this.oddsGoals.number_of_goals_in_match = dataOddsGoals.number_of_goals_in_match.odds;
					this.oddsGoals.both_teams_to_score = dataOddsGoals.both_teams_to_score.odds;
					this.oddsGoals.teams_to_score = dataOddsGoals.teams_to_score.odds;
					this.oddsGoals.both_teams_to_score_in_1st_half = dataOddsGoals.both_teams_to_score_in_1st_half.odds;
					this.oddsGoals.both_teams_to_score_in_2nd_half = dataOddsGoals.both_teams_to_score_in_2nd_half.odds;
					this.oddsGoals.both_teams_to_score_1st_half_2nd_half = dataOddsGoals.both_teams_to_score_1st_half_2nd_half.odds;
					this.oddsGoals.first_half_goals = dataOddsGoals.first_half_goals.odds;
					this.oddsGoals.exact_1st_half_goals = dataOddsGoals.exact_1st_half_goals.odds;
					this.oddsGoals.total_goal_minutes = dataOddsGoals.total_goal_minutes.odds;
					this.oddsGoals.first_team_to_score = dataOddsGoals.first_team_to_score.odds;
					this.oddsGoals.first_goal_method = dataOddsGoals.first_goal_method.odds;
					this.oddsGoals.early_goal = dataOddsGoals.early_goal.odds;
					this.oddsGoals.late_goal = dataOddsGoals.late_goal.odds;
					this.oddsGoals.time_of_first_goal_brackets = dataOddsGoals.time_of_first_goal_brackets.odds;
					this.oddsGoals._2nd_half_goals = dataOddsGoals['2nd_half_goals'].odds;
					this.oddsGoals.exact_2nd_half_goals = dataOddsGoals.exact_2nd_half_goals.odds;
					this.oddsGoals.half_with_most_goals = dataOddsGoals.half_with_most_goals.odds;
					this.oddsGoals.home_team_highest_scoring_half = dataOddsGoals.home_team_highest_scoring_half.odds;
					this.oddsGoals.away_team_highest_scoring_half = dataOddsGoals.away_team_highest_scoring_half.odds;
					this.oddsGoals.clean_sheet = dataOddsGoals.clean_sheet.odds;
					this.oddsGoals.team_total_goals = dataOddsGoals.team_total_goals.odds;
					this.oddsGoals.home_team_exact_goals = dataOddsGoals.home_team_exact_goals.odds;
					this.oddsGoals.away_team_exact_goals = dataOddsGoals.away_team_exact_goals.odds;
					this.oddsGoals.winning_margin = dataOddsGoals.winning_margin.odds;
					this.oddsGoals.time_of_1st_team_goal = dataOddsGoals.time_of_1st_team_goal.odds;
					this.oddsGoals.goals_odd_even = dataOddsGoals.goals_odd_even.odds;
					this.oddsGoals.home_team_odd_even_goals = dataOddsGoals.home_team_odd_even_goals.odds;
					this.oddsGoals.away_team_odd_even_goals = dataOddsGoals.away_team_odd_even_goals.odds;
					this.oddsGoals._1st_half_goals_odd_even = dataOddsGoals['1st_half_goals_odd_even'].odds;
					this.oddsGoals.last_team_to_score = dataOddsGoals.last_team_to_score.odds;
					this.oddsGoals.first_10_minutes_ = dataOddsGoals['first_10_minutes_(00:00_09:59)'].odds;

					this.$store.dispatch('bets/setLoading', false);
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>