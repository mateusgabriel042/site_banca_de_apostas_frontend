<template>
	<div class="area-bets-match">
		<!--<div class="area-odds">
			<label class="teste">Cartões +/-</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCards.number_of_cards_in_match[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCards.number_of_cards_in_match[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCards.number_of_cards_in_match[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Receberem 1 Cartão</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsCards.both_teams_to_receive_a_card[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsCards.both_teams_to_receive_a_card[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Receberem 2 Cartões</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsCards.both_teams_to_receive_2[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsCards.both_teams_to_receive_2[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">O jogador receberá 1 cartão</label>
			<div class="odds">
				<div v-for="(item, index) in oddsCards.player_to_be_booked">
					<div class="col-list-4 col-odd">
						{{item.name}}
						<span class="color-odd">{{parseFloat(item.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Handicap de Cartões</label>
			<div class="odds">
				<div class="col-list-4 center col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-4 center col-odd">Empate</div>
				<div class="col-list-4 center col-odd">{{matche?.away?.name}}</div>
			</div>
			<div class="odds">
				<div class="col-list-4 center col-odd">{{oddsCards.card_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsCards.card_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 center col-odd">{{oddsCards.card_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsCards.card_handicap[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 center col-odd">{{oddsCards.card_handicap[2]?.handicap}} <span class="color-odd">{{parseFloat(oddsCards.card_handicap[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Total de cartões asiaticos</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCards.asian_total_cards[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCards.asian_total_cards[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCards.asian_total_cards[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Handicap Asiático - Cartões</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCards.asian_handicap_cards[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsCards.asian_handicap_cards[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCards.asian_handicap_cards[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsCards.asian_handicap_cards[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Primeiro cartão recebido</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCards.first_card_received[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Sem cartões <span class="color-odd">{{parseFloat(oddsCards.first_card_received[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCards.first_card_received[2]?.odds).toFixed(2)}}</span></div>
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
				<div class="col-list-6 col-odd center bg-gray-1">Cartões</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsCards.first_10_minutes_[0]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsCards.first_10_minutes_[0]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsCards.first_10_minutes_[1]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsCards.first_10_minutes_[1]?.odds).toFixed(2)}}
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