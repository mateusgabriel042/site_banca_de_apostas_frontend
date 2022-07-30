<template>
	<label class="title-best-list-destak">Melhores Listas em Destaque</label>
	<ul>
		<div>
			<li>
				<img src="@/assets/icons-sports/futebol.png" />
				<label>Copa Libertadores</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
			<li>
				<img src="@/assets/icons-countries/brazil.png" />
				<label>Brasil - Brasileirão Série B</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-countries/brazil.png" />
				<label>Brasil - Copa do Brasil</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		
			<li>
				<img src="@/assets/icons-countries/brazil.png" />
				<label>Brasil - Brasileirão Série A</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-sports/futebol.png" />
				<label>Copa Sul-Americana</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		
			<li>
				<img src="@/assets/icons-countries/england.png" />
				<label>Inglaterra - Premier League</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-countries/germany.png" />
				<label>Alemanha - Bundesliga</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		
			<li>
				<img src="@/assets/icons-countries/spain.png" />
				<label>Espanha - LaLiga</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-countries/italy.png" />
				<label>Itália - Série A</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		
			<li>
				<img src="@/assets/icons-countries/france.png" />
				<label>França - Ligue 1</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-sports/tenis.png" />
				<label>Wimbledon Masculino</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		
			<li>
				<img src="@/assets/icons-sports/tenis.png" />
				<label>Wimbledon Feminino</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-sports/tenis.png" />
				<label>Wimbledon Duplas Masculino</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		
			<li>
				<img src="@/assets/icons-sports/tenis.png" />
				<label>Wimbledon Duplas Feminino</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>

		<div>
			<li>
				<img src="@/assets/icons-sports/tenis.png" />
				<label>Wimbledon Pares Masculino</label>
				<font-awesome-icon icon="fa-solid fa-caret-right" />
			</li>
		</div>
	</ul>
</template>

<script>
	export default {
    	name: 'Esports',
	}
</script>

<style scoped>
	label.title-best-list-destak {float:left; width:100%; background-color:#2e3135; color:#eeeeee; font-size:13px; padding:5px 8px;}
	ul {width:100%; padding:0px; margin:0px; list-style:none; background-color:#646464;}
	ul div {width:100%; display:flex;}
	ul div li {display:flex; width:50%; align-items:center; align-content:center; border-left:1px solid #666666; 
		border-bottom:1px solid #666666; padding:3px 5px; color:#e3e3e3; justify-content:space-between;}
	ul div li:last-child {border-right:1px solid #666666;}
	ul div li:hover {cursor:pointer; background-color:#888;}
	ul div li img {width:20px; margin-right:5px; cursor:pointer;}
	ul div li label {width:80%; overflow: hidden; cursor:pointer; white-space: nowrap; text-overflow: ellipsis; font-size:13px; color:#e3e3e3;}

</style>