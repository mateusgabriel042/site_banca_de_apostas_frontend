<template>
	<div class="area-odds" v-if="odds !== undefined">
		<label>{{betNameLabel}}</label>
		<div class="odds">
			<div class="col-list-4 col-odd"
				:class="containBet(odds, 0)"
				@click="(e) => addBetList(odds, 0, labelOdd1)"
			>
				{{labelOdd1}} <span class="color-odd">{{formatOdd(odds?.odds[0].odds)}}</span>
			</div>

			<div class="col-list-4 col-odd"
				:class="containBet(odds, 1)"
				@click="(e) => addBetList(odds, 1, labelOdd2)"
			>
				{{labelOdd2}} <span class="color-odd">{{formatOdd(odds?.odds[1].odds)}}</span>
			</div>

			<div class="col-list-4 col-odd"
				:class="containBet(odds, 2)"
				@click="(e) => addBetList(odds, 2, labelOdd3)"
			>
				{{labelOdd3}} <span class="color-odd">{{formatOdd(odds?.odds[2].odds)}}</span>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">

	export default {
		props: {
		    betNameLabel: String,
		    odds: Array,
		    labelOdd1: String,
		    labelOdd2: String,
		    labelOdd3: String,
		},

	    methods:{
			addBetList(betObject, oddId, oddNameLabel){
				let matche = this.$store.getters['odds/matcheOdds'];
				this.$store.dispatch({
					type: 'bets/addBetInList',
					matche: matche,
					betName: betObject.name,
					betNameLabel: betObject.name,
					oddId: oddId,
					odd: betObject.odds[oddId].odds,
					oddName: betObject.odds[oddId].name,
					oddNameLabel: oddNameLabel,
				});
			},

			containBet(betObject, oddId){
				let matche = this.$store.getters['odds/matcheOdds'];

				let data = {
					matcheId: matche?.bet365_matche_id,
					leagueId: matche?.apievents_league_id,
					betName: betObject?.name,
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