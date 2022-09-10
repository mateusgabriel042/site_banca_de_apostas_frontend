import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        user => {
          commit('registerSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    
    edit({ commit }, user) {
      return AuthService.edit(user).then(
        user => {
          commit('editSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    async updateMoneyUser({commit}){
      let moneyUser = await AuthService.getMoneyUser();
      commit('updateMoneyUser', moneyUser);
    }
  },

  getters: {
    user(state) {
      return state.user;
    },
  },

  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    updateMoneyUser(state, moneyUser) {
      state.user.money = moneyUser;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    editSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};