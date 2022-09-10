<template>
	<div class="background-box-modal" id="background-box-modal">
		<div class="area-modal-register-user">
			<header>
				<img class="logo" src="@/assets/logo-banca-de-apostas.png">
				<button @click="closeModal()"><font-awesome-icon icon="fa-solid fa-close" /></button>
			</header>
			<form @submit="onSubmitCreateUser">
				<h4><font-awesome-icon icon="fa-solid fa-user" /> Informações pessoais</h4>
				<p>Informe os dados corretamente, pois os mesmos serão validados posteriormente com seu documento de identificação.</p>

				<div class="row">
					<div class="col-6">
						<div class="group-input">
							<label>Primeiro Nome</label>
							<input type="text" v-model="dataUser.first_name" />
						</div>
					</div>

					<div class="col-6">
						<div class="group-input">
							<label>Sobrenome Nome</label>
							<input type="text" v-model="dataUser.last_name" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-6">
						<div class="group-input">
							<label>CPF</label>
							<input type="text" v-model="dataUser.cpf" />
						</div>
					</div>

					<div class="col-6">
						<div class="group-input">
							<label>Data de nascimento</label>
							<input type="text" v-model="dataUser.birth_date" />
						</div>
					</div>
				</div>

				<h4><font-awesome-icon icon="fa-solid fa-phone" /> Informações de Contato</h4>

				<div class="row">
					<div class="col-6">
						<div class="group-input">
							<label>E-mail</label>
							<input type="email" v-model="dataUser.email" />
						</div>
					</div>

					<div class="col-6">
						<div class="group-input">
							<label>Telefone</label>
							<input type="text" class="ddd-cellphone cellphone" v-model="dataUser.ddd_country" maxlength="4" />
							<input type="text" class="cellphone" v-model="dataUser.mobile_phone" placeholder="(__)_____-____" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-6">
						<div class="group-input">
							<label>Verificação de Email</label>
							<input type="email" v-model="dataUser.verify_email" />
						</div>
					</div>
				</div>

				<h4><font-awesome-icon icon="fa-solid fa-key" /> Informações de Login</h4>

				<div class="row">
					<div class="col-6">
						<div class="group-input-icon">
							<label>Usuário</label>
							<span><font-awesome-icon icon="fa-solid fa-user" /></span>
							<input type="text" v-model="dataUser.username" />
						</div>
						<p class="info-input">Seu nome de usuário deve conter apenas apenas letras, números e sublinhado. Não pode ter acentos ou caracteres especiais. O tamanho deve ser entre 5 e 15 caracteres</p>
					</div>
				</div>

				<div class="row">
					<div class="col-6">
						<div class="group-input-icon">
							<label>Senha</label>
							<span><font-awesome-icon icon="fa-solid fa-lock" /></span>
							<input type="password" v-model="dataUser.password" />
						</div>
						<p class="info-input">A senha deve conter entre 8 e 15 carateres e não pode conter seu nome de usuário</p>
					</div>

					<div class="col-6">
						<div class="group-input-icon">
							<label>Confirmação da Senha</label>
							<span><font-awesome-icon icon="fa-solid fa-lock" /></span>
							<input type="password" v-model="dataUser.password_confirmation" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<p class="info-up">Ao realizar o cadastro afirmo ser maior de 18 anos e estou de acordo com todas as <span @click="openRoles('regras_gerais')">Regras Gerais</span> e <span @click="openRoles('politica_de_privacidade')">Política de Privacidade</span>.
						</p>
					</div>
					<div class="col-12">
						<div class="area-input-accept-policy">
							<input type="checkbox" id="input-accept_policy" v-model="dataUser.accept_policy" />
							<label for="input-accept_policy">Concordo</label>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<div class="group-input-center">
							<label>Código de Afiliado (Opcional)</label>
							<input type="text" name="code_affiliate" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<div class="btn-submit-center">
							<button type="submit">Criar conta</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'ModalRegisterUser',

		data() {
		    return {
		    	loading: false,
		    	dataUser: {
		    		first_name: null,
		    		last_name: null,
					cpf: null,
					birth_date: null,
					email: null,
					ddd_country: '+55',
					mobile_phone: null,
					verify_email: null,
					username: null,
					password: null,
					password_confirmation: null,
					accept_policy: 0,
		    	},
		    	
		    };
		},

		methods: {

			openRoles(rule){
				let url = window.location.href;
				let arr = url.split("/");
				let result = arr[0] + "//" + arr[2];
				let Window = window.open (`${result}/rules/${rule}.html`, 'popup');
			},
			closeModal(){
				this.$emit('close-modal-register-user');
			},

			onSubmitCreateUser(event){
				event.preventDefault();
				if(this.dataUser.accept_policy == 0){
					alert('É importante que você concorde com as politicas do nosso site!');
				} else if (this.dataUser.email == null){
					alert('O email não foi informado.');
				} else if (this.dataUser.verify_email != this.dataUser.email) {
					alert('A confirmação de email esta diferente do email informado.');
				} else {
					this.loading = true;
		    	
			    	this.$store.dispatch("auth/register", this.dataUser).then(() => {
			          	this.loading = false;
			          	this.$router.push("/");
			        },(error) => {
			        	this.loading = false;
			        	console.log(error.response);
			        	this.message = "ocorreu algum erro"
			        });
				}
			},
		}
	}
