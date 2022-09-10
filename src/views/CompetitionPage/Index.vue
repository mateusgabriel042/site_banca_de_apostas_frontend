<template>
	<Competition :competition="competition" :listMatches="listPreMatches" :idLeague="idLeague" />
</template>

<script>
	import Competition from '../../components/Competition/Index.vue'
	import BetService from "../../services/bet.service";
	import { mapGetters } from 'vuex';
	export default {
    	name: 'CompetitionPage',
	    components: {
	    	Competition
	    },
	    data(){
	    	return {
	    		competition: {
	    			name: this.$route.params.nameLeague,
	    			iconSport: 'futebol.png',
	    			typeSport: 'Futebol',
	    		},
	    		idLeague: this.$route.params.idLeague,
	    	}
	    },

	    methods: {
	    	msToTime(utcSeconds) {
	    		let d = new Date(utcSeconds*1000);
			    return d.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
			}
	    },

	    computed: {
	    	...mapGetters({
	        	listPreMatches: 'bets/listPreMatches'
	    	})
	    },

	    mounted() {
			this.$store.dispatch('bets/searchPreMatchesByLeague', this.$route.params.idLeague);
		},


	}
</script>

<style scoped>

</style>