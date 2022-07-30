<template>
	<div class="bg-box-modal-dash-client" id="background-box-modal">
		<div class="area-modal-deshboard-client">
			<header>
				<img class="logo" src="@/assets/logo-banca-de-apostas.png">
				<button @click="closeModal()"><font-awesome-icon icon="fa-solid fa-close" /></button>
				<div class="links-dashboard-client">
					<button type="button" @click="showViewDashboard('MainDashboardClient', 0)" class="btn-show-dash active"><font-awesome-icon icon="fa-solid fa-home" />Início</button>
					<button type="button" @click="showViewDashboard('DataProfile', 1)" class="btn-show-dash"><font-awesome-icon icon="fa-solid fa-user" />Meus Dados</button>
					<button type="button" @click="showViewDashboard('Historic', 2)" class="btn-show-dash"><font-awesome-icon icon="fa-solid fa-navicon" />Hístórico</button>
					<button type="button" @click="showViewDashboard('Bank', 3)" class="btn-show-dash"><font-awesome-icon icon="fa-solid fa-credit-card" />Banco</button>
					<button type="button" @click="showViewDashboard('Messages', 4)" class="btn-show-dash"><font-awesome-icon icon="fa-solid fa-edit" />Mensagens</button>
				</div>
			</header>

			<div v-if="viewDashboard == 'Bank'">
				<Bank />
			</div>

			<div v-if="viewDashboard == 'DataProfile'">
				<DataProfile />
			</div>

			<div v-if="viewDashboard == 'Historic'">
				<Historic />
			</div>

			<div v-if="viewDashboard == 'MainDashboardClient'">
				<MainDashboardClient />
			</div>

			<div v-if="viewDashboard == 'Messages'">
				<Messages />
			</div>
		</div>
	</div>
</template>

<script>
	import Bank from './Bank/Index.vue';
	import DataProfile from './DataProfile/Index.vue';
	import Historic from './Historic/Index.vue';
	import MainDashboardClient from './MainDashboardClient/Index.vue';
	import Messages from './Messages/Index.vue';
	export default {
		name: 'ModalDashboardClient',
		components: {
			Bank,
			DataProfile,
			Historic,
			MainDashboardClient,
			Messages,
		},
		data() {
		    return {
		    	viewDashboard: 'MainDashboardClient',
		    };
		},
		methods: {
			showViewDashboard(view, index){
				this.viewDashboard = view;
				this.changeActiveButton(index);
			},

			changeActiveButton(id){
				let elements = document.getElementsByClassName('btn-show-dash');
				for(let i = 0; i < elements.length; i++){
					if(elements[i].classList.contains('active')){
						elements[i].classList.remove('active')
					}
				}
				elements[id].classList.add('active');
			},

			closeModal(){
				this.$emit('close-modal-dashboard-client')
			}

		}

	}
</script>

<style scoped>
	div.bg-box-modal-dash-client {position:fixed; width:100vw; height:100vh; background-color:rgba(0,0,0,0.5); margin:0 auto; top:0px; left:0px; z-index:100; display:flex; justify-content:center; align-items:center;}
	div.area-modal-deshboard-client {float:left; min-width:750px; max-width:750px; height:70%; background-color:#c5c5c5; border-radius:10px;}
	div.area-modal-deshboard-client header {width:100%; padding:10px 0px; background-color:#464646; display:flex; flex-wrap:wrap; justify-content:center; border-radius:10px 10px 0px 0px; }
	div.area-modal-deshboard-client header img {width:120px;}
	div.area-modal-deshboard-client header > button {position:absolute; width:28px; height:28px; border:none; margin-left:700px; margin-top:0px; background-color:#e8e8e8; border-radius:100%; padding-top:3px; color:#666666;}
	div.area-modal-deshboard-client header div.links-dashboard-client {float:left; width:100%; transform:translateY(10px);}
	div.area-modal-deshboard-client header div.links-dashboard-client button {padding:5px 15px; text-decoration:none; color:#c5c5c5; background-color:transparent; border:none; font-size:15px;}
	div.area-modal-deshboard-client header div.links-dashboard-client button:first-child {margin-left:7px;}
	div.area-modal-deshboard-client header div.links-dashboard-client button svg {margin-right:7px;}
	.active {background-color:#c5c5c5 !important; color:#464646 !important; border-radius:3px 3px 0px 0px;}

</style>