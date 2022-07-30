<template>
	<label class="title-match">Atlético MG x CS Emelec</label>
	<label class="type-bet">Resultado Final</label>
	<div class="odds">
		<div class="odd">Atletico MG <span class="value-odd">1.32</span></div>
		<div class="odd">Empate <span class="value-odd">5.00</span></div>
		<div class="odd">CS Emelec <span class="value-odd">8.91</span></div>
	</div>
</template>

<style scoped>
	label.title-match {float:left; width:100%; background-color:#2e3135; color:#eeeeee; font-size:14px; padding:3px 8px; font-weight:bold;}
	label.type-bet {float:left; width:100%; background-color:#b1b1b1; font-size:13px; color:#333333; padding:7px 8px;}
	div.odds {float:left;width:100%;}
	div.odds div.odd {width:100%; border-bottom:1px solid #666666; color:#b1b1b1; font-size:13px; padding:7px 8px;}
	div.odds div.odd:hover {background-color:#666666; cursor:pointer;}
	div.odds div.odd span.value-odd {color:#ffdf1b;}
</style>