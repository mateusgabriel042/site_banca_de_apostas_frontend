<template>
	<div class="area-bets-match">
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