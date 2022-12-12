<template>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<Header />
				</div>
			</div>

			
			<div class="row-sections">
				<div class="col-area-sidebar">
					<Sidebar />
				</div>
				
				<div class="col-area-main">
					<Main />
				</div>

				<div class="col-area-bets">
					<AreaBets />
				</div>
			</div>
			
			
		</div>
	</body>
</template>

<script>
	import Header from './components/Header/Index.vue'
	import Sidebar from './components/Sidebar/Index.vue'
	import Main from './components/Main/Index.vue'
	import AreaBets from './components/AreaBets/Index.vue'
	import BetService from "./services/bet.service";
	export default {
    	name: 'App',
	    components: {
		    Header,
	    	Sidebar,
	    	Main,
	    	AreaBets
	    },
	    mounted() {
			this.$store.dispatch('bets/initCountryLeagues');
		},
	}
</script>

<style>
	html, body {padding:0px; margin:0px;}
	* {font-family:"arial";}
	input:focus {outline:none;}
	div.container-fluid {padding:0px; overflow-x:hidden;}


 
 	/*colunas listas odds*/
 	.col-list-1, .col-list-2, .col-list-3,
 	.col-list-4, .col-list-5, .col-list-6,
 	.col-list-7, .col-list-8, .col-list-9,
 	.col-list-10, .col-list-11, .col-list-12 {
 		float:left; padding:7px 10px; font-size:13px; display:flex; flex-wrap:wrap; align-items:center; align-content:center;
 	}
 	div.col-list-1  {width:8.33333333%;}
 	div.col-list-2  {width:16.66666667%;}
 	div.col-list-3  {width:25%;}
 	div.col-list-4  {width:33.33333333%;}
 	div.col-list-5  {width:41.66666667%;}
 	div.col-list-6  {width:50%;}
 	div.col-list-7  {width:58.33333333%;}
 	div.col-list-8  {width:66.66666667%;}
 	div.col-list-9  {width:75%;}
 	div.col-list-10 {width:83.33333333%;}
 	div.col-list-11 {width:33.333333%;}
 	div.col-list-12 {width:91.66666667%;}
 	div.col-center {text-align:center; justify-content:center;}
 	div.color-yellow {color:#ffdf1b;}
 	


 	/*Titulo pincipal da listagem por esporte*/
	div.title-main-sport {float:left; width:100%; background-color:#2e3135; padding:10px; display:flex; align-items:center; align-content:center;}
	div.title-main-sport img {width:35px; margin-right:10px;}
	div.title-main-sport label {color:#eeeeee; font-weight:bold;}
	div.title-main-sport-with-country {float:left; width:100%; background-color:#2e3135; padding:6px 10px; display:flex; align-items:center; align-content:center;}
	div.title-main-sport-with-country img {width:35px; margin-right:10px;}
	div.title-main-sport-with-country div label:first-child {float:left; width:100%; color:#eeeeee; font-weight:bold; font-size:14px;}
	div.title-main-sport-with-country div label:last-child {float:left; width:100%; color:#eeeeee; font-size:12px;}

	
	/*cabecalho sportes*/
	div.header-list-odds {float:left; width:100%; background-color:#b1b1b1; font-weight:bold; font-size:13px; color:#333333; display:flex;}
	div.header-list-odds > div {border-left:1px solid #a0a0a0; padding:5px 10px;}
	div.header-list-odds div:first-child {border:none;}


	/*data*/
	div.date-list-odds {float:left; width:100%; background-color:#999999;}
	div.date-list-odds label {float:left; padding:5px 10px; font-size:13px; color:#333;}
	

	/*cabecalho odds*/
	div.list-odds > div {width:100%; display:flex; border-bottom:1px solid #777777;}
	div.list-odds a {color:#e3e3e3; display:flex; align-content:center; align-items:center; text-decoration:none;}
	div.list-odds div.col-action {color:#eeeeee; background-color:#5f5f5f; justify-content:center;}
	div.list-odds div.col-timer {color:#bbbbbb; background-color:#646464;}
	div.list-odds div.col-match {overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color:#e3e3e3; background-color:#646464;}
	div.list-odds div.col-match label {width:100%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
	div.list-odds div.col-odd {color:#ffdf1b; border-left:1px solid #666666; justify-content:center;}
	div.list-odds div.col-odd:hover {cursor:pointer; background-color:#666666;}

	div.list-odds-live > div {width:100%; display:flex; border-bottom:1px solid #777777;}
	div.list-odds-live a {color:#e3e3e3;}
	div.list-odds-live div.col-action {color:#eeeeee; background-color:#5f5f5f; justify-content:center;}
	div.list-odds-live div.col-action img {width:20px;}
	div.list-odds-live div.col-timer {color:#bbbbbb; background-color:#646464;}
	div.list-odds-live div.col-timer label {width:100%;}
	div.list-odds-live div.col-match {color:#e3e3e3; background-color:#646464;}
	div.list-odds-live div.col-match label {width:100%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
	div.list-odds-live div.col-odd {color:#ffdf1b; justify-content:center; border-left:1px solid #666666;}
	div.list-odds-live div.col-odd:hover {cursor:pointer; background-color:#666666;}
	div.list-odds-live div.col-scoreboard {background-color:#5f5f5f;}
	div.list-odds-live div.col-scoreboard label {width:100%; color:#ffdf1b; text-align:center;}
	div.list-odds-live div.col-scoreboard label span.prev-score {color:#e3e3e3;}

	/*lista de ligas*/
	div.large-date-list {}

	/*lista de ligas*/
	div.league-list {}

	/*lista de partidas*/
	div.match-list {}

	/*lista de partidas*/
	div.match-list-live {}

	/*lista de poartidas por horarios*/
	div.match-list-by-hour {}

	div.odd-active {background-color:#e8e8e8 !important; color:#17202a !important;}


	::-webkit-scrollbar {width:6px; height:5px;}
	::-webkit-scrollbar-track-piece {background-color:#efefef;}
	::-webkit-scrollbar-thumb {background-color:#17202a;}
</style>


<style scoped>
	div.row-sections {float:left; width:100%; display:flex;}
	div.col-area-sidebar {float:left; width:210px;}
	div.col-area-main {float:left; width:calc(100vw - 210px - 250px);}
	div.col-area-bets {float:left; width:250px;}

	@media (max-width:1100px){
		div.col-area-sidebar {width:40px;}
		div.col-area-bets {width:200px;}
		div.col-area-main {float:left; width:calc(100vw - 40px - 200px);}
	}
</style>



