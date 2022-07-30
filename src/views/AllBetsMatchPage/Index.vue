<template>
	<div class="title-main-sport-with-country">
		<img src="@/assets/icons-sports/futebol.png" />
		<div>
			<label>Arsenal FC Sub-23 x Patronato Res.</label>
			<label>Futebol <font-awesome-icon icon="fa-solid fa-arrow-right" /> Argentina  <font-awesome-icon icon="fa-solid fa-arrow-right" /> Liga Profesional, Reserves</label>
		</div>
	</div>
	<div class="filter-top">
		<router-link to="/bets-match/principal" active-class="active">Principal</router-link>
		<router-link to="/bets-match/handicap" active-class="active">Handicap</router-link>
		<router-link to="/bets-match/gols" active-class="active">Gols</router-link>
		<router-link to="/bets-match/1-tempo" active-class="active">1º Tempo</router-link>
		<router-link to="/bets-match/2-tempo" active-class="active">2º Tempo</router-link>
		<router-link to="/bets-match/escanteios" active-class="active">Escanteios</router-link>
		<router-link to="/bets-match/cartoes" active-class="active">Cartões</router-link>
		<router-link to="/bets-match/jogador" active-class="active">Jogador</router-link>
		<router-link to="/bets-match/minutos" active-class="active">Minutos</router-link>
		<router-link to="/bets-match/especial" active-class="active">Especial</router-link>
		<router-link to="/bets-match/buscar" active-class="active">Buscar</router-link>
	</div>
	<label class="date">Sexta-feira, 08 de julho, 19:00hs</label>

	<router-view></router-view>
</template>

<style scoped>
	div.filter-top {float:left; width:100%; background-color:#464646; padding:5px 10px; border-bottom:1px solid #555555;}
	div.filter-top a {color:#bbbbbb; font-size:13px; text-decoration:none; padding:5px 8px;}

	label.date {float:left; width:100%; text-align:center; padding:5px 0px; background-color:#464646; font-size:13px; color:#bbbbbb;}
	.active {border-bottom:2px solid #ff8800;}

	
</style>

<style>
	div.area-bets-match {}
	div.area-bets-match div.area-odds {float:left; width:100%; }
	div.area-bets-match div.area-odds > label {float:left; width:100%; padding:5px 8px; 
		background-color:#bbbbbb; font-size:13px; color:#555555;}
	div.area-bets-match div.area-odds div.odds {float:left; width:100%; border-bottom:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-lb {color:#e3e3e3; padding:4px 8px; display:flex; justify-content:center; border-left:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-odd-lb {color:#e3e3e3; border-left:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-odd {color:#e3e3e3; border-left:1px solid #666666;}
	div.area-bets-match div.area-odds div.col-odd:hover {background-color:#666666; cursor:pointer;}
	div.area-bets-match div.area-odds div.col-odd span.color-odd {margin-left:7px; color:#ffdf1b;}
	div.area-bets-match div.area-odds .center {display:flex; justify-content:center;}
	div.area-bets-match div.area-odds .bg-gray-1 {background-color:#595959;}
	div.area-bets-match div.area-odds .bg-gray-2 {background-color:#555555;}
	div.area-bets-match div.area-odds .center {display:flex; justify-content:center;}

</style>