<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">Escanteios</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsCorners.corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.corners[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.corners[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios no 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsCorners.corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_half_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_half_corners[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_half_corners[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Aposta comparativa</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCorners.corner_match_bet[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsCorners.corner_match_bet[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCorners.corner_match_bet[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap</label>
			<div class="odds">
				<div class="col-list-4 center col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-4 center col-odd">Empate</div>
				<div class="col-list-4 center col-odd">{{matche?.away?.name}}</div>
				
			</div>
			<div class="odds">
				<div class="col-list-4 center col-odd">{{oddsCorners.corner_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.corner_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 center col-odd">{{oddsCorners.corner_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.corner_handicap[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 center col-odd">{{oddsCorners.corner_handicap[2]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.corner_handicap[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap asiatico</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners.asian_handicap_corners[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.asian_handicap_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners.asian_handicap_corners[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsCorners.asian_handicap_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Total de escanteios asiaticos</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCorners.asian_total_corners[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.asian_total_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.asian_total_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios handicap asiatico 1º tempo</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners._1st_half_asian_corners[0]?.name}} <span class="color-odd">{{parseFloat(oddsCorners._1st_half_asian_corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsCorners._1st_half_asian_corners[1]?.name}} <span class="color-odd">{{parseFloat(oddsCorners._1st_half_asian_corners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Primeiro escanteio</label>
			<div class="odds">
				<div class="col-list-6 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCorners.first_match_corner[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCorners.first_match_corner[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Ultimo escanteio</label>
			<div class="odds">
				<div class="col-list-6 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsCorners.last_match_corner[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsCorners.last_match_corner[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Multicantos</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCorners.multicorners[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.multicorners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.multicorners[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Primeiros 10 minutos (00:00 - 19:59)</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsCorners.first_10_minutes_[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_10_minutes_[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsCorners.first_10_minutes_[1]?.odds).toFixed(2)}}</span></div>
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
	    		oddsCorners: {
					corners: [],
					total_corners: [],//a fazer
					alternative_corners: [],//a fazer
					corners_2_way: [],//a fazer
					first_half_corners: [], 
					corner_match_bet: [],
					corner_handicap: [],
					asian_handicap_corners: [],
					asian_total_corners: [],
					_1st_half_asian_corners: [],
					time_of_first_corner: [],//a fazer
					team_corners: [],//a fazer
					corners_race: [],//a fazer
					first_match_corner: [],
					last_match_corner: [],
					multicorners: [],
					first_10_minutes_: [],
					
	    		},
	    		
	    	}
	    },

	    mounted() {
	    	this.$store.dispatch('bets/setLoading', true);
			BetService.getMatcheOdds(this.$route.params.idLeague, this.$route.params.idMache).then(
				(response) => {
					this.matche = response.data.match;
					let dataOddsCorners = response.data.odds.corners.sp;
					this.oddsCorners.corners = dataOddsCorners.corners.odds;
					this.oddsCorners.total_corners = dataOddsCorners.total_corners.odds;
					this.oddsCorners.alternative_corners = dataOddsCorners.alternative_corners.odds;
					this.oddsCorners.corners_2_way = dataOddsCorners.corners_2_way.odds;
					this.oddsCorners.first_half_corners = dataOddsCorners.first_half_corners.odds;
					this.oddsCorners.corner_match_bet = dataOddsCorners.corner_match_bet.odds;
					this.oddsCorners.corner_handicap = dataOddsCorners.corner_handicap.odds;
					this.oddsCorners.asian_handicap_corners = dataOddsCorners.asian_handicap_corners.odds;
					this.oddsCorners.asian_total_corners = dataOddsCorners.asian_total_corners.odds;
					this.oddsCorners._1st_half_asian_corners = dataOddsCorners['1st_half_asian_corners'].odds;
					this.oddsCorners.time_of_first_corner = dataOddsCorners.time_of_first_corner.odds;
					this.oddsCorners.team_corners = dataOddsCorners.team_corners.odds;
					this.oddsCorners.corners_race = dataOddsCorners.corners_race.odds;
					this.oddsCorners.first_match_corner = dataOddsCorners.first_match_corner.odds;
					this.oddsCorners.last_match_corner = dataOddsCorners.last_match_corner.odds;
					this.oddsCorners.multicorners = dataOddsCorners.multicorners.odds;
					this.oddsCorners.first_10_minutes_ = dataOddsCorners['first_10_minutes_(00:00_09:59)'].odds;
					
					this.$store.dispatch('bets/setLoading', false);
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>