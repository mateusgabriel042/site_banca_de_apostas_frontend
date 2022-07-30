<template>
	<div class="row">
		<div class="col-12">
			<div class="area-nav-info">
				<div>
					<form>
						<div class="area-input-search">
							<button type="submit"><font-awesome-icon icon="fa-solid fa-search" /></button>
							<input type="text" name="search" placeholder="Buscar" />
						</div>
					</form>
				</div>

				<div class="area-show-modals">
					<button @click="openRoles('regras_gerais')" type="button">Regras Gerais</button>
					<button @click="openRoles('responsible_gaming')" type="button">Jogo Responsável</button>
					<a href="https://web.whatsapp.com/send?phone=5515991520383" target="_blank">
						<button type="button">Suporte</button>
					</a>
					<button type="button">Português</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavInfo',
		methods: {
			openRoles(rule){
				let url = window.location.href;
				let arr = url.split("/");
				let result = arr[0] + "//" + arr[2];
				let Window = window.open (`${result}/rules/${rule}.html`, 'popup');
			}
		}
	}
</script>

<style scoped>
	div.area-nav-info {width:100%; padding:4px; background-color:#3d3d3d; display:flex; justify-content:space-between;}
	form div.area-input-search {background-color:#464646; padding:4px 5px; border-radius:5px;}
	form div.area-input-search input {width:168px; color:#bbb; font-size:13px; background-color:transparent; border:none; padding-left:7px;}
	form div.area-input-search input::placeholder {color:#bbb; font-size:13px;}
	form div.area-input-search button {background-color:transparent; border:none; color:#bbb;}

	div.area-show-modals {display:flex; align-items:center; align-content:center;}
	div.area-show-modals button {border:none; background-color:transparent; color:#bbb; font-size:13px; padding:0px; 
		margin-right:30px;}
	div.area-show-modals button::before {position:absolute; content:" "; width:5px; height:5px; background-color:#666666; margin-left:-10px; margin-top:7px; border-radius:2px;}
	div.area-show-modals button:hover {color:#ff8800;}

</style>