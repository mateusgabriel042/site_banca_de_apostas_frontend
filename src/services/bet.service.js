import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/bets';

class BetService {
	getLeagues() {
    	return axios.get(API_URL + '/leagues/list', { headers: authHeader() });
	}

	getMatchesByLeague(idLeague) {
    	return axios.get(API_URL + '/leagues/matches-by-league/' + idLeague, { headers: authHeader() });
	}

	getMatcheOdds(idLeague, idMatche) {
    	return axios.get(API_URL + '/leagues/matche-odds/' + idLeague + '/' + idMatche, { headers: authHeader() });
	}

	getMatche(idLeague, idMatche) {
    	return axios.get(API_URL + '/leagues/matche/' + idLeague + '/' + idMatche, { headers: authHeader() });
	}
}

export default new BetService();