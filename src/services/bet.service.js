import api from './api';

class BetService {
	getAllCountryLeagues() {
    	return api.get(`bets/leagues/all-country-leagues`);
	}

	getAllLeagueMatches(apieventsSportId, apieventsLeagueId) {
    	return api.get(`bets/leagues/all-league-matches/${apieventsSportId}/${apieventsLeagueId}`);
	}

	getMatcheOdds(sportId, leagueId, matcheId) {
    	return api.get(`bets/matches/matche-odds/${sportId}/${leagueId}/${matcheId}`);
	}

	/*getMatchesByLeague(idLeague) {
    	return api.get(`bets/leagues/matches-by-league/${idLeague}`);
	}

	

	getMatche(idLeague, idMatche) {
    	return api.get(`bets/leagues/matche/${idLeague}/${idMatche}`);
	}

	getMatchesInLive() {
    	return api.get(`bets/leagues/lives`);
	}

	getMatcheInLive(idMatche) {
    	return api.get(`bets/leagues/live/${idMatche}`);
	}*/
}

export default new BetService();