<template>
	<div class="area-bank">
		<div class="area-links-bank">
			<button type="button" @click="showViewBank('Deposit', 0)" class="btn-show-bank active">Depositar</button>
			<button type="button" @click="showViewBank('CashWithdrawal', 1)" class="btn-show-bank">Saque</button>
			<button type="button" @click="showViewBank('HistoricDeposit', 2)" class="btn-show-bank">Histórico Depósito</button>
			<button type="button" @click="showViewBank('HistoricCashWithdrawal', 3)" class="btn-show-bank">Histórico Saque</button>
		</div>

		<div v-if="viewBank == 'CashWithdrawal'">
			<CashWithdrawal />
		</div>

		<div v-if="viewBank == 'Deposit'">
			<Deposit />
		</div>

		<div v-if="viewBank == 'HistoricCashWithdrawal'">
			<HistoricCashWithdrawal />
		</div>

		<div v-if="viewBank == 'HistoricDeposit'">
			<HistoricDeposit />
		</div>
	</div>
</template>

<script>
	import CashWithdrawal from './CashWithdrawal/Index.vue';
	import Deposit from './Deposit/Index.vue';
	import HistoricCashWithdrawal from './HistoricCashWithdrawal/Index.vue';
	import HistoricDeposit from './HistoricDeposit/Index.vue';

	export default {
		name: 'Bank',
		components: {
			CashWithdrawal,
			Deposit,
			HistoricCashWithdrawal,
			HistoricDeposit,
		},
		data() {
		    return {
		    	viewBank: 'Deposit',
		    };
		},
		methods: {
			showViewBank(view, index){
				this.viewBank = view;
				this.changeActiveButton(index);
			},

			changeActiveButton(id){
				let elements = document.getElementsByClassName('btn-show-bank');
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
	div.area-bank {padding:10px;}
	div.area-links-bank {float:left; width:100%;}
	div.area-links-bank button {border:none; background-color:#666666; font-size:14px; color:#e8e8e8; padding:4px 8px; margin-right:5px; border-radius:3px;}
	.active {
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
	}
</style>