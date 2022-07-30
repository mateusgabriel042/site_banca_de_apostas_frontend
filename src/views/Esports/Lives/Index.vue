<template>
	<label class="title-live">Ao-Vivo <span class="color-orange">Em tempo real</span></label>
	<div class="nav-lives">
		<router-link to="/esports/lives/futebol" active-class="active">
			<img src="@/assets/icons-sports/futebol.png" />
			<label>Futebol (14)</label>
		</router-link>
		<router-link to="/esports/lives/basquete" active-class="active">
			<img src="@/assets/icons-sports/basquete.png" />
			<label>Basquete (2)</label>
		</router-link>
		<router-link to="/esports/lives/tenis" active-class="active">
			<img src="@/assets/icons-sports/tenis.png" />
			<label>Tênis (4)</label>
		</router-link>
		<router-link to="/esports/lives/tenis-de-mesa" active-class="active">
			<img src="@/assets/icons-sports/tenis-de-mesa.png" />
			<label>Tênis de Mesa (4)</label>
		</router-link>
		<router-link to="/esports/lives/volei" active-class="active">
			<img src="@/assets/icons-sports/volei.png" />
			<label>Vôlei (4)</label>
		</router-link>
		<router-link to="/esports/lives/volei-de-praia" active-class="active">
			<img src="@/assets/icons-sports/volei-de-praia.png" />
			<label>Vôlei de praia (4)</label>
		</router-link>
		<router-link to="/esports/lives/handball" active-class="active">
			<img src="@/assets/icons-sports/handebol.png" />
			<label>Handebol (4)</label>
		</router-link>
		<router-link to="/esports/lives/baseball" active-class="active">
			<img src="@/assets/icons-sports/basebol.png" />
			<label>Basebol (4)</label>
		</router-link>
		<router-link to="/esports/lives/futebol-americano" active-class="active">
			<img src="@/assets/icons-sports/futebol-americano.png" />
			<label>Futebol Americano (4)</label>
		</router-link>
		<router-link to="/esports/lives/mma" active-class="active">
			<img src="@/assets/icons-sports/MMA.png" />
			<label>MMA (4)</label>
		</router-link>
		<router-link to="/esports/lives/boxe" active-class="active">
			<img src="@/assets/icons-sports/boxe.png" />
			<label>Boxe (4)</label>
		</router-link>
	</div>
	<router-view></router-view>
</template>

<script>
	export default {
    	name: 'Lives'
	}
</script>

<style scoped>
	label.title-live {width:100%; background-color:#2e3135; color:#eeeeee; font-size:14px; padding:3px 8px; text-align:center;}
	label.title-live span.color-orange {color:#ff8800;}
	div.nav-lives {width:100%; background-color:#464646; display:flex; justify-content:flex-start; padding-top:5px; align-items:center; align-content:center; overflow-x:auto;}
	div.nav-lives a {width:80px; display:flex; flex-wrap:wrap; justify-content:center; text-decoration:none; color:#eeeeee; font-size:12px; margin:10px;}
	div.nav-lives a img {width:25px; margin-bottom:5px; filter: grayscale(1);}
	div.nav-lives a label {width:100px; text-align:center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
	.active img {filter: grayscale(0) !important;}
</style>