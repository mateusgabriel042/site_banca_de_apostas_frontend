<template>
	<div class="area-bets-match">
		<TripleOdds
			betNameLabel="Resultado Final aos 10 primeiros minutos"
			:odds="odds['10_minute_result']"
			:labelOdd1="matcheOdds?.team_home_name"
			labelOdd2="Empate"
			:labelOdd3="matcheOdds?.team_away_name"
			:bet1="1"
			bet2="draw"
			:bet3="2"
			typeBet="minutes"
			subtypeBet="10_minute_result"
			typeEvent="prematche"
		/>

		<!--<div class="area-odds">
			<label class="teste">Resultado Final aos 10 primeiros minutos</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMinutes._10_minute_result[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsMinutes._10_minute_result[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMinutes._10_minute_result[2]?.odds).toFixed(2)}}</span></div>
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
					{{oddsMinutes.first_10_minutes[0]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[0]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[3]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[3]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">Escanteios</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[1]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[1]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[4]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[4]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">Cartões</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[2]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[2]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[5]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[5]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>
		</div>-->
		

	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import TripleOdds from '../LayoutsOdds/TripleOdds.vue'
	import DoubleOdds from '../LayoutsOdds/DoubleOdds.vue'
	import DoubleOddsNameTeams from '../LayoutsOdds/DoubleOddsNameTeams.vue'
	import UnderOverOdds from '../LayoutsOdds/UnderOverOdds.vue'

	export default {
		components: {
		    TripleOdds,
		    DoubleOdds,
		    DoubleOddsNameTeams,
		    UnderOverOdds
	    },

		computed: {
	    	...mapGetters({
	        	odds: 'odds/oddsPrematcheMinutes',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>