<template>
	<div class="area-edit-user">
		<form>
			<h4><font-awesome-icon icon="fa-solid fa-globe-americas" /> Localização</h4>
			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label for="address_country">País de Residência</label>
						<select class="form-select" name="address_country" id="address_country" v-model="user.address_country">
							<option value="null">Selecionar</option>
							<option value="Brasil">Brasil</option>
							<option value="Portugal">Portugal</option>
							<option value="Argentina">Argentina</option>
						</select>
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label>Fuso Horário</label>
						<select class="form-select" name="timezone" v-model="user.timezone">
							<option value="null">Selecionar</option>
							<option value="GMT-3">GMT-3</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>Idioma</label>
						<select class="form-select" name="language" v-model="user.language">
							<option value="null">Selecionar</option>
							<option value="PT-br">Português</option>
						</select>
					</div>
				</div>
			</div>

			<h4><font-awesome-icon icon="fa-solid fa-user" /> Informações pessoais</h4>
			<p>Informe os dados corretamente, pois os mesmos serão validados posteriormente com seu documento de identificação.</p>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label for="first_name">Primeiro Nome</label>
						<input type="text" name="first_name" id="first_name" :value="user.first_name" />
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label for="last_name">Sobrenome Nome</label>
						<input type="text" name="last_name" id="last_name" :value="user.last_name" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>CPF</label>
						<label>{{user.cpf || '-'}}</label>
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label for="birth_date">Data de nascimento</label>
						<input type="text" name="birth_date" id="birth_date" :value="user.birth_date" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>Gênero</label>
						<select class="form-select" name="sex" v-model="user.sex">
							<option value="null">Selecionar</option>
							<option value="M">Masculino</option>
							<option value="F">Feminino</option>
							<option value="not-declared">Não informar</option>
						</select>
					</div>
				</div>
			</div>

			<h4><font-awesome-icon icon="fa-solid fa-phone" /> Informações de Contato</h4>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label for="email">E-mail</label>
						<input type="email" name="email" id="email" :value="user.email" />
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label for="mobile_phone">Telefone</label>
						<input type="text" class="ddd-cellphone cellphone" name="ddd_country" maxlength="4" value="+55" />
						<input type="text" class="cellphone" name="mobile_phone" id="mobile_phone" placeholder="(__)_____-____" :value="user.mobile_phone" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label for="verify_email">Confirmar de Email</label>
						<input type="email" name="verify_email" id="verify_email" />
					</div>
				</div>
			</div>

			

			<h4><font-awesome-icon icon="fa-solid fa-id-card" /> Endereço</h4>
			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label>Estado</label>
						<select class="form-select" name="address_state_id" v-model="user.address_state_id">
							<option value="null">Selecionar</option>
							<option value="4654">RN</option>
							<option value="46544">SC</option>
						</select>
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label>Cidade</label>
						<select class="form-select" name="address_state_id" v-model="user.address_city_id">
							<option value="null">Selecionar</option>
							<option value="1324">Macau</option>
							<option value="5123">Natal</option>
						</select>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label for="address_zipcode">CEP</label>
						<input type="text" placeholder="_____-___" name="address_zipcode" id="address_zipcode" :value="user.address_zipcode" />
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label for="address_street">Rua</label>
						<input type="text" name="address_street" id="address_street" :value="user.address_street" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-6">
					<div class="group-input">
						<label for="address_number">Número</label>
						<input type="text" name="address_number" id="address_number" :value="user.address_number" />
					</div>
				</div>

				<div class="col-6">
					<div class="group-input">
						<label for="address_complement">Complemento</label>
						<input type="text" name="address_complement" id="address_complement" :value="user.address_complement" />
					</div>
				</div>
			</div>


			<div class="row mt-3">
				<div class="col-12">
					<div class="btn-submit">
						<button type="submit">Salvar Dados</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'EditData',
		data() {
		    return {
		    	loading: false,
		    	user: JSON.parse(localStorage.getItem('user')).user,
		    };
		},
		mounted() {

		},
	}
</script>

<style scoped>
	div.area-edit-user {float:left; width:100%; height:400px; overflow-y:auto; overflow-x:hidden;}
	form {height:calc(100% - 80px); padding:15px; width:100%; overflow-y:auto;}
	form h4 {font-size:16px; color:#535353; margin-top:15px;}
	form h4:first-child {margin-top:0px;}
	form p {width:100%; font-size:11px; color:#535353;}
	form div.group-input {margin-bottom:15px;}
	form div.group-input label {width:100%; font-size:13px; color:#666666;}
	form div.group-input input:not(.cellphone) {width:100%;}
	form div.group-input input.cellphone {width:calc(100% - 60px);}
	form div.group-input input {border:none; border-left:5px solid #a94442; color:#666666; border-radius:3px; padding:6px 8px; font-size:14px;}
	form div.group-input input.ddd-cellphone {width:50px; border-left:5px solid #42a948; margin-right:10px;}
	form div.group-input select {color:#999999; padding:6px 10px !important; font-family:"arial"; font-size:14px; border-left:5px solid #a94442;}

	form div.group-input-icon label {width:100%;}
	form div.group-input-icon span {float:left; width:40px; height:100%; padding:4px; background-color:#dddddd; color:#666666; text-align:center; border-radius:4px 0px 0px 4px;}
	form div.group-input-icon input {border:none; width:calc(100% - 45px); border-left:5px solid #a94442; color:#666666; border-radius:3px; padding:6px 8px; font-size:14px; margin-bottom:4px;}
	form div.btn-submit {
		float:left;
		width:100%;
		display:flex;
		justify-content:center;
	}

	form div.btn-submit button {
		border:none;
		border-radius:3px;
		padding:5px 50px;
		font-size:15px;
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
	}
</style>