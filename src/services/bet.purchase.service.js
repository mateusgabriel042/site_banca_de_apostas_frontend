import api from './api';

class BetPurchaseService {
	async purchaseBet(betsSelected, priceTotalBets) {
		let dataFinal = {
			bets: [],
			invested_money: priceTotalBets,
		};

		betsSelected.forEach(function(item, index){
			dataFinal.bets.push({
				apievents_sport_id: item.info.apievents_sport_id,
				type_event: item.ids.typeEvent,
				customer_bet: item.info.customer_bet,
				type_bet: item.ids.typeBet,
				subtype_bet: item.ids.subtypeBet,
				bet365_matche_id: item.ids.matcheId,
				apievents_league_id: item.ids.leagueId,
				odd_id: item.ids.oddId,
			});
		});

		
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