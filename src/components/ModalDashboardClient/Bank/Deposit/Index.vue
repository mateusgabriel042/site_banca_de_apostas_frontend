<template>
	<div class="area-deposit">
		<div id="info-deposit">
			<ol>
				<li>Não será aceito depósito vindo de contas de terceiros, somente será creditado o valor para o mesmo titular no Bet 77.</li>
				
				<li>Não é permitido transferências diretamente para a chave do intermediador de pagamento, ou via PIX por devolução. Transferências feitas dessa forma serão estornadas para a mesma conta em até 24 horas.</li>

				<li>Informe o valor do depósito e clique em Gerar QR CODE PIX.</li>

				<li>Faça o pagamento pelo QR Code gerado ou pela opção Pix copia e cola, transferências feitas diretamente para a chave ou via devolução serão estornadas em até 24 horas</li>

				<li>Aguarde alguns segundos para a confirmação do pagamento, seu crédito será adicionado automaticamente.</li>
			</ol>

			<form @submit="createQrCodePix">
				<div class="row">
					<div class="col-12">
						
						<div class="group-input">
							<label>Valor da Transferência</label>
							<div class="input-value-pix">
								<span>R$</span>
								<input type="number" name="valuePix" step=0.01 />
								<button type="submit" class="btn-creat-qr-pix">Gerar QR CODE PIX</button>
							</div>
						</div>
						
					</div>
				</div>			
			</form>
		</div>

		<div class="area-qr-code-pix" id="area-qr-code-pix">
			<label><b>Valor:</b> R$ {{valuePix}}</label>
			<button type="button">Pix copia e cola</button>
			<p class="alert"><b>Atenção:</b> esta é uma chave <b>PIX COPIA E COLA</b>. Para utilizar está função, clique no botão acima para copiar o código, depois navegue até a opção <b>PAGAR QR Code</b> no APP do seu Banco e use a opção <b>PIX COPIA E COLA</b>.</p>
			<img class="qr-code-pix" :src="qrCodePix" />
			<p class="payload">{{payloadPix}}</p>
		</div>

	</div>
</template>

<script>
	import { QrCodePix } from 'qrcode-pix';

	export default {
		name: 'Deposit',
		data() {
		    return {
		    	loading: false,
		    	valuePix: 0,
		    	msg: "asdfsa",
		    	qrCodePix: "",
		    	payloadPix: "",
		    };
		},
		mounted() {
			
		},
		methods: {
			async createQrCodePix(data){
				data.preventDefault();
				this.loading = true;

				window.Buffer = window.Buffer || require('buffer').Buffer;

				let infoDeposit = document.getElementById('info-deposit');
				let areaQrCodePix = document.getElementById('area-qr-code-pix');
				infoDeposit.style.display = 'none';
				areaQrCodePix.style.display = 'flex';

				this.valuePix = data.target.valuePix.value;

			    const qrCodePix = QrCodePix({
			    	version: "01",
			    	key: "11847052401",
			    	name: "Mateus Gabriel",
			    	city: "Macau",
			    	message: "Boa sorte!",
			    	cep: "59500000",
			    	value: parseFloat(this.valuePix),
			    });

			    this.payloadPix = qrCodePix.payload();
			    this.qrCodePix = await qrCodePix.base64();

			    this.loading = false;
			}
		}
	}
</script>

<style scoped>
	div.area-deposit {float:left; width:100%; height:50vh; padding:20px 40px; overflow-y:auto; overflow-x:hidden;}
	div.area-deposit ol {padding:0px; margin:0px;}
	div.area-deposit ol li {font-size:12px; font-weight:bold; color:#444444;}
	form {float:left; width:100%; margin-top:20px;}
	
	form label {font-size:13px; color:#444444;}
	form div.input-value-pix {display:flex; align-items:center; align-content:center;}
	form div.input-value-pix span {background-color:#dddddd; display:flex; justify-content:center; align-items:center; align-content:center; padding:7px 10px; color:#444444; font-size:14px; border-radius:3px 0px 0px 3px;}
	form div.input-value-pix input {border:none; border-left:5px solid #a94442; background-color:#e8e8e8; color:#666666; border-radius:0px 3px 3px 0px; padding:6px 8px; font-size:14px;}
	form button.btn-creat-qr-pix {
		border:none;
		border-radius:3px;
		padding:5px 50px;
		margin-left:40px;
		font-size:15px;
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
	}

	div.area-qr-code-pix {float:left; width:100%; display:none; justify-content:center; flex-wrap:wrap;}
	div.area-qr-code-pix label {width:100%; text-align:center; font-size:14px; margin-bottom:10px;}
	div.area-qr-code-pix button {
		border:none;
		border-radius:3px;
		padding:3px 30px;
		font-size:15px;
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
		color:#e8e8e8;
		margin-bottom:10px;
	}
	div.area-qr-code-pix p.alert {width:100%; text-align:center; margin-bottom:10px; padding:0px; font-size:14px;}
	div.area-qr-code-pix img.qr-code-pix {width:250px; margin-bottom:10px;}
	div.area-qr-code-pix p.payload {width:100%; text-align:center; font-size:12px;}

</style>