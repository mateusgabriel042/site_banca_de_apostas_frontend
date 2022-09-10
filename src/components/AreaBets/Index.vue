<template>
	<div class="area-bets">
		<label class="not-bets" v-if="betsList.length === 0">Ainda não há nenhuma aposta!</label>
		<div v-else>
			<ul>
				
				<li v-for="(item, index) in betsList" :key="index">
					<div class="row">
						<div class="col-1">
							<button class="btn-close-bet" @click="removeBetOfList(index)" type="button"><font-awesome-icon icon="fa-solid fa-close" /></button>
						</div>
						<div class="col-10">
							<div class="area-lb-odd">
								<label>{{item.info.labelBet}}</label>
								<label>{{parseFloat(item.info.odd).toFixed(2)}}</label>
							</div>
							<div class="area-label-indicator">
								<label>{{item.info.labelTypeBet}}</label>
							</div>
							<div class="area-label-game">
								<label>{{item.info.labelMatche}}</label>
							</div>
							<div class="area-input-bet">
								<input type="number" min="0" name="bet[]" @change="onChangeBet($event, index)" />
								<label>Retornos: {{parseFloat(item.priceBet*item.info.odd).toFixed(2)}}</label>
							</div>
						</div>
					</div>
				</li>

				<li v-if="betsList.length > 1">
					<div class="row">
						<div class="col-11">
							<div class="area-lb-odd">
								<label>Aposta Múltipla</label>
								<label>{{parseFloat(oddMultiple).toFixed(2)}}</label>
							</div>
							<div class="area-label-indicator">
								<label>{{betsList.length}} Múltiplas</label>
							</div>
							<div class="area-input-bet">
								<input type="number" min="0" name="betMultiples[]" @change="onChangeMultipleBet($event)" />
								<label>Retornos: {{(oddMultiple*priceTotalBets).toFixed(2)}}</label>
							</div>
						</div>
					</div>
				</li>
			</ul>

			<button class="btn-finish-bet" @click="purchaseBet()">Fazer Aposta <span>R$ {{priceTotalBets}}</span></button>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'AreaBets',
		data() {
		    return {
		    	
		    };
		},
		computed: {
	    	...mapGetters({
	        	betsList: 'bets/betsList',
	        	priceTotalBets: 'bets/priceTotalBets',
	        	oddMultiple: 'bets/oddMultiple'
	    	})
	    },
	    methods:{
	    	purchaseBet(){
	    		this.$store.dispatch({
					type: 'bets/purchaseBet'
				});
	    	},
	    	onChangeBet(event, index){
	    		this.$store.dispatch({
					type: 'bets/changePriceBet',
					indexBetList: index,
					value: event.target.value,
				});
	    	},
	    	onChangeMultipleBet(event){
	    		this.$store.dispatch({
					type: 'bets/changeMultiplePriceBet',
					value: event.target.value,
				});
	    	},
	    	removeBetOfList(index){
	    		this.$store.dispatch({
					type: 'bets/removeBetInList',
					index: index,
				});
	    	}
	    },
	    mounted(){
	    	
	    }
	}
</script>

<style scoped>
	div.area-bets {float:left; width:100%; background-color:#3d3d3d; height:calc(100vh - 128px);}
	label.not-bets {float:left; width:100%; color:#bbbbbb; font-size:13px; text-align:center;}

	ul {width:100%; padding:0pc; margin:0px; list-style:none;}
	ul li {float:left; width:100%; background-color:#c5c5c5; padding:5px 10px; padding-bottom:10px; border-top:1px solid #bbb;}
	ul li button.btn-close-bet {background-color:#999; color:#eee; border:none; border-radius:2px; font-size:9px; padding:1px 4px; padding-bottom:0px; }
	ul li div.area-lb-odd {width:100%; display:flex; flex-wrap:wrap; justify-content:space-between; color:#666;}
	ul li div.area-lb-odd label {font-size:13px; color:#555555; margin-top:5px;}
	ul li div.area-label-indicator {width:100%; display:flex; flex-wrap:wrap;}
	ul li div.area-label-indicator label {font-size:12px; color:#666666; margin-top:8px;}
	ul li div.area-label-game {width:100%; display:flex; flex-wrap:wrap;}
	ul li div.area-label-game label {font-size:12px; color:#666666; margin-top:0px;}
	ul li div.area-input-bet {width:100%; display:flex; flex-wrap:wrap; align-items:center; align-content:center; margin-top:6px;}
	ul li div.area-input-bet input {border:none; width:90px; padding:3px 5px; margin-right:10px; background-color:#e8e8e8; font-size:13px; color:#666666;}
	ul li div.area-input-bet label {font-size:12px; color:#666666; margin-top:0px;}
	button.btn-finish-bet {background-color:#282c30; color:#e8e8e8; border:none; width:100%; padding:13px 0px; font-size:13px;}
	button.btn-finish-bet span {color:#ff8800;}

</style>