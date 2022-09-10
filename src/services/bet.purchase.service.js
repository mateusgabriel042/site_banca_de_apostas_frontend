import api from './api';

class BetPurchaseService {
	async purchaseBet(bets, priceTotalBets) {

		let dataFinal = {
			bets: [],
			value_bet: priceTotalBets,
		};

		bets.forEach(function(item, index){
			dataFinal.bets.push({
				id_league: item.idLeague,
	            bet: item.bet,
	            bet_id: item.idBet,
	            id_matche: item.idMatche,
	            type_bet: item.typeBet,
	            type_event: item.typeEvent,
			});
		});

		console.log(dataFinal);


    	return api.post('bet-purchase', dataFinal)
    	.then(response => {
    		let user = JSON.parse(localStorage.getItem('user'));
    		user.money = parseFloat(user.money) - parseFloat(priceTotalBets);
    		localStorage.setItem('user', JSON.stringify(user));
	        window.location.reload();
	        return 'confirmado';
	    });
	}
}

export default new BetPurchaseService();