</script>

<style scoped>
	div.background-box-modal {position:fixed; width:100vw; height:100vh; background-color:rgba(0,0,0,0.5); margin:0 auto; top:0px; left:0px; z-index:3; display:flex; justify-content:center; align-items:center;}
	div.area-modal-register-user {float:left; min-width:750px; max-width:750px; height:70%; background-color:#c5c5c5; border-radius:10px;}
	div.area-modal-register-user header {width:100%; padding:15px 0px; background:url("@/assets/ns_banner.png") no-repeat; background-size:cover; display:flex; justify-content:center; border-radius:10px 10px 0px 0px;}
	div.area-modal-register-user header img {width:120px;}
	div.area-modal-register-user header button {position:absolute; width:28px; height:28px; border:none; margin-left:700px; margin-top:-10px; background-color:#e8e8e8; border-radius:100%; padding-top:3px; color:#666666;}

	div.area-modal-register-user form {height:calc(100% - 80px); padding:15px; width:100%; overflow-y:auto;}
	div.area-modal-register-user form h4 {font-size:16px; color:#535353; margin-top:15px;}
	div.area-modal-register-user form h4:first-child {margin-top:0px;}
	div.area-modal-register-user form p {width:100%; font-size:11px; color:#535353;}
	div.area-modal-register-user form div.group-input {margin-bottom:15px;}
	div.area-modal-register-user form div.group-input label {width:100%;}
	div.area-modal-register-user form div.group-input input:not(.cellphone) {width:100%;}
	div.area-modal-register-user form div.group-input input.cellphone {width:calc(100% - 60px);}
	div.area-modal-register-user form div.group-input input {border:none; border-left:5px solid #a94442; color:#666666; border-radius:3px; padding:6px 8px; font-size:14px;}
	div.area-modal-register-user form div.group-input input.ddd-cellphone {width:50px; border-left:5px solid #42a948; margin-right:10px;}

	div.area-modal-register-user form div.group-input-icon label {width:100%;}
	div.area-modal-register-user form div.group-input-icon span {float:left; width:40px; height:100%; padding:4px; background-color:#dddddd; color:#666666; text-align:center; border-radius:4px 0px 0px 4px;}
	div.area-modal-register-user form div.group-input-icon input {border:none; width:calc(100% - 45px); border-left:5px solid #a94442; color:#666666; border-radius:3px; padding:6px 8px; font-size:14px; margin-bottom:4px;}

	p.info-up {font-size:17px !important; text-align:center;}
	p.info-up span {color:#ff8800; cursor:pointer;}
	p.info-up span:hover {text-decoration:underline;}
	div.area-input-accept-policy { display:flex; justify-content:center; align-items:center; align-content:center;}
	div.area-input-accept-policy input {min-width:20px; min-height:20px; margin-right:10px;}
	div.area-input-accept-policy label {font-size:14px; color:#535353;}

	div.group-input-center {display:flex; flex-wrap:wrap; justify-content:center; margin-top:25px;}
	div.group-input-center label {width:100%; text-align:center; color:#535353; font-size:14px; margin-bottom:5px;}
	div.group-input-center input {width:200px; border:none; color:#666666; border-radius:3px; padding:6px 8px; font-size:14px;}

	div.btn-submit-center {display:flex; justify-content:center; margin-top:25px;}
	div.btn-submit-center button {width:200px; border:none; color:#fdfdfe; padding:5px 0px; border-radius:4px;
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
	}

</style>