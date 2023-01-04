<template>
	<div class="area-bets-match">
		<DoubleOdds
			betNameLabel="Gol contra"
			:odds="odds.own_goal"
			labelOdd1="Sim"
			labelOdd2="Não"
			bet1="yes"
			bet2="no"
			typeBet="specials"
			subtypeBet="own_goal"
			typeEvent="prematche"
		/>
		<!--<div class="area-odds">
			<label class="teste">Especiais</label>
			<div class="odds">
				<div class="col-list-6 col-lb"></div>
				<div class="col-list-3 col-lb">1</div>
				<div class="col-list-3 col-lb">2</div>
			</div>
			
			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">1º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[2]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">2º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[3]?.odds).toFixed(2)}}</span></div>
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
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[2]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">2º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[3]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-lb">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-lb">Sim</div>
				<div class="col-list-3 col-lb">Não</div>
			</div>
			
			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">1º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[4]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[6]?.odds).toFixed(2)}}</span></div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">2º tempo</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[5]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsSpecials.to_score_in_half[7]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para marcar 1 penalti</label>
			<div class="odds">
				<div class="col-list-6 col-lb">Para {{matche?.home?.name}} marcar 1 pênalti</div>
				<div class="col-list-6 col-odd center">
					<span class="color-odd">{{parseFloat(oddsSpecials.to_score_a_penalty[0]?.odds).toFixed(2)}}</span>
				</div>
			</div>
			<div class="odds">
				<div class="col-list-6 col-lb">Para {{matche?.away?.name}} marcar 1 pênalti</div>
				<div class="col-list-6 col-odd center">
					<span class="color-odd">{{parseFloat(oddsSpecials.to_score_a_penalty[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para perder 1 penalti</label>
			<div class="odds">
				<div class="col-list-6 col-lb">Para {{matche?.home?.name}} perder 1 pênalti</div>
				<div class="col-list-6 col-odd center">
					<span class="color-odd">{{parseFloat(oddsSpecials.to_miss_a_penalty[0]?.odds).toFixed(2)}}</span>
				</div>
			</div>
			<div class="odds">
				<div class="col-list-6 col-lb">Para {{matche?.away?.name}} perder 1 pênalti</div>
				<div class="col-list-6 col-odd center">
					<span class="color-odd">{{parseFloat(oddsSpecials.to_miss_a_penalty[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para ter 1 gol contra</label>
			<div class="odds">
				<div class="col-list-6 col-lb">Sim</div>
				<div class="col-list-6 col-odd center">
					<span class="color-odd">{{parseFloat(oddsSpecials.own_goal[0]?.odds).toFixed(2)}}</span>
				</div>
			</div>
			<div class="odds">
				<div class="col-list-6 col-lb">Não</div>
				<div class="col-list-6 col-odd center">
					<span class="color-odd">{{parseFloat(oddsSpecials.own_goal[1]?.odds).toFixed(2)}}</span>
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
			<div class="odds" v-for="(item, index) in oddsSpecials.player_shots_on_target">
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
			<div class="odds" v-for="(item, index) in oddsSpecials.player_shots">
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
	        	odds: 'odds/oddsPrematcheSpecial',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>