<template>
	<div class="area-bets-match">
		<!--<div class="area-odds">
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
		</div>-->
	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import TripleOdds from '../LayoutsOdds/TripleOdds.vue'

	export default {
		components: {
		    TripleOdds,
	    },

		computed: {
	    	...mapGetters({
	        	odds: 'odds/oddsPrematcheMain',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>