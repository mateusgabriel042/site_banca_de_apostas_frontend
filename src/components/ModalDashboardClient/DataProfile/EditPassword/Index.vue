<template>
	<div class="area-alter-password">
		<h4>Alterar Senha</h4>
		<form>
			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>Senha Atual</label>
						<input type="text" name="first_name" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>Senha</label>
						<input type="text" name="first_name" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>Confirmação da Senha</label>
						<input type="text" name="first_name" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<button type="submit" class="btn-submit">Salvar Dados</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'EditPassword',
	}
</script>

<style scoped>
	div.area-alter-password {float:left; width:100%; padding:10px;}
	h4 {color:#555555; font-size:19px; margin-top:5px;}
	form {float:left; width:100%; padding:3px 10px;}
	form label {width:100%; color:#555555; font-size:13px;}
	form input {width:100%; border:none; border-left:4px solid #a94442; border-radius:3px; margin-bottom:15px; padding:3px 10px; background-color:#e8e8e8;}
	form button.btn-submit {
		float:right;
		border:none;
		border-radius:3px;
		padding:3px 8px;
		font-size:15px;
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
	}
</style>