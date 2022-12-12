<template>
	<div class="area-sidebar">
		<router-link to="/sports/1"><img src="@/assets/icons-sports/futebol.png" /><span>Futebol</span></router-link>
		<router-link to="/sports/baseball"><img src="@/assets/icons-sports/basebol.png" /><span>Basebol</span></router-link>
		<router-link to="/sports/basketball"><img src="@/assets/icons-sports/basquete.png" /><span>Basquete</span></router-link>
		<!--<router-link to="/sports/handball"><img src="@/assets/icons-sports/handebol.png" /><span>Handebol</span></router-link>
		<router-link to="/sports/hockey"><img src="@/assets/icons-sports/hockey.png" /><span>Hóquei</span></router-link>
		<router-link to="/sports/rugby"><img src="@/assets/icons-sports/rugby.png" /><span>Rúgbi</span></router-link>
		<router-link to="/sports/volleyball"><img src="@/assets/icons-sports/volei.png" /><span>Vôlei</span></router-link>

		<router-link to="/sports/3"><img src="@/assets/icons-sports/tenis.png" /><span>Tênis</span></router-link>
		<router-link to="/sports/4"><img src="@/assets/icons-sports/tenis-de-mesa.png" /><span>Tênis de Mesa</span></router-link>
		<router-link to="/sports/6"><img src="@/assets/icons-sports/volei-de-praia.png" /><span>Vôlei de praia</span></router-link>
		<router-link to="/sports/9"><img src="@/assets/icons-sports/futebol-americano.png" /><span>Futebol Americano</span></router-link>
		<router-link to="/sports/10"><img src="@/assets/icons-sports/MMA.png" /><span>MMA</span></router-link>
		<router-link to="/sports/11"><img src="@/assets/icons-sports/boxe.png" /><span>Box</span></router-link>-->
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

	@media (max-width:1100px){
		div.area-sidebar a span {display:none;}
	}
</style>