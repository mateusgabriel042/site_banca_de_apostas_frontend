<template>
	<div class="row">
		<div class="col-12">
			<div class="nav-bar">
				<div>
					<img class="logo" src="@/assets/logo-banca-de-apostas.png">
				</div>

				<div class="area-links-nav">
					<router-link to="/esports" active-class="active">Esportes</router-link>
					<router-link to="/lives/futebol" active-class="active">AoVivo</router-link>
					<router-link to="/tourneys/best" active-class="active">Melhores Listas</router-link>
					<router-link to="/sports/1" active-class="active">Só Futebol</router-link>
					<router-link to="/tourneys" active-class="active">Campeonatos</router-link>
				</div>

				<div v-if="loggedIn == false">
					<form @submit="handleLogin">
						<div class="area-inputs">
							<input type="email" name="email" placeholder="Usuário" />
							<input type="password" name="password" placeholder="Senha" />
							<button type="submit">OK</button>
						</div>
						<div class="area-show-modals-auth">
							<button @click="openModalRegisterUser()" type="button">Criar Conta</button>
							<button @click="openModalRecoveryPassword()" type="button">Esqueci a senha</button>
						</div>
					</form>
				</div>
				<div class="area-act-show-deposits" v-else>
					<div class="area-money-client">
						<label><span @click="updateMoneyUser()"><font-awesome-icon id="refresh-money-in-nav" icon="fa-solid fa-refresh" /></span> R$ {{parseFloat(user.money).toFixed(2) || '0.00'}}</label>
						<button @click="showModalDashboardClient()">Depositar</button>
					</div>
					<div class="area-icon-user">
						<label>
							<font-awesome-icon icon="fa-solid fa-user-circle" />
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div v-if="modalDashboardClientShow">
		<ModalDashboardClient @close-modal-dashboard-client="closeModalDashboardClient()" />
	</div>

	<div v-if="modalRegisterUserShow">
		<ModalRegisterUSer @close-modal-register-user="closeModalRegisterUser()" />
	</div>

	<div v-if="modalRecoveryPasswordShow">
		<ModalEmailForResetPassword @close-modal-recovery-password="closeModalRecoveryPassword()" />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import ModalRegisterUSer from '../ModalRegisterUser/Index.vue';
	import ModalEmailForResetPassword from '../ModalEmailForResetPassword/Index.vue';
	import ModalDashboardClient from '../ModalDashboardClient/Index.vue';
	import UserService from "../../services/user.service";
	export default {
		name: 'Nav',
		components: {
			ModalRegisterUSer,
			ModalEmailForResetPassword,
			ModalDashboardClient
		},
		data() {
		    return {
		      message: "",
		      modalDashboardClientShow: false,
		      modalRegisterUserShow: false,
		      modalRecoveryPasswordShow: false,
		    };
		},
		computed: {
			...mapGetters({
	        	user: 'auth/user',
	    	}),
		    loggedIn() {
		    	return this.$store.state.auth.status.loggedIn;
		    },
		},
		created() {
		    if (this.loggedIn) {
		    	//caso o usuario esteja logado
		    }
		},
		methods: {
		    handleLogin(user) {
		    	user.preventDefault();
		    	
		    	this.$store.dispatch("auth/login", user).then(() => {
		          	this.$router.push("/");
		        },(error) => {
		        	console.log(error.response);
		        	this.message = "ocorreu algum erro"
		        });
		    },

		    showModalDashboardClient(){
		    	this.modalDashboardClientShow = true;
		    },


		    closeModalDashboardClient(){
		    	this.modalDashboardClientShow = false;
		    },

		    openModalRegisterUser(){
		    	this.modalRegisterUserShow = true;
		    },

		    closeModalRegisterUser(){
		    	this.modalRegisterUserShow = false;
		    },

		    openModalRecoveryPassword(){
		    	this.modalRecoveryPasswordShow = true;
		    },

		    closeModalRecoveryPassword(){
		    	this.modalRecoveryPasswordShow = false;
		    },

		    updateMoneyUser(){
		    	document.getElementById('refresh-money-in-nav').classList.add('effect-spin');
		    	setTimeout(() => {
					document.getElementById('refresh-money-in-nav').classList.remove('effect-spin');
				}, 1000)
		    	
		    	this.$store.dispatch({
					type: 'auth/updateMoneyUser'
				});
		    },

		},
		mounted() {
		    /*UserService.getUserBoard().then(
			    (response) => {
			        console.log(response.data);
			    },
			    (error) => {
			        this.content = 'algum erro aconteceu'
			    });*/
		},
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
	form div.area-inputs button:hover {background-color:#ff7700; transition:0.3s;}
	form div.area-inputs button:active {background-color:#ff4800;}
	form div.area-show-modals-auth {width:100%;}
	form div.area-show-modals-auth button {font-size:13px; background-color:transparent; padding:0px; border:none; color:#fefefe; margin-right:47px; margin-top:3px;}

	div.area-act-show-deposits {display:flex;}
	div.area-act-show-deposits div.area-money-client {display:flex; flex-wrap:wrap; justify-content:flex-end; align-items:center; align-content:center;}
	div.area-act-show-deposits div.area-money-client label {float:left; width:100%; text-align:right; color:#e3e3e3; font-size:16px; font-size:13px;}
	div.area-act-show-deposits div.area-money-client label span {width:20px; height:20px; color:#bbbbbb; cursor:pointer;}
	div.area-act-show-deposits div.area-money-client button {background-color:transparent; border:none; padding:0px; color:#ff742f; font-size:13px;}
	div.area-act-show-deposits div.area-icon-user {margin-left:10px;}
	div.area-act-show-deposits div.area-icon-user label {color:#e3e3e3; font-size:35px; padding:0px; margin:0px;}

	.effect-spin {
	  -webkit-animation-name: spin;
	  -webkit-animation-duration: 1000ms;
	  -webkit-animation-iteration-count: 1;
	  -webkit-animation-timing-function: linear;
	  -moz-animation-name: spin;
	  -moz-animation-duration: 1000ms;
	  -moz-animation-iteration-count: 1;
	  -moz-animation-timing-function: linear;
	  -ms-animation-name: spin;
	  -ms-animation-duration: 1000ms;
	  -ms-animation-iteration-count: 1;
	  -ms-animation-timing-function: linear;
	}
	@-moz-keyframes spin {
	    from { -moz-transform: rotate(0deg); }
	    to { -moz-transform: rotate(360deg);}
	}
	@-webkit-keyframes spin {
	    from { -webkit-transform: rotate(0deg);}
	    to { -webkit-transform: rotate(360deg);}
	}
	@keyframes spin {
	    from {transform:rotate(0deg);}
	    to {transform:rotate(360deg);}
	}

</style>