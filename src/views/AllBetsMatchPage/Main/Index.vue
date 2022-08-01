<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">Resultado Final</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.full_time_result[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">{{parseFloat(oddsMain.full_time_result[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.full_time_result[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>
		
		<div class="area-odds">
			<label class="teste">Dupla Hipótese</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} ou Empate<span class="color-odd">{{parseFloat(oddsMain.double_chance[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">Empate ou {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.double_chance[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd">{{matche?.home?.name}} ou {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.double_chance[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>
		<div class="area-odds">
			<label class="teste">Total</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsMain.goals_over_under[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.goals_over_under[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.goals_over_under[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">{{parseFloat(oddsMain.both_teams_to_score[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">{{parseFloat(oddsMain.both_teams_to_score[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Resultado Final e Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-4 col-odd">{{matche?.home?.name}} e Sim
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[0]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-4 col-odd">{{matche?.home?.name}} e Não
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[3]?.odds).toFixed(2)}}
					</span>
				</div>

				<div class="col-list-4 col-odd">Empate e Sim
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[2]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">Empate e Não
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[5]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} e Sim
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[1]?.odds).toFixed(2)}}
					</span>
				</div>
				<div class="col-list-4 col-odd">{{matche?.away?.name}} e Não
					<span class="color-odd">
						{{parseFloat(oddsMain.result_both_teams_to_score[4]?.odds).toFixed(2)}}
					</span>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Placar Exato</label>
			<div class="odds">
				<div class="col-list-4 col-odd center" v-for="(item, index) in oddsMain.correct_score" :key="index">
					{{item?.name}}
					<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Intervalo / Final do Jogo</label>
			<div class="odds">
				<div class="col-list-4 col-odd center">
					{{matche?.home?.name}} - {{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[0]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center">
					{{matche?.home?.name}} - Empate <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[1]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center">
					{{matche?.home?.name}} - {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[2]?.odds).toFixed(2)}}</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd center">
					Empate - {{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[3]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center">
					Empate - Empate <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[4]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center">
					Empate - {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[5]?.odds).toFixed(2)}}</span>
				</div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd center">
					{{matche?.away?.name}} - {{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[6]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center">
					{{matche?.away?.name}} - Empate <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[7]?.odds).toFixed(2)}}</span>
				</div>
				<div class="col-list-4 col-odd center">
					{{matche?.away?.name}} - {{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.half_time_full_time[8]?.odds).toFixed(2)}}</span>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Empate Anula Aposta</label>
			<div class="odds">
				<div class="col-list-6 col-odd">{{matche?.home?.name}} <span class="color-odd">{{parseFloat(oddsMain.draw_no_bet[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-6 col-odd">{{matche?.away?.name}} <span class="color-odd">{{parseFloat(oddsMain.draw_no_bet[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">1º Marcador</label>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.goalscorers" :key="index">
					<div class="col-list-4 col-odd" v-if="item?.header == 'First'">
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Último Marcador</label>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.goalscorers" :key="index">
					<div class="col-list-4 col-odd" v-if="item?.header == 'Last'">
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Marcador a Qualquer Altura (Tempo Regulamentar)</label>
			<div class="odds">
				<div v-for="(item, index) in oddsMain.goalscorers" :key="index">
					<div class="col-list-4 col-odd" v-if="item?.header == 'Anytime'">
						{{item?.name}}
						<span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span>
					</div>
				</div>
			</div>
		</div>


		<div class="area-odds">
			<label class="teste">Handicap Asiático</label>
			<div class="odds">
				<div class="col-list-3 col-odd">{{matche?.home?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsMain.asian_handicap[0]?.handicap}} <span class="color-odd">{{parseFloat(oddsMain.asian_handicap[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd">{{matche?.away?.name}}</div>
				<div class="col-list-3 col-odd">{{oddsMain.asian_handicap[1]?.handicap}} <span class="color-odd">{{parseFloat(oddsMain.asian_handicap[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Gols +/-</label>
			<div class="odds">
				<div class="col-list-4 col-lb"></div>
				<div class="col-list-4 col-lb">Mais de</div>
				<div class="col-list-4 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">{{oddsMain.goal_line[0]?.name}}</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.goal_line[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.goal_line[1]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Escanteios</label>
			<div class="odds">
				<div class="col-list-3 col-lb"></div>
				<div class="col-list-3 col-lb">Mais de</div>
				<div class="col-list-3 col-lb">Exato</div>
				<div class="col-list-3 col-lb">Menos de</div>
			</div>
			
			<div class="odds">
				<div class="col-list-3 col-odd center bg-gray-1">{{oddsMain.corners[0]?.name}}</div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.corners[0]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.corners[1]?.odds).toFixed(2)}}</span></div>
				<div class="col-list-3 col-odd center bg-gray-2"><span class="color-odd">{{parseFloat(oddsMain.corners[2]?.odds).toFixed(2)}}</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Outras apostas</label>
			<div class="odds" v-for="(item, index) in oddsMain.bet_boost" :key="index">
				<div class="col-list-6 col-odd">{{item?.name}}</div>
				<div class="col-list-6 col-odd center bg-gray-1"><span class="color-odd">{{parseFloat(item?.odds).toFixed(2)}}</span></div>
			</div>
		</div>



		<!--

		<div class="area-odds">
			<label class="teste">1º Gol</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Vila Nova GO <span class="color-odd">3.10</span></div>
				<div class="col-list-4 col-odd">Nenhum <span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd">Bahia BA <span class="color-odd">2.55</span></div>
			</div>
		</div>
		<div class="area-odds">
			<label class="teste">Último Gol</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">Nenhum <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd">Avaí SC <span class="color-odd">1.70</span></div>
			</div>
		</div>-->

		<!--
		<div class="area-odds">
			<label class="teste">Avaí Anula Aposta</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Empate <span class="color-odd">1.70</span></div>
			</div>
		</div>-->

		<!--
		<div class="area-odds">
			<label class="teste">Total por Equipe</label>
			<div class="odds">
				<div class="col-list-6 col-lb center">Red Bul Bragantino SP</div>
				<div class="col-list-6 col-lb center">Avaí SC</div>
			</div>
			<div class="odds">
				<div class="col-list-2 col-lb">-</div>
				<div class="col-list-2 col-lb">Mais de</div>
				<div class="col-list-2 col-lb">Menos de</div>
				<div class="col-list-2 col-lb">-</div>
				<div class="col-list-2 col-lb">Mais de</div>
				<div class="col-list-2 col-lb">Menos de</div>
			</div>
			<div class="odds">
				<div class="col-list-2 col-odd center bg-gray-1">0.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-1">0.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-2 col-odd center bg-gray-1">1.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-1">1.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-2 col-odd center bg-gray-1">2.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-1">2.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-2 col-odd center bg-gray-1">3.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-1">3.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-2 col-odd center bg-gray-1">4.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
				<div class="col-list-2 col-odd center bg-gray-1">4.5</div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-2 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Ímpar/Par</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Par <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Ímpar <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Red Bull Bragantino Ímpar/Par</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Par <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Ímpar <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Avaí SC Ímpar/Par</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Par <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Ímpar <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Qual equipe vai marcar</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Nenhum <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Apenas Red bull SP <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Apenas Avaí SC <span class="color-odd">1.70</span></div>
				<div class="col-list-6 col-odd">Ambas as equipes <span class="color-odd">2.00</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Baliza Inviolada po Equipe</label>
			<div class="odds">
				<div class="col-list-6 col-lb center">Red Bul Bragantino SP</div>
				<div class="col-list-6 col-lb center">Avaí SC</div>
			</div>
			<div class="odds">
				<div class="col-list-3 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-3 col-odd">Não <span class="color-odd">2.00</span></div>
				<div class="col-list-3 col-odd">Sim <span class="color-odd">1.70</span></div>
				<div class="col-list-3 col-odd">Não <span class="color-odd">2.00</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Red bull para vencer sem sofre gol</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Avaí SC para vencer sem sofre gol</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Total para ambos os times marcarem</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Mais de 2.5 e Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Menos de 2.5 e Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Mais de 2.5 e Não <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Menos de 2.5 e Não <span class="color-odd">2.00</span></div>
			</div>
		</div>

		

		<div class="area-odds">
			<label class="teste">Quando Será Marcado o 1º Gol (Intervalo de 15 Minutos)</label>
			<div class="odds">
				<div class="col-list-4 col-odd">1-15 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">16-30 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">31-45 <span class="color-odd">2.00</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd">46-60 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">61-75 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">76-90 <span class="color-odd">2.00</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">Nenhum <span class="color-odd">2.00</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Quando Será Marcado o 1º Gol (Intervalo de 10 Minutos)</label>
			<div class="odds">
				<div class="col-list-4 col-odd">1-10 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">11-20 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">21-30 <span class="color-odd">2.00</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd">31-40 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">41-50 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">51-60 <span class="color-odd">2.00</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">31-40 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">41-50 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">51-60 <span class="color-odd">2.00</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">61-70 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">71-80 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">81-90 <span class="color-odd">2.00</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">Nenhum <span class="color-odd">2.00</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">10 minutos - Resultado do Jogo</label>
			<div class="odds">
				<div class="col-list-6 col-lb center bg-gray-2"> - </div>
				<div class="col-list-6 col-lb center bg-gray-2">10</div>
			</div>
			<div class="odds">
				<div class="col-list-6 col-odd-lb bg-gray-2">Red bull Bragantino SP</div>
				<div class="col-list-6 col-odd center"><span class="color-odd">2.00</span></div>
			</div>
			<div class="odds">
				<div class="col-list-6 col-odd-lb bg-gray-2">Empate</div>
				<div class="col-list-6 col-odd center"><span class="color-odd">2.00</span></div>
			</div>
			<div class="odds">
				<div class="col-list-6 col-odd-lb bg-gray-2">Avaí SC</div>
				<div class="col-list-6 col-odd center"><span class="color-odd">2.00</span></div>
			</div>
			
		</div>

		<div class="area-odds">
			<label class="teste">Expulsão</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Red bull bragantino SP Expulsão</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Avaí SC Expulsão</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">1º Gol e Resultado Final</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Red bull bragantino SP Gol e Red bull bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">Red bull bragantino SP Gol e Empate <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd">Red bull bragantino SP Gol e Avaí SC <span class="color-odd">1.70</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">Avaí SC Gol e Red bull bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">Avaí SC Gol e Empate <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd">Avaí SC e Avaí SC <span class="color-odd">1.70</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd">Sem Gols <span class="color-odd">2.00</span></div>
			</div>
		</div>
		-->

	</div>
</template>

<script type="text/javascript">
	import BetService from "../../../services/bet.service";

	export default {

	    data(){
	    	return {
	    		matche: [],
	    		oddsMain: {
	    			full_time_result: [],
	    			//full_time_result_enhanced_prices: [],
					double_chance: [],
					goals_over_under: [],
					both_teams_to_score: [],
					result_both_teams_to_score: [],
					correct_score: [],
					half_time_full_time: [],
					draw_no_bet: [],
					goalscorers: [],
					asian_handicap: [],
					goal_line: [],
					corners: [],
					handicap_result: [],
					alternative_handicap_result: [],
					bet_boost: [],
	    		},
	    		
	    	}
	    },

	    mounted() {
			BetService.getMatcheOdds(this.$route.params.idLeague, this.$route.params.idMache).then(
				(response) => {
					this.matche = response.data.match;
					let dataOddsMain = response.data.odds.main.sp;
				    
				    this.oddsMain.full_time_result = dataOddsMain.full_time_result.odds;
					this.oddsMain.double_chance = dataOddsMain.double_chance.odds;
					this.oddsMain.goals_over_under = dataOddsMain.goals_over_under.odds;
					this.oddsMain.both_teams_to_score = dataOddsMain.both_teams_to_score.odds;
					this.oddsMain.result_both_teams_to_score = dataOddsMain.result_both_teams_to_score.odds;
					this.oddsMain.correct_score = dataOddsMain.correct_score.odds;
					this.oddsMain.half_time_full_time = dataOddsMain.half_time_full_time.odds;
					this.oddsMain.draw_no_bet = dataOddsMain.draw_no_bet.odds;
					this.oddsMain.goalscorers = dataOddsMain.goalscorers.odds;
					this.oddsMain.asian_handicap = dataOddsMain.asian_handicap.odds;
					this.oddsMain.goal_line = dataOddsMain.goal_line.odds;
					this.oddsMain.corners = dataOddsMain.corners.odds;
					this.oddsMain.bet_boost = dataOddsMain.bet_boost.odds;

					//this.oddsMain.full_time_result_enhanced_prices = dataOddsMain.full_time_result_–_enhanced_prices.odds;
				    //this.oddsMain.handicap_result = dataOddsMain.handicap_result.odds;
					//this.oddsMain.alternative_handicap_result = dataOddsMain.alternative_handicap_result.odds;
				},
				(error) => {
				    this.content = 'algum erro aconteceu'
				}
			);
		},
	}
</script>