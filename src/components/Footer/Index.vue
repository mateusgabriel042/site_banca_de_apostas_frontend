<template>
	<footer>
		<img class="logo" src="@/assets/logo-banca-de-apostas.png">
		<label>Patrocinador Oficial:</label>
		<div class="area-logos-1">
			<img class="logo" src="@/assets/logo-banca-de-apostas.png" />
			<img class="logo" src="@/assets/logo-banca-de-apostas.png" />
			<img class="logo" src="@/assets/logo-banca-de-apostas.png" />
		</div>
		<div class="area-networks-redes">
			<a href="facebook.com"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
			<a href="instagram.com"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
		</div>
		<div class="area-logos-2">
			<img class="logo" src="@/assets/logo-banca-de-apostas.png" />
			<img class="logo" src="@/assets/logo-banca-de-apostas.png" />
			<img class="logo" src="@/assets/logo-banca-de-apostas.png" />
		</div>
	</footer>

</template>

<style scoped>
	footer {width:100%; display:flex; justify-content:center; align-items:flex-start; align-content:flex-start; flex-wrap:wrap; background-color:#2b2b2b; padding:20px 0px;}
	footer > img {width:190px; filter:grayscale(1);}
	footer > label {width:100%; text-align:center; margin-top:25px; color:#777777;}
	footer div.area-logos-1 {width:100%; display:flex; justify-content:center; flex-wrap:wrap; align-items:center; align-content:center;}
	footer div.area-logos-1 img {height:60px; margin:10px;}

	footer div.area-networks-redes {width:100%; display:flex; justify-content:center; flex-wrap:wrap; align-items:center; align-content:center;}
	footer div.area-networks-redes a {width:40px; height:40px; border-radius:5px; color:#bbbbbb; font-size:20px; background-color:#444444; text-decoration:none; margin:8px; display:flex; justify-content:center; align-content:center; align-items:center;}
	footer div.area-logos-2 {width:100%; display:flex; justify-content:space-around; flex-wrap:wrap; align-items:center; align-content:center; margin-top:10px;}
	footer div.area-logos-2 img {height:60px;}
</style>