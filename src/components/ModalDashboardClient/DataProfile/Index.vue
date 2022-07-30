<template>
	<div class="area-profile">
		<div class="area-links-crud-user">
			<button type="button" @click="showViewCrudUser('MyData', 0)" class="btn-show-crud active">Meus Dados</button>
			<button type="button" @click="showViewCrudUser('EditData', 1)" class="btn-show-crud">Alterar Dados</button>
			<button type="button" @click="showViewCrudUser('EditPassword', 2)" class="btn-show-crud">Alterar Senha</button>
			<button type="button">Sair</button>
		</div>

		<div v-if="viewCrudUser == 'MyData'">
			<MyData />
		</div>

		<div v-if="viewCrudUser == 'EditData'">
			<EditData />
		</div>

		<div v-if="viewCrudUser == 'EditPassword'">
			<EditPassword />
		</div>
	</div>
</template>

<script>
	import MyData from './MyData/Index.vue';
	import EditData from './EditData/Index.vue';
	import EditPassword from './EditPassword/Index.vue';

	export default {
		name: 'DataProfile',
		components: {
			MyData,
			EditData,
			EditPassword,
		},
		data() {
		    return {
		    	viewCrudUser: 'MyData',
		    };
		},
		methods: {
			showViewCrudUser(view, index){
				this.viewCrudUser = view;
				this.changeActiveButton(index);
			},

			changeActiveButton(id){
				let elements = document.getElementsByClassName('btn-show-crud');
				for(let i = 0; i < elements.length; i++){
					if(elements[i].classList.contains('active')){
						elements[i].classList.remove('active')
					}
				}
				elements[id].classList.add('active');
			}

		}
	}
</script>

<style scoped>
	div.area-profile {padding:10px;}
	div.area-links-crud-user {float:left; width:100%;}
	div.area-links-crud-user button {border:none; background-color:#666666; font-size:14px; color:#e8e8e8; padding:4px 8px; margin-right:5px; border-radius:3px;}
	.active {
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
	}
</style>