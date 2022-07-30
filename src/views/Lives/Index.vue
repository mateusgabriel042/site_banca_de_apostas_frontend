<template>
	<div class="nav-lives">
		<router-link to="/lives/futebol" active-class="active">
			<img src="@/assets/icons-sports/futebol.png" />
			<label>Futebol (14)</label>
		</router-link>
		<router-link to="/lives/basquete" active-class="active">
			<img src="@/assets/icons-sports/basquete.png" />
			<label>Basquete (2)</label>
		</router-link>
		<router-link to="/lives/tenis" active-class="active">
			<img src="@/assets/icons-sports/tenis.png" />
			<label>Tênis (4)</label>
		</router-link>
		<router-link to="/lives/tenis-de-mesa" active-class="active">
			<img src="@/assets/icons-sports/tenis-de-mesa.png" />
			<label>Tênis de Mesa (4)</label>
		</router-link>
		<router-link to="/lives/volei" active-class="active">
			<img src="@/assets/icons-sports/volei.png" />
			<label>Vôlei (4)</label>
		</router-link>
		<router-link to="/lives/volei-de-praia" active-class="active">
			<img src="@/assets/icons-sports/volei-de-praia.png" />
			<label>Vôlei de praia (4)</label>
		</router-link>
		<router-link to="/lives/handball" active-class="active">
			<img src="@/assets/icons-sports/handebol.png" />
			<label>Handebol (4)</label>
		</router-link>
		<router-link to="/lives/baseball" active-class="active">
			<img src="@/assets/icons-sports/basebol.png" />
			<label>Basebol (4)</label>
		</router-link>
		<router-link to="/lives/futebol-americano" active-class="active">
			<img src="@/assets/icons-sports/futebol-americano.png" />
			<label>Futebol Americano (4)</label>
		</router-link>
		<router-link to="/lives/mma" active-class="active">
			<img src="@/assets/icons-sports/MMA.png" />
			<label>MMA (4)</label>
		</router-link>
		<router-link to="/lives/boxe" active-class="active">
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
	div.nav-lives {width:100%; background-color:#464646; display:flex; justify-content:flex-start; padding-top:5px; align-items:center; align-content:center; overflow-x:auto;}
	div.nav-lives a {width:80px; display:flex; flex-wrap:wrap; justify-content:center; text-decoration:none; color:#eeeeee; font-size:12px; margin:10px;}
	div.nav-lives a img {width:25px; margin-bottom:5px; filter: grayscale(1);}
	div.nav-lives a label {width:100px; text-align:center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
	.active img {filter: grayscale(0) !important;}
</style>