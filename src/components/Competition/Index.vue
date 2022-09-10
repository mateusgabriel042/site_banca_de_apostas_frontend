<template>
	<div class="filter-top">
		<router-link to="/futebol">Partidas</router-link>
		<router-link to="/futebol">Longo Prazo</router-link>
	</div>
	
	<div class="title-main-sport-with-country">
		<img :src="require(`@/assets/icons-sports/${competition.iconSport}`)" />
		<div>
			<label>{{competition.name}}</label>
			<label>{{competition.typeSport}} <font-awesome-icon icon="fa-solid fa-arrow-right" /> Clubes Internacionais</label>
		</div>
	</div>

	<div class="header-list-odds">
		<div class="col-list-6">Resultado Final</div>
		<div class="col-list-2 col-center">Casa</div>
		<div class="col-list-2 col-center">Empate</div>
		<div class="col-list-2 col-center">Visitante</div>
	</div>

	<div v-for="item in listMatches">
		<div class="date-list-odds"><label>{{item.dateMatch}}</label></div>

		<div class="list-odds" v-for="match in item.matchs">
			<div>
				<div class="col-list-1 col-timer">{{match.hour}}</div>
				
				<div class="col-list-4 col-match">
					<router-link :to="'/bets-match/'+idLeague+'/'+match.id+'/principal'"><label>{{match.opponent1}} x {{match.opponent2}}</label></router-link>
				</div>

				<div class="col-list-1 col-action"><font-awesome-icon icon="fa-solid fa-bar-chart" /></div>
				<div class="col-list-2 col-odd"
					:class="containsBet(match.id+'-full_time_result_of_matche-home', betsList) ? 'odd-active' : ''"
					@click="(e) => addBetList(e, match.id, 'full_time_result_of_matche', 'home')"
				>{{match.oddHouse !== 'NaN' ? match.oddHouse : '-'}}</div>

				<div class="col-list-2 col-odd"
					:class="containsBet(match.id+'-full_time_result_of_matche-draw', betsList) ? 'odd-active' : ''"
					@click="(e) => addBetList(e, match.id, 'full_time_result_of_matche', 'draw')"
				>{{match.oddDraw !== 'NaN' ? match.oddDraw : '-'}}</div>

				<div class="col-list-2 col-odd"
					:class="containsBet(match.id+'-full_time_result_of_matche-away', betsList) ? 'odd-active' : ''"
					@click="(e) => addBetList(e, match.id, 'full_time_result_of_matche', 'away')"
				>{{match.oddVisitor !== 'NaN' ? match.oddVisitor : '-'}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import BetsListPurchasePrematchService from "../../services/bets.list.purchase.prematche.service";
	export default {
		props: ['competition', 'listMatches', 'idLeague'],
		props: {
	    	competition: Object,
	    	listMatches: Array,
	    	idLeague: String,
		},
		methods:{
			addBetList(event, idMatche, typeBet, bet){
				this.$store.dispatch({
					type: 'bets/addBetInList',
					idMatche: idMatche,
					idLeague: this.idLeague,
					typeEvent: 'pre_matche',
					typeBet: typeBet,
					bet: bet
				});

				event.target.classList.contains('odd-active') ? event.target.classList.remove('odd-active') : event.target.classList.add('odd-active');

			},
			containsBet(idBet, betsList){
				return BetsListPurchasePrematchService.containBet(idBet, betsList);
			}
		},
		computed: {
	    	...mapGetters({
	        	betsList: 'bets/betsList',
	    	})
	    },
	}
</script>

<style scoped>
	div.filter-top {float:left; width:100%; background-color:#464646; padding:5px 10px;}
	div.filter-top a {color:#bbbbbb; font-size:13px; text-decoration:none; padding:5px 8px;}
	div.filter-top a:first-child {border-bottom:2px solid #ff8800;}
</style>