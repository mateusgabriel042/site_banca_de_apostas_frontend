import BetService from "../services/bet.service";
import GlobalService from "../services/global.service";

import BetPurchaseService from "../services/bet.purchase.service";
import BetsListPurchaseLiveService from "../services/bets.list.purchase.live.service";

const user = JSON.parse(localStorage.getItem('user'));
export const bets = {
	namespaced: true,
	state: { 
		loadingBets: false,
		countriesleagues: [],
		leagueSelected: {},

		betsSelected: [],
		priceTotalBets: 0,
	},
	actions: {
		initCountryLeagues({ commit }){
			commit('loading', true);
			BetService.getAllCountryLeagues().then(
				(response) => {
					commit('initCountryLeagues', response.data.data.items);
					commit('loading', false);
				},
				(error) => {
				    commit('initCountryLeagues', []);
				    commit('loading', false);
				}
			);
		},

		selectLeague({ commit, state }, data){
			commit('loading', true);
			BetService.getAllLeagueMatches(data.sportId, data.leagueId).then(
				(response) => {
					commit('selectLeague', response.data.data.item);
					commit('loading', false);
				},
				(error) => {
				    commit('initCountryLeagues', []);
				    commit('loading', false);
				}
			);
		},


		addBetInList({ commit }, data){
			let betSelected = {
				ids: {
					matcheId: data?.bet365_matche_id,
					leagueId: data?.apievents_league_id,
					typeEvent: data?.typeEvent,
					typeBet: data?.typeBet,
					subtypeBet: data?.subtypeBet,
					oddId: data?.oddId,

				},
				info: {
					priceBet: 0.0,
					customer_bet: data.customer_bet,
					apievents_sport_id: data.apievents_sport_id,
					odd: data.odd,
					subtypeBetLabel: data.subtypeBetLabel,
					oddNameLabel: data.oddNameLabel,
					labelMatche: data.labelMatche,
				},
			}

			commit('addBetSelected', betSelected);
		},

		purchaseBet({ commit, state }){
			if(parseFloat(user.money) - parseFloat(state.priceTotalBets) >= 0)
				BetPurchaseService.purchaseBet(state.betsSelected, state.priceTotalBets);
			else
				alert('Você não tem saldo suficiente, realize uma recarga!');
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

		countriesleagues(state) {
			return state.countriesleagues;
		},

		leagueSelected(state) {
			return state.leagueSelected;
		},

		betsSelected(state) {
			return state.betsSelected;
		},

		priceTotalBets(state) {
			return state.priceTotalBets;
		},

		oddMultiple(state) {
			let value = 1;
			state.betsSelected.forEach(function(item){
				value *= parseFloat(item.info.odd);
			});
			return value.toFixed(2);
		},
	},
	mutations: {
		loading(state, loading){
			state.loadingBets = loading;
		},

		initCountryLeagues(state, data) {
			if(state.countriesleagues.length === 0)
				state.countriesleagues = data;
		},

		selectLeague(state, data){
			if(Array.isArray(data?.matches)){
				let matches = [];

				data?.matches.forEach(function(item, indexMatche){
					let date = new Date(item.date_matche);
					item.time = GlobalService.getTimeFormated(date);
					item.day = GlobalService.getDateInFull(date);
					matches.push(item);
				});

				data.matches = GlobalService.groupBy(matches, 'day');
			}

			state.leagueSelected = data;
		},

		addBetSelected(state, data){
			let findIndex = state.betsSelected.findIndex((item) =>
				JSON.stringify(item.ids) == JSON.stringify(data.ids)
			);
			let findIndexByMatche = state.betsSelected.findIndex((item) =>
				item.ids.matcheId == data.ids.matcheId && item.ids.leagueId == data.ids.leagueId
			);
			if(findIndex >= 0){
				state.betsSelected.splice(findIndex, 1);
			}else if(findIndexByMatche >= 0){
				state.betsSelected.splice(findIndexByMatche, 1);
				state.betsSelected.push(data);
			}else{
				state.betsSelected.push(data);
			}
		},

		removeBetInList(state, indexItem) {
			state.betsSelected.splice(indexItem, 1);
			let total = 0.0;
			state.betsSelected.forEach(function(item){
				total += parseFloat(item.info.priceBet);
			});
			state.priceTotalBets = total;
		},

		changePriceBet(state, data) {
			state.betsSelected[data.indexBetList].info.priceBet = data.value;
			let total = 0.0;
			state.betsSelected.forEach(function(item){
				total += parseFloat(item.info.priceBet);
			});
			state.priceTotalBets = total;
		},

		changeMultiplePriceBet(state, data){
			state.priceTotalBets = data.value;
			state.betsSelected.forEach(function(item, index){
				state.betsSelected[index].info.priceBet = 0;
			});
		},

	}
};