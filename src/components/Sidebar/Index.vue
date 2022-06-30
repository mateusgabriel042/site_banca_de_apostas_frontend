<template>
	<div class="area-sidebar">
		<router-link to="/sports/1"><img src="@/assets/icons-sports/futebol.png" />Futebol</router-link>
		<router-link to="/sports/2"><img src="@/assets/icons-sports/basquete.png" />Basquete</router-link>
		<router-link to="/sports/3"><img src="@/assets/icons-sports/tenis.png" />Tênis</router-link>
		<router-link to="/sports/4"><img src="@/assets/icons-sports/tenis-de-mesa.png" />Tênis de Mesa</router-link>
		<router-link to="/sports/5"><img src="@/assets/icons-sports/volei.png" />Vôlei</router-link>
		<router-link to="/sports/6"><img src="@/assets/icons-sports/volei-de-praia.png" />Vôlei de praia</router-link>
		<router-link to="/sports/7"><img src="@/assets/icons-sports/handebol.png" />Handebol</router-link>
		<router-link to="/sports/8"><img src="@/assets/icons-sports/basebol.png" />Basebol</router-link>
		<router-link to="/sports/9"><img src="@/assets/icons-sports/futebol-americano.png" />Futebol Americano</router-link>
		<router-link to="/sports/10"><img src="@/assets/icons-sports/MMA.png" />MMA</router-link>
		<router-link to="/sports/11"><img src="@/assets/icons-sports/boxe.png" />Box</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar',
	}
</script>

<style scoped>
	div.area-sidebar {
		background: rgb(61,61,61);
		background: linear-gradient(90deg, rgba(61,61,61,1) 86%, rgba(36,36,36,1) 100%);
		height:calc(100vh - 128px);
	}
	div.area-sidebar a {float:left; width:100%; padding:5px; font-size:13px; text-decoration:none; color:#eeeeee; display:flex; align-items:center; align-content:center; border-top:1px solid #666;}
	div.area-sidebar a:last-child {border-bottom:1px solid #666;}
	div.area-sidebar a img {width:25px; margin-right:6px;}
</style>