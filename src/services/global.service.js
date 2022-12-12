class GlobalService {
	groupBy(xs, key) {
	 	return xs.reduce(function(rv, x) {
		    (rv[x[key]] = rv[x[key]] || []).push(x);
		    return rv;
		}, {});
	}

	getDateInFull(date){
		let options = { weekday: 'long', month: 'long', day: 'numeric' };
		options.timeZone = 'America/Sao_Paulo';

		let dateFormated = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		let currentDate = new Date();
		let tomorrowDate = new Date();

		dateFormated = dateFormated.toLocaleDateString('pt-BR', options);
		currentDate = currentDate.toLocaleDateString('pt-BR', options);
		tomorrowDate.setDate(tomorrowDate.getDate() + 1);
		tomorrowDate = tomorrowDate.toLocaleDateString('pt-BR', options);


		if(currentDate == dateFormated){
			return 'Hoje';
		}else if(tomorrowDate == dateFormated){
			return 'Amanhã';
		}else{
			return dateFormated;
		}
	}

	getTimeFormated(date){
		let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		return `${hour}:${minutes}`;
	}

	compare(a, b) {
		return a.date_matche < b.date_matche;
	}

	getLabelTypeBetById(betId){
		switch(betId) {
			case 1:
		   		return 'Resultado Final'
			case 2:
		    	return 'teste'
			default:
		    	return 'Aposta não encontrada';
		}
	}
}

export default new GlobalService();