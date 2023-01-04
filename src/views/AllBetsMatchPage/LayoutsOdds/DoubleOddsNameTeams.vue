<template>
	<div class="area-odds" v-if="odds !== undefined">
		<label>{{betNameLabel}}</label>
		<div class="odds">
			<div class="col-list-3 col-odd">{{teamHome}}</div>

			<div class="col-list-3 col-odd"
				:class="containBet(0)"
				@click="(e) => addBetList(0, labelOdd1, bet1)"
			>
				{{labelOdd1}} <span class="color-odd">{{formatOdd(odds?.odds[0].odds)}}</span>
			</div>

			<div class="col-list-3 col-odd">{{teamAway}}</div>

			<div class="col-list-3 col-odd"
				:class="containBet(1)"
				@click="(e) => addBetList(1, labelOdd2, bet2)"
			>
				{{labelOdd2}} <span class="color-odd">{{formatOdd(odds?.odds[1].odds)}}</span>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">

	export default {
		props: {
		    betNameLabel: String,
		    odds: Object,
		    teamHome: String,
		    teamAway: String,
		    labelOdd1: String,
		    labelOdd2: String,
		    bet1: String,
		    bet2: String,
		    typeBet: String,
		    subtypeBet: String,
		    typeEvent: String,
		},

	    methods:{
			addBetList(oddId, oddNameLabel, customer_bet){
				let matche = this.$store.getters['odds/matcheOdds'];
				this.$store.dispatch({
					type: 'bets/addBetInList',
					
					bet365_matche_id: matche?.bet365_matche_id,
					apievents_league_id: matche?.apievents_league_id,
					typeBet: this.typeBet,
					subtypeBet: this.subtypeBet,
					typeEvent: this.typeEvent,
					oddId: oddId,
					customer_bet: customer_bet,
					apievents_sport_id: matche?.apievents_sport_id,
					subtypeBetLabel: this.betNameLabel,
					labelMatche: `${matche?.team_home_name} x ${matche?.team_away_name}`,	
					odd: matche?.object_odds_prematche[this.typeBet].sp[this.subtypeBet].odds[oddId].odds,
					oddName: matche?.object_odds_prematche[this.typeBet].sp[this.subtypeBet].odds[oddId].name,
					oddNameLabel: oddNameLabel,
				});
			},

			containBet(oddId){
				let matche = this.$store.getters['odds/matcheOdds'];

				let data = {
					matcheId: matche?.bet365_matche_id,
					leagueId: matche?.apievents_league_id,
					typeEvent: this.typeEvent,
					typeBet: this.typeBet,
					subtypeBet: this.subtypeBet,
					oddId: oddId,
				};

				let findIndex = this.$store.getters['bets/betsSelected'].findIndex((item) =>
					JSON.stringify(item.ids) == JSON.stringify(data)
				);

				if(findIndex >= 0)
					return 'odd-active';
				else
					return '';
			},

			formatOdd(odd){
				return parseFloat(odd).toFixed(2);
			}

		},
	}
</script>