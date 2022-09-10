import api from './api';

class BetService {
	getLeagues() {
    	return api.get(`bets/leagues/list`);
	}

	getMatchesByLeague(idLeague) {
    	return api.get(`bets/leagues/matches-by-league/${idLeague}`);
	}

	getMatcheOdds(idLeague, idMatche) {
    	return api.get(`bets/leagues/matche-odds/${idLeague}/${idMatche}`);
	}

	getMatche(idLeague, idMatche) {
    	return api.get(`bets/leagues/matche/${idLeague}/${idMatche}`);
	}

	getMatchesInLive() {
    	return api.get(`bets/leagues/lives`);
	}

	getMatcheInLive(idMatche) {
    	return api.get(`bets/leagues/live/${idMatche}`);
	}
}

export default new BetService();