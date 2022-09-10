<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">Resultado Final aos 10 primeiros minutos</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMinutes._10_minute_result[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsMinutes._10_minute_result[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMinutes._10_minute_result[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>



		<div class="area-odds">
			<label class="teste">Primeiros 10 minutos (00:00 - 09:59)</label>
			<div class="odds">
				<div class="col-list-6 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">Gols</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[0]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[0]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[3]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[3]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">Escanteios</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[1]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[1]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[4]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[4]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-6 col-odd center bg-gray-1">Cartões</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[2]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[2]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-3 col-odd center bg-gray-2">
					{{oddsMinutes.first_10_minutes[5]?.handicap}}
					<span class="color-odd">
						{{parseFloat(oddsMinutes.first_10_minutes[5]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>
		</div>
		

	</div>
</template>

<script type="text/javascript">
	import BetService from "../../../services/bet.service";

	export default {

	    data(){
	    	return {
	    		matche: [],
	    		oddsMinutes: {
	    			_10_minute_result: [],
					first_10_minutes: [],
	    		},
	    		
	    	}
	    },

	    mounted() {
	    	this.$store.dispatch('bets/setLoading', true);
			BetService.getMatcheOdds(this.$route.params.idLeague, this.$route.params.idMache).then(
				(response) => {
					this.matche = response.data.match;
					let dataOddsMinutes = response.data.odds.minutes.sp;
					this.oddsMinutes._10_minute_result = dataOddsMinutes['10_minute_result'].odds;
					this.oddsMinutes.first_10_minutes = dataOddsMinutes['first_10_minutes_(00:00_09:59)'].odds;
					
					this.$store.dispatch('bets/setLoading', false);
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>