<template>
	<div class="area-deposits">
		<table>
			<thead>
				<th>Valor</th>
				<th>Tipo de pagamento</th>
				<th>Status</th>
				<th>Moeda</th>
				<th>Data</th>
			</thead>
			<tbody>
				<tr v-for="(item, index) in user.deposits" :key="index">
					<td>{{parseFloat(item.transaction_amount).toFixed(2)}}</td>
					<td>{{item.type_payment}}</td>
					<td>{{item.status == 'approved' ? 'Aprovado' : 'Em andamento'}}</td>
					<td>{{item.currency_id}}</td>
					<td>{{item.date_deposit}}</td>
				</tr>
			</tbody>
		</table>
	</div>

</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'Deposits',
		data() {
		    return {
		    	
		    };
		},
		computed: {
			...mapGetters({
	        	user: 'auth/user',
	    	}),
		},
	}
</script>

<style scoped>
	div.area-deposits {float:left; width:100%; height:320px; padding:18px 10px; overflow-y:auto; overflow-x:hidden;}
	table {width:100% !important;}
	table thead {color:#bbbbbb;}
	table thead th {border:none !important; background-color:#444444; color:#fdfdfe; padding:5px 13px;}
	table thead th:first-child {border-radius:5px 0 0 0 !important;}
	table thead th:last-child {border-radius:0 5px 0 0 !important;}
	table tbody {border-top:transparent !important;}
	table tbody tr {border-bottom:1px solid #444444;}
	table tbody tr td {vertical-align:middle !important; padding:5px 13px;}
	table tbody tr td.actions-2{width:110px;}
	table tbody tr td.actions-3{width:155px;}
	table tbody tr td.actions-4{width:200px;}
	table tbody tr td.actions-5{width:250px;}
	table button {padding:10px 13px; background-color:#17202a; transition:0.3s; border-radius:0px;}
	table button:hover {background-color:#000000; transition:0.3s}
	table button svg {margin-top:-5px;}
</style>