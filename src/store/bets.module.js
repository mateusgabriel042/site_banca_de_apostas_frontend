import BetService from "../services/bet.service";
import BetPurchaseService from "../services/bet.purchase.service";
import BetsListPurchasePrematchService from "../services/bets.list.purchase.prematche.service";
import BetsListPurchaseLiveService from "../services/bets.list.purchase.live.service";

const user = JSON.parse(localStorage.getItem('user'));
export const bets = {
	namespaced: true,
	state: { 
		loadingBets: false,
		leagues: [],
		listPreMatches: null,
		matchesInLive: [],
		betsList: [],
		betsIsMultiple: false,
		priceTotalBets: 0,
	},
	actions: {
		initLeagues({ commit }){
			commit('loading', true);
			BetService.getLeagues().then(
				(response) => {
					commit('initLeagues', response.data);
					commit('loading', false);
				},
				(error) => {
				    commit('initLeagues', []);
				    commit('loading', false);
				}
			);
		},

		searchPreMatchesByLeague({commit}, idLeague){
			commit('loading', true);
			BetService.getMatchesByLeague(idLeague).then(
				(response) => {
				    let data = response.data;
				    let listPreMatchesTemp = [];
				    if(data.matchesByDay.length > 0){
					    data.matchesByDay.forEach((item, index) => {
					    	let matchsTemp = [];
					    	item.matches.forEach((itemMatche, index) => {
					    		matchsTemp.push(
					    			{
					    				id: itemMatche.match.id,
				    					hour: new Date(itemMatche.match.time*1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
				    					opponent1: itemMatche.match.home.name,
				    					opponent2: itemMatche.match.away.name,
				    					oddHouse: parseFloat(itemMatche?.odds?.main?.sp.full_time_result.odds[0].odds).toFixed(2),
				    					oddDraw: parseFloat(itemMatche?.odds?.main?.sp.full_time_result.odds[1].odds).toFixed(2),
				    					oddVisitor: parseFloat(itemMatche?.odds?.main?.sp.full_time_result.odds[2].odds).toFixed(2),
			    					},
					    		);
					    	});
						    listPreMatchesTemp.push(
						    	{
				    				dateMatch: item.dayLabel,
				    				matchs: matchsTemp,
				    			}
						    );
						});
						commit('addPreMatchesByLeague', listPreMatchesTemp);
					}else{
						commit('addPreMatchesByLeague', []);
					}
					commit('loading', false);
				},
				(error) => {
				    commit('addPreMatchesByLeague', []);
				    commit('loading', false);
				}
			);
		},

		addBetInList({ commit, state }, data){
			let itemBet = {
				idBet: data.idMatche+'-'+data.typeBet+'-'+data.bet,
				idMatche: data.idMatche,
				idLeague: data.idLeague,
				bet: data.bet,
				typeEvent: data.typeEvent,
				typeBet: data.typeBet,
				priceBet: 0.0,
			}
			console.log(itemBet);
			let searchItemInBets = state.betsList.findIndex(element => element.idMatche === data.idMatche);

			if(itemBet.typeEvent === 'pre_matche')
				itemBet.info = BetsListPurchasePrematchService.getInfoOddsMatch(itemBet, state);
			else
				itemBet.info = BetsListPurchaseLiveService.getInfoOddsMatch(itemBet, state);

			if(searchItemInBets < 0)
				commit('addBetInList', itemBet);
			else
				commit('removeBetInList', searchItemInBets);
		},

		purchaseBet({ commit, state }){
			if(parseFloat(user.money) - parseFloat(state.priceTotalBets) >= 0){
				BetPurchaseService.purchaseBet(state.betsList, state.priceTotalBets);
			}else{
				alert('Você não tem saldo suficiente, realize uma recarga!');
			}
		},

		setLoading({ commit }, loading){
			commit('loading', loading);
		},

		changePriceBet({ commit }, data){
			commit('changePriceBet', data);
		},

		changeMultiplePriceBet({ commit }, data){
			commit('changeMultiplePriceBet', data);
		},

		removeBetInList({commit}, index){
			commit('removeBetInList', index);
		},

	},
	getters: {
		loadingBets(state){
			return state.loadingBets;
		},

		leagues(state) {
			return state.leagues;
		},

		listPreMatches(state) {
			return state.listPreMatches;
		},

		matchesInLive(state) {
			return state.matchesInLive;
		},

		betsList(state) {
			return state.betsList;
		},

		priceTotalBets(state) {
			return state.priceTotalBets;
		},

		oddMultiple(state) {
			let value = 1;
			state.betsList.forEach(function(item){
				value *= item.info.odd;
			});
			return parseFloat(value).toFixed(2);
		},
	},
	mutations: {
		loading(state, loading){
			state.loadingBets = loading;
		},

		initLeagues(state, data) {
			if(state.leagues.length === 0)
				state.leagues = data;
		},

		addPreMatchesByLeague(state, data) {
			state.listPreMatches = data;
		},

		changePriceBet(state, data) {
			state.betsList[data.indexBetList].priceBet = data.value;
			let total = 0.0;
			state.betsList.forEach(function(item){
				total += parseFloat(item.priceBet);
			});
			state.priceTotalBets = total;
		},

		changeMultiplePriceBet(state, data){
			state.priceTotalBets = data.value;
			state.betsList.forEach(function(item, index){
				state.betsList[index].priceBet = 0;
			});
		},

		addBetInList(state, item) {
			state.betsList.push(item);
		},

		removeBetInList(state, indexItem) {
			state.betsList.splice(indexItem, 1);
			let total = 0.0;
			state.betsList.forEach(function(item){
				total += parseFloat(item.priceBet);
			});
			state.priceTotalBets = total;

		},
	}
};