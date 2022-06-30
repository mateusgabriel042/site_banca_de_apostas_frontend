<template>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<Header />
				</div>
			</div>

			
			<div class="row-sections">
				<div class="col-area-sidebar">
					<Sidebar />
				</div>
				
				<div class="col-area-main">
					<Main />
				</div>

				<div class="col-area-bets">
					<AreaBets />
				</div>
			</div>
		</div>
	</body>
</template>

<script>
	import Header from './components/Header/Index.vue'
	import Sidebar from './components/Sidebar/Index.vue'
	import Main from './components/Main/Index.vue'
	import AreaBets from './components/AreaBets/Index.vue'
	export default {
    	name: 'App',
	    components: {
		    Header,
	    	Sidebar,
	    	Main,
	    	AreaBets
	    }
	}
</script>

<style>
	html, body {padding:0px; margin:0px;}
	* {font-family:"arial";}
	input:focus {outline:none;}
	div.container-fluid {padding:0px; overflow-x:hidden;}
</style>


<style scoped>
	div.row-sections {float:left; width:100%; display:flex;}
	div.col-area-sidebar {float:left; width:210px;}
	div.col-area-main {float:left; width:calc(100vw - 210px - 250px);}
	div.col-area-bets {float:left; width:250px;}
</style>



