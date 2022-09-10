<template>
	<div class="area-profile">
		<div class="area-links-crud-user">
			<button type="button" @click="showViewCrudUser('BetsPurchase', 0)" class="btn-show-crud active">Apostas</button>
			<button type="button" @click="showViewCrudUser('Deposits', 1)" class="btn-show-crud">Depositos</button>
		</div>

		<div v-if="viewCrudUser == 'BetsPurchase'">
			<BetsPurchase />
		</div>

		<div v-if="viewCrudUser == 'Deposits'">
			<Deposits />
		</div>

	</div>
</template>

<script>
	import BetsPurchase from './BetsPurchase/Index.vue';
	import Deposits from './Deposits/Index.vue';

	export default {
		name: 'Historic',
		components: {
			BetsPurchase,
			Deposits
		},
		data() {
		    return {
		    	viewCrudUser: 'BetsPurchase',
		    };
		},
		methods: {
			showViewCrudUser(view, index){
				this.viewCrudUser = view;
				this.changeActiveButton(index);
			},

			changeActiveButton(id){
				let elements = document.getElementsByClassName('btn-show-crud');
				for(let i = 0; i < elements.length; i++){
					if(elements[i].classList.contains('active')){
						elements[i].classList.remove('active')
					}
				}
				elements[id].classList.add('active');
			}

		}
	}
</script>

<style scoped>
	div.area-profile {padding:10px;}
	div.area-links-crud-user {float:left; width:100%;}
	div.area-links-crud-user button {border:none; background-color:#666666; font-size:14px; color:#e8e8e8; padding:4px 8px; margin-right:5px; border-radius:3px;}
	.active {
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
	}
</style>