<template>
	<div class="row">
		<div class="col-12">
			<div class="nav-bar">
				<div>
					<img class="logo" src="@/assets/logo-banca-de-apostas.png">
				</div>

				<div class="area-links-nav">
					<router-link to="/esports" active-class="active">Esportes</router-link>
					<router-link to="/lives" active-class="active">AoVivo</router-link>
					<router-link to="/tourneys/best" active-class="active">Melhores Listas</router-link>
					<router-link to="/sports/1" active-class="active">Só Futebol</router-link>
					<router-link to="/tourneys" active-class="active">Campeonatos</router-link>
				</div>

				<div>
					<form>
						<div class="area-inputs">
							<input type="text" name="userName" placeholder="Usuário" />
							<input type="password" name="password" placeholder="Senha" />
							<button type="submit">OK</button>
						</div>
						<div class="area-show-modals-auth">
							<button type="button">Criar Conta</button>
							<button type="button">Esqueci a senha</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	</div>
		
</template>

<script>
	export default {
		name: 'Nav',
	}
</script>

<style scoped>
	.active {margin-left:20px !important;}
	.active::before {position:absolute; content: " "; width:11px; height:11px; background-color:#ff8800; border-radius:3px; margin-left:-15px; margin-top:6px;}

	img.logo {width:160px;}
	div.nav-bar {width:100%; display:flex; justify-content:space-between; padding:15px 15px; background-color:#2e3135; align-content:center; align-items:center;}

	div.area-links-nav a {float:left; color:#fdfdfe; text-decoration:none; margin:0px 10px; font-size:15px;}
	div.area-links-nav a:hover {text-decoration:underline;}

	form div.area-inputs {width:100%; display:flex; flex-wrap:wrap; align-items:center; align-content:center;}
	form div.area-inputs input {width:110px; margin-right:7px; border-radius:3px; border:none; padding:6px 8px; background-color:#e8e8e8; color:#757575; font-size:13px;}
	form div.area-inputs input::placeholder {color:#757575; font-size:13px;}
	form div.area-inputs button {background-color:#ff8800; color:#fdfdfe; border:none; border-radius:5px; padding:3px 5px;}
	form div.area-show-modals-auth {width:100%;}
	form div.area-show-modals-auth button {font-size:13px; background-color:transparent; padding:0px; border:none; color:#fefefe; margin-right:47px; margin-top:3px;}

</style>