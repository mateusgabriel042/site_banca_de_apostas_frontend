<template>
	<div class="area-my-data">
		<label class="title-info"><font-awesome-icon icon="fa-solid fa-user-circle" /> Informaçãoes de Login</label>
		<ul>
			<div class="row">
				<div class="col-6">
					<li>
						<label>Usuário</label>
						<label>{{user.username || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Saldo</label>
						<label>R$ {{user.money || 0}}</label>
					</li>
				</div>
			</div>
		</ul>

		<label class="title-info"><font-awesome-icon icon="fa-solid fa-globe-americas" /> Localização</label>
		<ul>
			<div class="row">
				<div class="col-6">
					<li>
						<label>País de Residência</label>
						<label>{{user.address_country || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Idioma</label>
						<label>{{user.language_label || '-'}}</label>
					</li>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<li>
						<label>Fuso Horário</label>
						<label>{{user.timezone || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Moeda</label>
						<label>{{user.currency || '-'}}</label>
					</li>
				</div>
			</div>
		</ul>

		<label class="title-info"><font-awesome-icon icon="fa-solid fa-user" /> Informações Pessoais</label>
		<ul>
			<div class="row">
				<div class="col-6">
					<li>
						<label>Primeiro Nome</label>
						<label>{{user.first_name || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Sobrenome</label>
						<label>{{user.last_name || '-'}}</label>
					</li>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<li>
						<label>Data de Nascimento</label>
						<label>{{user.birth_date || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Gênero</label>
						<label>{{user.sex || '-'}}</label>
					</li>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<li>
						<label>CPF</label>
						<label>{{user.cpf || '-'}}</label>
					</li>
				</div>
			</div>
		</ul>
		
		<label class="title-info"><font-awesome-icon icon="fa-solid fa-mobile-screen" /> Informações de Contato</label>
		<ul>
			<div class="row">
				<div class="col-6">
					<li>
						<label>E-mail</label>
						<label>{{user.email || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Telefone</label>
						<label>{{user.mobile_phone || '-'}}</label>
					</li>
				</div>
			</div>
		</ul>

		<label class="title-info"><font-awesome-icon icon="fa-solid fa-id-card" /> Endereço</label>
		<ul>
			<div class="row">
				<div class="col-6">
					<li>
						<label>Estado</label>
						<label>{{user.address_state || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Cidade</label>
						<label>{{user.address_city || '-'}}</label>
					</li>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<li>
						<label>CEP</label>
						<label>{{user.address_zipcode || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Rua</label>
						<label>{{user.address_street || '-'}}</label>
					</li>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<li>
						<label>Número</label>
						<label>{{user.address_number || '-'}}</label>
					</li>
				</div>

				<div class="col-6">
					<li>
						<label>Complemento</label>
						<label>{{user.address_complement || '-'}}</label>
					</li>
				</div>
			</div>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'MyData',
		data() {
		    return {
		    	loading: false,
		    	user: JSON.parse(localStorage.getItem('user')).user,
		    };
		},
		mounted() {
			
		},
	}
</script>

<style scoped>
	div.area-my-data {float:left; width:100%; height:320px; padding:18px 10px; overflow-y:auto; overflow-x:hidden;}
	label.title-info {color:#535353; font-size:16px; margin-bottom:7px;}
	label.title-info svg {margin-right:5px;}
	ul {list-style:none; margin:0px; padding:0px 10px;}
	ul li {float:left; width:100%; margin-bottom:15px;}
	ul li label {float:left; width:100%; font-size:13px; color:#535353;}
	ul li label:first-child {color:rgb(255,102,0); font-weight:bold;}
</style>