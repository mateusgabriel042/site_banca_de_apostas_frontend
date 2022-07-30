<template>
	<div class="area-bets-match">
		<div class="area-odds">
			<label class="teste">Resultado Final</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Vila Nova GO <span class="color-odd">3.10</span></div>
				<div class="col-list-4 col-odd">Empate <span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd">Bahia BA <span class="color-odd">2.55</span></div>
			</div>
		</div>
		<div class="area-odds">
			<label class="teste">1º Gol</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Vila Nova GO <span class="color-odd">3.10</span></div>
				<div class="col-list-4 col-odd">Nenhum <span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd">Bahia BA <span class="color-odd">2.55</span></div>
			</div>
		</div>
		<div class="area-odds">
			<label class="teste">Dupla Hipótese</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Vila Nova GO ou Empate<span class="color-odd">3.10</span></div>
				<div class="col-list-4 col-odd">Vila Nova GO ou Bahia BA <span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd">Empate ou Bahia BA <span class="color-odd">2.55</span></div>
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
				<div class="col-list-4 col-odd center bg-gray-1">0.5</div>
				<div class="col-list-4 col-odd center bg-gray-2">-</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">1.5</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">2.5</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">3.5</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center bg-gray-1">4.5</div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.81</span></div>
				<div class="col-list-4 col-odd center bg-gray-2"><span class="color-odd">2.55</span></div>
			</div>
		</div>
		<div class="area-odds">
			<label class="teste">Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Resultado Final e Para Ambos os Times Marcarem</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Guarani SP e Sim <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">Guarani SP e Não <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd">Empate e Sim <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd">Empate e Não <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">Cruzeiro MG e Sim <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd">Cruzeiro MG e Não <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Placar Exato</label>
			<div class="odds">
				<div class="col-list-4 col-odd center">1:0 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">0:0 <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">0:1 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">2:0 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">1:1 <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">0:2 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">3:0 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">2:2 <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">2:1 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">4:0 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">3:3 <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">0:3 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">2:1 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">4:4 <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">1:3 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">3:1 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">-</div>
				<div class="col-list-4 col-odd center">2:3 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">4:1 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">-</div>
				<div class="col-list-4 col-odd center">0:4 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">3:2 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">-</div>
				<div class="col-list-4 col-odd center">1:4 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">4:2 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">-</div>
				<div class="col-list-4 col-odd center">2:4 <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">4:3 <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">-</div>
				<div class="col-list-4 col-odd center">3:4 <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Intervalo / Final do Jogo</label>
			<div class="odds">
				<div class="col-list-4 col-odd center">Red Bull Bragantino SP - Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">Red Bull Bragantino SP - Empate <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">Red Bull Bragantino SP - Avaí SC <span class="color-odd">1.70</span></div>
			</div>
			<div class="odds">
				<div class="col-list-4 col-odd center">Empate - Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">Empate - Empate <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">Empate - Avaí SC <span class="color-odd">1.70</span></div>
			</div>

			<div class="odds">
				<div class="col-list-4 col-odd center">Avaí SC - Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd center">Avaí SC - Empate <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd center">Avaí SC - Avaí SC <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Empate Anula Aposta</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Avaí SC <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Último Gol</label>
			<div class="odds">
				<div class="col-list-4 col-odd">Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-4 col-odd">Nenhum <span class="color-odd">1.70</span></div>
				<div class="col-list-4 col-odd">Avaí SC <span class="color-odd">1.70</span></div>
			</div>
		</div>

		<div class="area-odds">
			<label class="teste">Avaí Anula Aposta</label>
			<div class="odds">
				<div class="col-list-6 col-odd">Red Bull Bragantino SP <span class="color-odd">2.00</span></div>
				<div class="col-list-6 col-odd">Empate <span class="color-odd">1.70</span></div>
			</div>
		</div>

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
				<label class="teste">1º Marcador</label>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
			</div>

			<div class="area-odds">
				<label class="teste">Último Marcador</label>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
			</div>

			<div class="area-odds">
				<label class="teste">Marcador a Qualquer Altura (Tempo Regulamentar)</label>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
				</div>
				<div class="odds">
					<div class="col-list-4 col-odd">Alessandro <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Arthur <span class="color-odd">2.00</span></div>
					<div class="col-list-4 col-odd">Gonçalves <span class="color-odd">2.00</span></div>
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

			
		</div>

	</div>
</template>