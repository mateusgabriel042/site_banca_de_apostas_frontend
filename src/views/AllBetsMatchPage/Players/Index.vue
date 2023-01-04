<template>
	<div class="area-bets-match">
		<!--<PlaysGoalsOdds
			betNameLabel="Marcadores de gols"
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
		/>-->
		<!--<div class="area-odds">
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
		</div>-->
	</div>

</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import TripleOdds from '../LayoutsOdds/TripleOdds.vue'
	import PlaysGoalsOdds from '../LayoutsOdds/PlaysGoalsOdds.vue'
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
	        	odds: 'odds/oddsPrematchePlayers',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>