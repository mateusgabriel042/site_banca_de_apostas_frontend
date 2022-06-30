import { createRouter, createWebHistory } from 'vue-router';

function lazyLoad(dir){
	return import(`./views/${dir}/Index.vue`)
}

const routes = [
	{path: '/', name: 'home', component: lazyLoad('Esports')},

	{path: '/esports', name: 'esports', component: lazyLoad('Esports')},
	{path: '/lives', name: 'lives', component: lazyLoad('Lives')},

	{path: '/sports/1', name: 'futball', component: lazyLoad('Filters/Football')},
	{path: '/sports/2', name: 'basketball', component: lazyLoad('Filters/Basketball')},
	{path: '/sports/3', name: 'tennis', component: lazyLoad('Filters/Tennis')},
	{path: '/sports/4', name: 'tableTennis', component: lazyLoad('Filters/TableTennis')},
	{path: '/sports/5', name: 'volleyball', component: lazyLoad('Filters/Volleyball')},
	{path: '/sports/6', name: 'beachVolleyball', component: lazyLoad('Filters/BeachVolleyball')},
	{path: '/sports/7', name: 'handball', component: lazyLoad('Filters/Handball')},
	{path: '/sports/8', name: 'baseball', component: lazyLoad('Filters/Baseball')},
	{path: '/sports/9', name: 'footballAmerican', component: lazyLoad('Filters/FootballAmerican')},
	{path: '/sports/10', name: 'MMA', component: lazyLoad('Filters/MMA')},
	{path: '/sports/11', name: 'boxing', component: lazyLoad('Filters/Boxing')},

	{path: '/tourneys/best', name: 'bestsLists', component: lazyLoad('BestsLists')},
	{path: '/tourneys', name: 'championships', component: lazyLoad('Championships')},

	{path: '/:pathMatch(.*)*', component: lazyLoad('NotFound')}
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
