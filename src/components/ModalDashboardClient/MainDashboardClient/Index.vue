<template>
	<ul>
		<div class="row">
			<div class="col-6">
				<li>
					<span><font-awesome-icon icon="fa-solid fa-money-bill-wave" /></span>
					<label><b>Saldo:</b> R${{parseFloat(user.money).toFixed(2) || '0.00'}}</label>
					<span class="refresh"><font-awesome-icon id="refresh-money-in-dashboard" icon="fa-solid fa-refresh" @click="updateMoneyUser()" /></span>
				</li>
			</div>

			<div class="col-6">
				<li class="destack">
					<span><font-awesome-icon icon="fa-solid fa-credit-card" /></span>
					<label>Depositar</label>
				</li>
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<li>
					<span><font-awesome-icon icon="fa-solid fa-user" /></span>
					<label>Meus dados ({{user.username}})</label>
				</li>
			</div>

			<div class="col-6">
				<li>
					<span><font-awesome-icon icon="fa-solid fa-credit-card" /></span>
					<label>Histórico</label>
				</li>
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<li>
					<span><font-awesome-icon icon="fa-solid fa-money-bill-wave" /></span>
					<label>Banco</label>
				</li>
			</div>

			<div class="col-6">
				<li>
					<span><font-awesome-icon icon="fa-solid fa-edit" /></span>
					<label>Mensagens</label>
				</li>
			</div>
		</div>
		<div class="row mt-2">
			<div class="col-12">
				<button class="btn-logout" @click="logout()"><font-awesome-icon icon="fa-solid fa-sign-out" /> Sair</button>
			</div>
		</div>
	</ul>
</template>

<script>
	import { mapGetters } from 'vuex';
	import AuthService from '../../../services/auth.service.js';
	export default {
		name: 'MainDashboardClient',

		methods: {
			updateMoneyUser(){
				document.getElementById('refresh-money-in-dashboard').classList.add('effect-spin');
		    	setTimeout(() => {
					document.getElementById('refresh-money-in-dashboard').classList.remove('effect-spin');
				}, 1000)
		    	this.$store.dispatch({
					type: 'auth/updateMoneyUser'
				});
		    },
		    logout(){
		    	AuthService.logout();
		    	window.location.reload();
		    },
		},

		computed: {
			...mapGetters({
	        	user: 'auth/user',
	    	}),
		    loggedIn() {
		    	return this.$store.state.auth.status.loggedIn;
		    },
		},
	}
</script>

<style scoped>
	ul {margin:0px; padding:20px; list-style:none;}
	ul li {float:left; width:100%; padding:4px 10px; background-color:#e8e8e8; border-radius:5px; margin:7px 0px;}
	ul li span.refresh {float:right;}
	ul li span {color:#464646;}
	ul li label {color:#464646; font-size:13px; margin-left:7px;}
	ul li.destack {
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
	}
	ul li.destack * {color:#e8e8e8;}
	ul button.btn-logout {float:right; background-color:#464646; border-radius:5px; border:none; color:#e8e8e8; font-size:13px; padding:5px 13px;}

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