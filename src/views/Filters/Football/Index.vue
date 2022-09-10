<template>
	<div class="filter-by-hours">
		<router-link to="/futebol">Todos</router-link>
		<router-link to="/futebol">12hs</router-link>
		<router-link to="/futebol">24hs</router-link>
		<router-link to="/futebol">48hs</router-link>
		<router-link to="/futebol">Ao Vivo</router-link>
	</div>

	<div class="title-locale-leagues">
		<img src="@/assets/icons-sports/futebol.png" />
		<label>Principais Listas</label>
	</div>
	<ul>
		<li>
			<img src="@/assets/icons-sports/futebol.png" />
			<label>Copa Libertadores</label>
		</li>

		<li>
			<img src="@/assets/icons-countries/brazil.png" />
			<label>Brasil- Brasileirão Série B</label>
		</li>

		<router-link to="/competicao/Copa do Brasil/451">
			<li>
				<img src="@/assets/icons-countries/brazil.png" />
				<label>Brasil - Copa do Brasil</label>
			</li>
		</router-link>

		<li>
			<img src="@/assets/icons-countries/brazil.png" />
			<label>Brasil - Brasileirão Série B</label>
		</li>
		<li>
			<img src="@/assets/icons-sports/futebol.png" />
			<label>Copa Sul-Americana</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/brazil.png" />
			<label>Brasil - Brasileirão Série C</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/brazil.png" />
			<label>Brasil - Brasileirão Série D</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/england.png" />
			<label>Inglaterra - Premier League</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/germany.png" />
			<label>Alemanha - Bundesliga</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/spain.png" />
			<label>Espanha - Bundesliga</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/italy.png" />
			<label>Itália - Série A</label>
		</li>
		<li>
			<img src="@/assets/icons-countries/france.png" />
			<label>França - Ligue 1</label>
		</li>

	</ul>

	<div v-for="(item, index) in leagues" :key="index">
		<div class="title-locale-leagues">
			<img src="@/assets/icons-sports/futebol.png" />
			<label>{{item.country}}</label>
		</div>
		<ul>
			<li v-for="(subitem, index) in item.leagues" :key="index">
				<router-link :to="'/competicao/'+subitem.name+'/'+subitem.id">
					<label>{{subitem.name}}</label>
				</router-link>
			</li>
		</ul>
	</div>


</template>

<script>
	import BetService from "../../../services/bet.service";
	import { mapGetters } from 'vuex';

	export default {
		data(){
			return {
			}
		},
		computed: {
	    	...mapGetters({
	        	leagues: 'bets/leagues'
	    	})
	    },
		mounted() {
			this.$store.dispatch('bets/initLeagues');
		},
	}
</script>

<style scoped>
	div.filter-by-hours {float:left; width:100%; background-color:#464646; padding:5px 10px;}
	div.filter-by-hours a {color:#bbbbbb; font-size:13px; text-decoration:none; padding:5px 8px;}
	div.filter-by-hours a:first-child {border-bottom:2px solid #ff8800;}
	div.title-locale-leagues {float:left; width:100%; background-color:#838383; padding:5px;}
	div.title-locale-leagues img {width:15px; margin-right:5px;}
	div.title-locale-leagues label {color:#dddddd; font-size:13px;}
	ul {float:left; width:100%; background-color:#646464; list-style:none; margin:0px; padding:0px;}
	ul li {float:left; width:33.333333%; padding:5px; display:flex;}
	ul li img {width:20px; margin-right:5px;}
	ul li label {width:100%; font-size:13px; color:#eeeeee; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}

</style>
