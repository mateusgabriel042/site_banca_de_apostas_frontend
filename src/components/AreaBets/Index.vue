<template>
	<div class="area-bets">
		<!--<label class="not-bets">Ainda não há nenhuma aposta!</label>-->
		<ul>
			<li>
				<div class="row">
					<div class="col-1">
						<button class="btn-close-bet" type="button"><font-awesome-icon icon="fa-solid fa-close" /></button>
					</div>
					<div class="col-10">
						<div class="area-lb-odd">
							<label>Fortaleza CE</label>
							<label>2.12</label>
						</div>
						<div class="area-label-indicator">
							<label>Resultado Final</label>
						</div>
						<div class="area-label-game">
							<label>Fortaliza CE v Estudiantes de La Plata</label>
						</div>
						<div class="area-input-bet">
							<input type="number" name="bet[]" />
							<label>Retornos: 0,00</label>
						</div>
					</div>
				</div>
			</li>

			<li>
				<div class="row">
					<div class="col-1">
						<button class="btn-close-bet" type="button"><font-awesome-icon icon="fa-solid fa-close" /></button>
					</div>
					<div class="col-10">
						<div class="area-lb-odd">
							<label>Fortaleza CE</label>
							<label>2.12</label>
						</div>
						<div class="area-label-indicator">
							<label>Resultado Final</label>
						</div>
						<div class="area-label-game">
							<label>Fortaliza CE v Estudiantes de La Plata</label>
						</div>
						<div class="area-input-bet">
							<input type="number" name="bet[]" />
							<label>Retornos: 0,00</label>
						</div>
					</div>
				</div>
			</li>

			<li>
				<div class="row">
					<div class="col-11">
						<div class="area-lb-odd">
							<label>Aposta Múltipla</label>
							<label>2.12</label>
						</div>
						<div class="area-label-indicator">
							<label>2 Múltiplas</label>
						</div>
						<div class="area-input-bet">
							<input type="number" name="bet[]" />
							<label>Retornos: 0,00</label>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<button class="btn-finish-bet">Fazer Aposta <span>R$ 23,00</span></button>
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

	ul {width:100%; padding:0pc; margin:0px; list-style:none;}
	ul li {float:left; width:100%; background-color:#c5c5c5; padding:5px 10px; padding-bottom:10px; border-top:1px solid #bbb;}
	ul li button.btn-close-bet {background-color:#999; color:#eee; border:none; border-radius:2px; font-size:9px; padding:1px 4px; padding-bottom:0px; }
	ul li div.area-lb-odd {width:100%; display:flex; flex-wrap:wrap; justify-content:space-between; color:#666;}
	ul li div.area-lb-odd label {font-size:13px; color:#555555; margin-top:5px;}
	ul li div.area-label-indicator {width:100%; display:flex; flex-wrap:wrap;}
	ul li div.area-label-indicator label {font-size:12px; color:#666666; margin-top:8px;}
	ul li div.area-label-game {width:100%; display:flex; flex-wrap:wrap;}
	ul li div.area-label-game label {font-size:12px; color:#666666; margin-top:0px;}
	ul li div.area-input-bet {width:100%; display:flex; flex-wrap:wrap; align-items:center; align-content:center; margin-top:6px;}
	ul li div.area-input-bet input {border:none; width:90px; padding:3px 5px; margin-right:10px; background-color:#e8e8e8; font-size:13px; color:#666666;}
	ul li div.area-input-bet label {font-size:12px; color:#666666; margin-top:0px;}
	button.btn-finish-bet {background-color:#282c30; color:#e8e8e8; border:none; width:100%; padding:13px 0px; font-size:13px;}
	button.btn-finish-bet span {color:#ff8800;}

</style>