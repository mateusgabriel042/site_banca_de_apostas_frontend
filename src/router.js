import { createRouter, createWebHistory } from 'vue-router';

function lazyLoad(dir){
	return () => import(`./views/${dir}/Index.vue`)
}

const routes = [
	{path: '/', component: lazyLoad('Esports')},

	{path: '/esports', component: lazyLoad('Esports'),
		children: [
			{path: '/', component: lazyLoad('Lives/Football')},
			{path: 'lives', component: lazyLoad('Lives/Football')},
	    	{path: 'lives/futebol', component: lazyLoad('Lives/Football')},
	    	{path: 'lives/basquete', component: lazyLoad('Lives/Basketball')},
	    	{path: 'lives/tenis', component: lazyLoad('Lives/Tennis')},
	    	{path: 'lives/tenis-de-mesa', component: lazyLoad('Lives/TableTennis')},
	    	{path: 'lives/volei', component: lazyLoad('Lives/Volleyball')},
	    	{path: 'lives/volei-de-praia', component: lazyLoad('Lives/BeachVolleyball')},
	    	{path: 'lives/handball', component: lazyLoad('Lives/Handball')},
	    	{path: 'lives/baseball', component: lazyLoad('Lives/Baseball')},
	    	{path: 'lives/futebol-americano', component: lazyLoad('Lives/FootballAmerican')},
	    	{path: 'lives/mma', component: lazyLoad('Lives/MMA')},
	    	{path: 'lives/boxe', component: lazyLoad('Lives/Boxing')},
	    ],
	},

	{path: '/lives', component: lazyLoad('Lives'),
		children: [
			{path: '/', component: lazyLoad('Lives/Football')},
	    	{path: 'futebol', component: lazyLoad('Lives/Football')},
	    	{path: 'basquete', component: lazyLoad('Lives/Basketball')},
	    	{path: 'tenis', component: lazyLoad('Lives/Tennis')},
	    	{path: 'tenis-de-mesa', component: lazyLoad('Lives/TableTennis')},
	    	{path: 'volei', component: lazyLoad('Lives/Volleyball')},
	    	{path: 'volei-de-praia', component: lazyLoad('Lives/BeachVolleyball')},
	    	{path: 'handball', component: lazyLoad('Lives/Handball')},
	    	{path: 'baseball', component: lazyLoad('Lives/Baseball')},
	    	{path: 'futebol-americano', component: lazyLoad('Lives/FootballAmerican')},
	    	{path: 'mma', component: lazyLoad('Lives/MMA')},
	    	{path: 'boxe', component: lazyLoad('Lives/Boxing')},
	    ],
	},

	{path: '/sports/1',  component: lazyLoad('Filters/Football')},
	{path: '/sports/2',  component: lazyLoad('Filters/Basketball')},
	{path: '/sports/3',  component: lazyLoad('Filters/Tennis')},
	{path: '/sports/4',  component: lazyLoad('Filters/TableTennis')},
	{path: '/sports/5',  component: lazyLoad('Filters/Volleyball')},
	{path: '/sports/6',  component: lazyLoad('Filters/BeachVolleyball')},
	{path: '/sports/7',  component: lazyLoad('Filters/Handball')},
	{path: '/sports/8',  component: lazyLoad('Filters/Baseball')},
	{path: '/sports/9',  component: lazyLoad('Filters/FootballAmerican')},
	{path: '/sports/10', component: lazyLoad('Filters/MMA')},
	{path: '/sports/11', component: lazyLoad('Filters/Boxing')},

	{path: '/competicao/:nameLeague?/:idLeague?', component: lazyLoad('CompetitionPage')},
	
	{path: '/bets-match/:idLeague/:idMache', component: lazyLoad('AllBetsMatchPage'),
		children: [
			{path: 'principal', component: lazyLoad('AllBetsMatchPage/Main')},
			{path: 'asian-bets', component: lazyLoad('AllBetsMatchPage/AsianBets')},
			{path: 'gols', component: lazyLoad('AllBetsMatchPage/Gols')},
			{path: 'tempos', component: lazyLoad('AllBetsMatchPage/FirstAndSecondTime')},
			{path: 'escanteios', component: lazyLoad('AllBetsMatchPage/Corners')},
			{path: 'cartoes', component: lazyLoad('AllBetsMatchPage/Cards')},
			{path: 'jogador', component: lazyLoad('AllBetsMatchPage/Players')},
			{path: 'minutos', component: lazyLoad('AllBetsMatchPage/Minutes')},
			{path: 'especial', component: lazyLoad('AllBetsMatchPage/Special')},
			{path: 'buscar', component: lazyLoad('AllBetsMatchPage/Search')},
	    ],
	},

	{path: '/bets-match-live/:idLeague/:idMache', component: lazyLoad('AllBetsMatchLivePage'),
		children: [
			{path: 'principal', component: lazyLoad('AllBetsMatchLivePage/Main')},
			{path: 'asian-bets', component: lazyLoad('AllBetsMatchLivePage/AsianBets')},
			{path: 'gols', component: lazyLoad('AllBetsMatchLivePage/Gols')},
			{path: 'tempos', component: lazyLoad('AllBetsMatchLivePage/FirstAndSecondTime')},
			{path: 'escanteios', component: lazyLoad('AllBetsMatchLivePage/Corners')},
			{path: 'cartoes', component: lazyLoad('AllBetsMatchLivePage/Cards')},
			{path: 'jogador', component: lazyLoad('AllBetsMatchLivePage/Players')},
			{path: 'minutos', component: lazyLoad('AllBetsMatchLivePage/Minutes')},
			{path: 'especial', component: lazyLoad('AllBetsMatchLivePage/Special')},
			{path: 'buscar', component: lazyLoad('AllBetsMatchLivePage/Search')},
	    ],
	},

	{path: '/tourneys/best', component: lazyLoad('BestsLists')},
	{path: '/tourneys', component: lazyLoad('Championships')},

	{path: '/:pathMatch(.*)*', component: lazyLoad('NotFound')}
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
