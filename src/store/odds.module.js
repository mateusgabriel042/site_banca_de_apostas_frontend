export const odds = {
	namespaced: true,
	state: { 
		loadingBets: false,
		matcheOdds: {},
		oddsPrematcheAsianBets: [],
		oddsPrematcheCards: [],
		oddsPrematcheCorners: [],
		oddsPrematcheFirstAndSecondTime: [],
		oddsPrematcheGols: [],
		oddsPrematcheMain: [],
		oddsPrematcheMinutes: [],
		oddsPrematchePlayers: [],
		oddsPrematcheSpecial: [],
	},
	actions: {
		pupulateOdds({ commit, state }, data){
			commit('loading', true);
			commit('pupulateOdds', data);
			commit('loading', false);
		},
	},
	getters: {
		loadingBets(state){
			return state.loadingBets;
		},

		matcheOdds(state) {
			return state.matcheOdds;
		},

		oddsPrematcheAsianBets(state) {
			return state.oddsPrematcheAsianBets;
		},

		oddsPrematcheCards(state) {
			return state.oddsPrematcheCards;
		},

		oddsPrematcheCorners(state) {
			return state.oddsPrematcheCorners;
		},

		oddsPrematcheFirstAndSecondTime(state) {
			return state.oddsPrematcheFirstAndSecondTime;
		},

		oddsPrematcheGols(state) {
			return state.oddsPrematcheGols;
		},

		oddsPrematcheMain(state) {
			return state.oddsPrematcheMain;
		},

		oddsPrematcheMinutes(state) {
			return state.oddsPrematcheMinutes;
		},

		oddsPrematchePlayers(state) {
			return state.oddsPrematchePlayers;
		},

		oddsPrematcheSpecial(state) {
			return state.oddsPrematcheSpecial;
		},

	},
	mutations: {
		loading(state, loading){
			state.loadingBets = loading;
		},

		pupulateOdds(state, data) {
			state.matcheOdds = data;

			state.oddsPrematcheAsianBets = data?.object_odds_prematche?.asian_lines?.sp;
			state.oddsPrematcheCards = data?.object_odds_prematche?.cards?.sp;
			state.oddsPrematcheCorners = data?.object_odds_prematche?.corners?.sp;
			state.oddsPrematcheFirstAndSecondTime = data?.object_odds_prematche?.half?.sp;
			state.oddsPrematcheGols = data?.object_odds_prematche?.goals?.sp;
			state.oddsPrematcheMain = data?.object_odds_prematche?.main?.sp;
			state.oddsPrematcheMinutes = data?.object_odds_prematche?.minutes?.sp;
			state.oddsPrematchePlayers = data?.object_odds_prematche?.player?.sp;
			state.oddsPrematcheSpecial = data?.object_odds_prematche?.specials?.sp;
		},
	}
};