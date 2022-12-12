import { createStore } from "vuex";
import { auth } from "./auth.module";
import { bets } from "./bets.module";
import { odds } from "./odds.module";

const store = createStore({
	modules: {
    	auth,
    	bets,
    	odds
	},
});

export default store;