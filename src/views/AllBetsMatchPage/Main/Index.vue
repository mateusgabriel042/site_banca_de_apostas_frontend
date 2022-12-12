<template>
	<div class="area-bets-match">
		
		<TripleOdds
			betNameLabel="Resultado Final"
			:odds="odds.full_time_result"
			:labelOdd1="matcheOdds?.team_home_name"
			labelOdd2="Empate"
			:labelOdd3="matcheOdds?.team_away_name"
		/>

		<TripleOdds
			betNameLabel="Dupla Hipótese"
			:odds="odds.double_chance"
			:labelOdd1="`${matcheOdds?.team_home_name} ou Empate`"
			:labelOdd2="`Empate ou ${matcheOdds?.team_away_name}`"
			:labelOdd3="`${matcheOdds?.team_home_name} ou ${matcheOdds?.team_away_name}`"
		/>






		
		<!--

		<div class="area-odds" v-if="oddsMain.goals_over_under !== undefined">
			<label class="teste">Total</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsMain.goals_over_under[0]?.name}}</div>
				
				<div class="col-list-4 col-odd center bg-gray-2"
					:class="containBet('00007', betsList)"
					@click="(e) => addBetList(
						'00007', 'goals_over_under', oddsMain.goals_over_under[0]?.name+'-over', oddsMain.goals_over_under[0]?.odds, `Acima de ${oddsMain?.goals_over_under?.[0]?.name}`, 'Total'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.goals_over_under[0]?.odds).toFixed(2)}}</span>
				</div>
				
				<div class="col-list-4 col-odd center bg-gray-2"
					:class="containBet('00008', betsList)"
					@click="(e) => addBetList(
						'00008', 'goals_over_under', oddsMain.goals_over_under[0]?.name+'-under', oddsMain.goals_over_under[1]?.odds, `Abaixo de ${oddsMain?.goals_over_under?.[0]?.name}`, 'Total'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.goals_over_under[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.both_teams_to_score !== undefined">
			<label class="teste">Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-6 col-odd"
					:class="containBet('00009', betsList)"
					@click="(e) => addBetList(
						'00009', 'both_teams_to_score', 'yes', oddsMain.both_teams_to_score[0]?.odds, `Sim`, 'Para Ambos os Times Marcarem'
					)"
				>
					Sim 
					<span class="color-odd">{{parseFloat(oddsMain.both_teams_to_score[0]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-6 col-odd"
					:class="containBet('00010', betsList)"
					@click="(e) => addBetList(
						'00010', 'both_teams_to_score', 'no', oddsMain.both_teams_to_score[1]?.odds, `Não`, 'Para Ambos os Times Marcarem'
					)"
				>
					Não 
					<span class="color-odd">{{parseFloat(oddsMain.both_teams_to_score[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.result_both_teams_to_score !== undefined">
			<label class="teste">Resultado Final e Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-4 col-odd"
					:class="containBet('00011', betsList)"
					@click="(e) => addBetList(
						'00011', 'result_both_teams_to_score', 'home-yes', oddsMain.result_both_teams_to_score[0]?.odds, `${matche?.home?.name} e Sim`, 'Resultado Final e Para Ambos os Times Marcarem'
					)"
				>
					{{matche?.home?.name}} e Sim
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[0]?.odds).toFixed(2)}}
					</span>
				</div>

				<div class="col-list-4 col-odd"
					:class="containBet('00012', betsList)"
					@click="(e) => addBetList(
						'00012', 'result_both_teams_to_score', 'home-no', oddsMain.result_both_teams_to_score[3]?.odds, `${matche?.home?.name} e Não`, 'Resultado Final e Para Ambos os Times Marcarem'
					)"
				>
					{{matche?.home?.name}} e Não
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[3]?.odds).toFixed(2)}}
					</span>
				</div>

				<div class="col-list-4 col-odd"
					:class="containBet('00013', betsList)"
					@click="(e) => addBetList(
						'00013', 'result_both_teams_to_score', 'draw-yes', oddsMain.result_both_teams_to_score[2]?.odds, `Empate e Sim`, 'Resultado Final e Para Ambos os Times Marcarem'
					)"
				>
					Empate e Sim
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[2]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd"
					:class="containBet('00014', betsList)"
					@click="(e) => addBetList(
						'00014', 'result_both_teams_to_score', 'draw-no', oddsMain.result_both_teams_to_score[5]?.odds, `Empate e Não`, 'Resultado Final e Para Ambos os Times Marcarem'
					)"
				>
					Empate e Não
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[5]?.odds).toFixed(2)}}
					</span>
				</div>

				<div class="col-list-4 col-odd"
					:class="containBet('00015', betsList)"
					@click="(e) => addBetList(
						'00015', 'result_both_teams_to_score', 'away-yes', oddsMain.result_both_teams_to_score[1]?.odds, `${matche?.away?.name} e Sim`, 'Resultado Final e Para Ambos os Times Marcarem'
					)"
				>
					{{matche?.away?.name}} e Sim
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[1]?.odds).toFixed(2)}}
					</span>
				</div>

				<div class="col-list-4 col-odd"
					:class="containBet('00016', betsList)"
					@click="(e) => addBetList(
						'00016', 'result_both_teams_to_score', 'away-no', oddsMain.result_both_teams_to_score[4]?.odds, `${matche?.away?.name} e Não`, 'Resultado Final e Para Ambos os Times Marcarem'
					)"
				>
					{{matche?.away?.name}} e Não
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[4]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.correct_score !== undefined">
			<label class="teste">Placar Exato</label>
			<div class="odds">
				<div class="col-list-4 col-lb center">{{matche?.home?.name}}</div>
			</div>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.correct_score" :key="index">
					<div class="col-list-4 col-odd center"
						:class="containBet(`00017-${index}`, betsList)"
						@click="(e) => addBetList(
							`00017-${index}`, 'correct_score', item?.name+'-home', item?.odds, `${item?.name}`, 'Placar Exato'
						)"
						v-if="item?.header == '1'"
					>
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-lb center">Empate</div>
			</div>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.correct_score" :key="index">
					<div class="col-list-4 col-odd center"
						:class="containBet(`00018-${index}`, betsList)"
						@click="(e) => addBetList(
							`00018-${index}`, 'correct_score', item?.name+'-draw', item?.odds, `${item?.name}`, 'Placar Exato'
						)"
						v-if="item?.header == 'Draw'"
					>
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-lb center">{{matche?.away?.name}}</div>
			</div>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.correct_score" :key="index">
					<div class="col-list-4 col-odd center"
						:class="containBet(`00019-${index}`, betsList)"
						@click="(e) => addBetList(
							`00019-${index}`, 'correct_score', item?.name+'-away', item?.odds, `${item?.name}`, 'Placar Exato'
						)"
						v-if="item?.header == '2'"
					>
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.half_time_full_time !== undefined">
			<label class="teste">Intervalo / Final do Jogo</label>
			<div class="odds">
				<div class="col-list-4 col-odd center"
					:class="containBet(`00020`, betsList)"
					@click="(e) => addBetList(
						'00020', 'half_time_full_time', 'home-home', oddsMain.half_time_full_time[0]?.odds, `${matche?.home?.name} e ${matche?.home?.name}`, 'Intervalo / Final do Jogo'
					)"
				>
					{{matche?.home?.name}} - {{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[0]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-4 col-odd center"
					:class="containBet(`00021`, betsList)"
					@click="(e) => addBetList(
						'00021', 'half_time_full_time', 'home-draw', oddsMain.half_time_full_time[1]?.odds, `${matche?.home?.name} e Empate`, 'Intervalo / Final do Jogo'
					)"
				>
					{{matche?.home?.name}} - Empate <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[1]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-4 col-odd center"
					:class="containBet(`00022`, betsList)"
					@click="(e) => addBetList(
						'00022', 'half_time_full_time', 'home-away', oddsMain.half_time_full_time[2]?.odds, `${matche?.home?.name} e ${matche?.away?.name}`, 'Intervalo / Final do Jogo'
					)"
				>
					{{matche?.home?.name}} - {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[2]?.odds).toFixed(2)}}</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd center"
					:class="containBet(`00023`, betsList)"
					@click="(e) => addBetList(
						'00023', 'half_time_full_time', 'draw-home', oddsMain.half_time_full_time[3]?.odds, `Empate e ${matche?.home?.name}`, 'Intervalo / Final do Jogo'
					)"
				>
					Empate - {{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[3]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center"
					:class="containBet(`00024`, betsList)"
					@click="(e) => addBetList(
						'00024', 'half_time_full_time', 'draw-draw', oddsMain.half_time_full_time[4]?.odds, `Empate e Empate`, 'Intervalo / Final do Jogo'
					)"
				>
					Empate - Empate <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[4]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center"
					:class="containBet(`00025`, betsList)"
					@click="(e) => addBetList(
						'00025', 'half_time_full_time', 'draw-away', oddsMain.half_time_full_time[5]?.odds, `Empate e ${matche?.away?.name}`, 'Intervalo / Final do Jogo'
					)"
				>
					Empate - {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[5]?.odds).toFixed(2)}}</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd center"
					:class="containBet(`00026`, betsList)"
					@click="(e) => addBetList(
						'00026', 'half_time_full_time', 'away-home', oddsMain.half_time_full_time[6]?.odds, `${matche?.away?.name} e ${matche?.home?.name}`, 'Intervalo / Final do Jogo'
					)"
				>
					{{matche?.away?.name}} - {{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[6]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center"
					:class="containBet(`00027`, betsList)"
					@click="(e) => addBetList(
						'00027', 'half_time_full_time', 'away-draw', oddsMain.half_time_full_time[7]?.odds, `${matche?.away?.name} e Empate`, 'Intervalo / Final do Jogo'
					)"
				>
					{{matche?.away?.name}} - Empate <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[7]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center"
					:class="containBet(`00028`, betsList)"
					@click="(e) => addBetList(
						'00028', 'half_time_full_time', 'away-away', oddsMain.half_time_full_time[8]?.odds, `${matche?.away?.name} e ${matche?.away?.name}`, 'Intervalo / Final do Jogo'
					)"
				>
					{{matche?.away?.name}} - {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[8]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.draw_no_bet !== undefined">
			<label class="teste">Empate Anula Aposta</label>
			<div class="odds">
				<div class="col-list-6 col-odd"
					:class="containBet(`00029`, betsList)"
					@click="(e) => addBetList(
						'00029', 'draw_no_bet', 'home', oddsMain.draw_no_bet[0]?.odds, `${matche?.home?.name}`, 'Empate Anula Aposta'
					)"
				>
					{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.draw_no_bet[0]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-6 col-odd"
					:class="containBet(`00030`, betsList)"
					@click="(e) => addBetList(
						'00030', 'draw_no_bet', 'away', oddsMain.draw_no_bet[1]?.odds, `${matche?.away?.name}`, 'Empate Anula Aposta'
					)"
				>
					{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.draw_no_bet[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.goalscorers !== undefined">
			<label class="teste">1º Marcador</label>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.goalscorers" :key="index">
					<div class="col-list-4 col-odd" v-if="item?.header == 'First'"
						:class="containBet(`00031-${index}`, betsList)"
						@click="(e) => addBetList(
							`00031-${index}`, 'goalscorers', `first-${item?.name}`, item?.odds, `${item?.name}`, '1º Marcador'
						)"
					>
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.goalscorers !== undefined">
			<label class="teste">Último Marcador</label>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.goalscorers" :key="index">
					<div class="col-list-4 col-odd" v-if="item?.header == 'Last'"
						:class="containBet(`00032-${index}`, betsList)"
						@click="(e) => addBetList(
							`00032-${index}`, 'goalscorers', `last-${item?.name}`, item?.odds, `${item?.name}`, 'Ultimo Marcador'
						)"
					>
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.goalscorers !== undefined">
			<label class="teste">Marcador a Qualquer Altura (Tempo Regulamentar)</label>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.goalscorers" :key="index">
					<div class="col-list-4 col-odd" v-if="item?.header == 'Anytime'"
						:class="containBet(`00033-${index}`, betsList)"
						@click="(e) => addBetList(
							`00033-${index}`, 'goalscorers', `anytime-${item?.name}`, item?.odds, `${item?.name}`, 'Marcador a Qualquer Altura (Tempo Regulamentar)'
						)"
					>
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.asian_handicap !== undefined">
			<label class="teste">Handicap Asiático</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd"
					:class="containBet(`00034`, betsList)"
					@click="(e) => addBetList(
						'00034', 'asian_handicap', 'away', oddsMain.asian_handicap[0]?.odds, `${oddsMain.asian_handicap[0]?.handicap}`, 'Handicap Asiático'
					)"
				>
					{{oddsMain.asian_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsMain.asian_handicap[0]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd"
					:class="containBet(`00035`, betsList)"
					@click="(e) => addBetList(
						'00035', 'asian_handicap', 'away', oddsMain.asian_handicap[1]?.odds, `${oddsMain.asian_handicap[1]?.handicap}`, 'Handicap Asiático'
					)"
				>
					{{oddsMain.asian_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsMain.asian_handicap[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.goal_line !== undefined">
			<label class="teste">Gols +/-</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsMain.goal_line[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"
					:class="containBet(`00036`, betsList)"
					@click="(e) => addBetList(
						'00036', 'goal_line', oddsMain.goal_line[0]?.name+'-over', oddsMain.goal_line[0]?.odds, `Mais de ${oddsMain?.goal_line?.[0]?.name}`, 'Gols +/-'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.goal_line[0]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-4 col-odd center bg-gray-2"
					:class="containBet(`00037`, betsList)"
					@click="(e) => addBetList(
						'00037', 'goal_line', oddsMain.goal_line[1]?.name+'-over', oddsMain.goal_line[1]?.odds, `Menos de ${oddsMain?.goal_line?.[1]?.name}`, 'Gols +/-'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.goal_line[1]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds" v-if="oddsMain.corners !== undefined">
			<label class="teste">Escanteios</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsMain.corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"
					:class="containBet(`00038`, betsList)"
					@click="(e) => addBetList(
						'00038', 'corners', oddsMain.corners[0]?.name+'-over', oddsMain.corners[0]?.odds, `Mais de ${oddsMain?.corners?.[0]?.name}`, 'Escanteios'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.corners[0]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-3 col-odd center bg-gray-2"
					:class="containBet(`00039`, betsList)"
					@click="(e) => addBetList(
						'00039', 'corners', oddsMain.corners[1]?.name+'-exact', oddsMain.corners[1]?.odds, `Etaxos ${oddsMain?.corners?.[1]?.name}`, 'Escanteios'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.corners[1]?.odds).toFixed(2)}}</span>
				</div>

				<div class="col-list-3 col-odd center bg-gray-2"
					:class="containBet(`00040`, betsList)"
					@click="(e) => addBetList(
						'00040', 'corners', oddsMain.corners[2]?.name+'-under', oddsMain.corners[2]?.odds, `Menos de ${oddsMain?.corners?.[2]?.name}`, 'Escanteios'
					)"
				>
					<span class="color-odd">{{parseFloat(oddsMain.corners[2]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>-->
	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import TripleOdds from '../LayoutsOdds/TripleOdds.vue'

	export default {
		components: {
		    TripleOdds,
	    },

		computed: {
	    	...mapGetters({
	        	odds: 'odds/oddsPrematcheMain',
	        	matcheOdds: 'odds/matcheOdds',
	    	})
	    },
	}
</script>