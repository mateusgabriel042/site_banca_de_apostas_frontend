class BetsListPurchasePrematchService {
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
		let matche = null;
		state.listPreMatches.forEach(function(preMatche){
			if(matche === undefined || matche === null)
				matche = preMatche.matchs.find(matche => matche.id == itemBet.idMatche);
		});

		let labelBet = '', odd = 0;
		if(itemBet.bet === 'home'){
			labelBet = matche.opponent1;
			odd = parseFloat(matche.oddHouse);
		}else if(itemBet.bet === 'away'){
			labelBet = matche.opponent2;
			odd = parseFloat(matche.oddVisitor);
		}else{
			labelBet = 'Empate';
			odd = parseFloat(matche.oddDraw);
		}

		return this.getStructureItemBetsList(odd, labelBet, 'Resultado Final', `${matche.opponent1} x ${matche.opponent2}`);
	}

	getStructureItemBetsList(odd, labelBet, labelTypeBet, labelMatche, leagueId){
		return {
			odd: odd,
			labelBet: labelBet,
			labelTypeBet: labelTypeBet,
			labelMatche: labelMatche,
		};
	}

	containBet(idBet, listBets){
		let condition = false;
		listBets.forEach(function(item){
			if(item.idBet == idBet)
				condition = true;
		});
		return condition;
	}
}

export default new BetsListPurchasePrematchService();