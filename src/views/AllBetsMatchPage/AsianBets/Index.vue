<template>
	<div class="area-bets-match">
		<!--<div class="area-odds">
			<label class="teste">Handicap Asiático</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_handicap[1]?.odds).toFixed(2)}}</span></div>
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
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsAsianHandicap.goal_line[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsAsianHandicap.goal_line[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsAsianHandicap.goal_line[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Handicap asiatico - 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap._1st_half_asian_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap._1st_half_asian_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap._1st_half_asian_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap._1st_half_asian_handicap[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">1º tempo - Total de gols + ou -</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsAsianHandicap._1st_half_goal_line[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsAsianHandicap._1st_half_goal_line[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsAsianHandicap._1st_half_goal_line[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Total de escanteios asiaticos</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsAsianHandicap.asian_total_corners[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_total_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_total_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap asiatico</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_handicap_corners[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_handicap_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_handicap_corners[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_handicap_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap asiatico 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap._1st_half_asian_corners[0]?.name}} <span class="color-odd">{{parseFloat(oddsAsianHandicap._1st_half_asian_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap._1st_half_asian_corners[1]?.name}} <span class="color-odd">{{parseFloat(oddsAsianHandicap._1st_half_asian_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Total cartões asiaticos</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_total_cards[0]?.name}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_total_cards[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_total_cards[1]?.name}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_total_cards[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Handicap Asiático - Cartões</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_handicap_cards[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_handicap_cards[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsAsianHandicap.asian_handicap_cards[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsAsianHandicap.asian_handicap_cards[1]?.odds).toFixed(2)}}</span></div>
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