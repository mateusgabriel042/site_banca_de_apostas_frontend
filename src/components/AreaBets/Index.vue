<template>
	<div class="area-bets">
		<label class="not-bets">Ainda não há nenhuma aposta!</label>
	</div>
</template>

<script>
	export default {
		name: 'AreaBets',
	}
</script>

<style scoped>
	div.area-bets {float:left; width:100%; background-color:#3d3d3d; height:calc(100vh - 128px);}
	label.not-bets {float:left; width:100%; color:#bbbbbb; font-size:13px; text-align:center;}
</style>