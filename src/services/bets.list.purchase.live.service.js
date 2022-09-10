class BetsListPurchaseLiveService {
	getInfoOddsMatch(itemBet, state){
		let info = null;
			switch (itemBet.typeBet) {
			    case 'full_time_result_of_matche':
			    	info = this.getFullTimeResultOfMatche(itemBet, state);
			    	break;
			    default:
			    	console.log('tipo de aposta não encontrado!');
			}
		
		return info;
	}

	getFullTimeResultOfMatche(itemBet, state){
		let info = null;
		state.listPreMatches.forEach(function(preMatche){
			if(info === undefined || info === null)
				info = preMatche.matchs.find(matche => matche.id == itemBet.idMatche);
		});

		return info;
	}
}

export default new BetsListPurchaseLiveService();