import { createStore } from "vuex";
import { auth } from "./auth.module";
import { bets } from "./bets.module";

const store = createStore({
  modules: {
    auth,
    bets
  },
});

export default store;