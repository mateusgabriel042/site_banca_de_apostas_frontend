<template>
	<div class="area-bets-match">
		<TripleOdds
			betNameLabel="Resultado Final 1º tempo"
			:odds="odds.half_time_result"
			:labelOdd1="matcheOdds?.team_home_name"
			labelOdd2="Empate"
			:labelOdd3="matcheOdds?.team_away_name"
			bet1="1"
			bet2="draw"
			bet3="2"
			typeBet="half"
			subtypeBet="half_time_result"
			typeEvent="prematche"
		/>
		<!--

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

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem no 1º tempo e no 2º tempo</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_1st_half_2nd_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsHalfTime.both_teams_to_score_1st_half_2nd_half[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

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
		</div>-->

	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import TripleOdds from '../LayoutsOdds/TripleOdds.vue'
	import DoubleOdds from '../LayoutsOdds/DoubleOdds.vue'
	import UnderOverOdds from '../LayoutsOdds/UnderOverOdds.vue'

	export default {
		components: {
		    TripleOdds,
		    DoubleOdds,
		    UnderOverOdds
	    },

		computed: {
	    	...mapGetters({
	        	odds: 'odds/oddsPrematcheFirstAndSecondTime',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>