<template>
	<div class="area-bets-match">
		<UnderOverOdds
			betNameLabel="Escanteios - 2 Opções"
			:odds="odds.corners_2_way"
			:labelOdd1="`${odds?.corners_2_way?.odds[0].name}`"
			:labelOdd2="`${odds?.corners_2_way?.odds[0].name}`"
			:bet1="`over_${odds?.corners_2_way?.odds[0].name}`"
			:bet2="`under_${odds?.corners_2_way?.odds[0].name}`"
			typeBet="corners"
			subtypeBet="corners_2_way"
			typeEvent="prematche"
		/>

		<UnderOverOdds
			betNameLabel="Total de Cantos Asiáticos"
			:odds="odds.asian_total_corners"
			:labelOdd1="`${odds?.asian_total_corners?.odds[0].name}`"
			:labelOdd2="`${odds?.asian_total_corners?.odds[0].name}`"
			:bet1="`over_${odds?.asian_total_corners?.odds[0].name}`"
			:bet2="`under_${odds?.asian_total_corners?.odds[0].name}`"
			typeBet="corners"
			subtypeBet="asian_total_corners"
			typeEvent="prematche"
		/>



		<UnderOverOdds
			betNameLabel="1º Tempo - Escanteios Asiáticos"
			:odds="odds['1st_half_asian_corners']"
			:labelOdd1="`${odds['1st_half_asian_corners'].odds[0].name}`"
			:labelOdd2="`${odds['1st_half_asian_corners'].odds[0].name}`"
			:bet1="`over_${odds['1st_half_asian_corners'].odds[0].name}`"
			:bet2="`under_${odds['1st_half_asian_corners'].odds[0].name}`"
			typeBet="corners"
			subtypeBet="1st_half_asian_corners"
			typeEvent="prematche"
		/>


		<!--<div class="area-odds">
			<label class="teste">Escanteios</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsCorners.corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.corners[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.corners[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios no 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsCorners.corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_half_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_half_corners[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_half_corners[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Aposta comparativa</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCorners.corner_match_bet[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsCorners.corner_match_bet[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCorners.corner_match_bet[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap</label>
			<div class="odds">
				<div class="col-list-4 center col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-4 center col-odd">Empate</div>
				<div class="col-list-4 center col-odd">{{matche?.away?.name}}</div>
				
			</div>
			<div class="odds">
				<div class="col-list-4 center col-odd">{{oddsCorners.corner_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.corner_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 center col-odd">{{oddsCorners.corner_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.corner_handicap[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 center col-odd">{{oddsCorners.corner_handicap[2]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.corner_handicap[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap asiatico</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners.asian_handicap_corners[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.asian_handicap_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners.asian_handicap_corners[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.asian_handicap_corners[1]?.odds).toFixed(2)}}</span></div>
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
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCorners.asian_total_corners[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.asian_total_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.asian_total_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap asiatico 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners._1st_half_asian_corners[0]?.name}} <span class="color-odd">{{parseFloat(oddsCorners._1st_half_asian_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners._1st_half_asian_corners[1]?.name}} <span class="color-odd">{{parseFloat(oddsCorners._1st_half_asian_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Primeiro escanteio</label>
			<div class="odds">
				<div class="col-list-6 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCorners.first_match_corner[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCorners.first_match_corner[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Ultimo escanteio</label>
			<div class="odds">
				<div class="col-list-6 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCorners.last_match_corner[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCorners.last_match_corner[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Multicantos</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCorners.multicorners[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.multicorners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.multicorners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Primeiros 10 minutos (00:00 - 19:59)</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCorners.first_10_minutes_[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_10_minutes_[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_10_minutes_[1]?.odds).toFixed(2)}}</span></div>
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
	        	odds: 'odds/oddsPrematcheCorners',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>