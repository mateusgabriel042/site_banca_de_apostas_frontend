<template>
	<div class="background-box-modal" id="background-box-modal">
		<div class="modal-email-for-reset-password">
			<header>
				<img class="logo" src="@/assets/logo-banca-de-apostas.png">
				<button @click="closeModal()"><font-awesome-icon icon="fa-solid fa-close" /></button>
			</header>
			<form>
				<div class="row">
					<div class="col-12">
						<div class="group-input-center">
							<label>Informe seu e-mail para receber o link de redefinição de senha.</label>
							<input type="email" name="email" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<div class="btn-submit-center">
							<button type="submit">Enviar</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModalEmailForResetPassword',
		methods: {
			closeModal(){
				this.$emit('close-modal-recovery-password');
			}
		}
	}
</script>

<style scoped>
	div.background-box-modal {position:fixed; width:100vw; height:100vh; background-color:rgba(0,0,0,0.5); margin:0 auto; top:0px; left:0px; z-index:3; display:flex; justify-content:center; align-items:center;}
	div.modal-email-for-reset-password {float:left; min-width:350px; max-width:350px; background-color:#424242; border-radius:10px;}
	div.modal-email-for-reset-password header {width:100%; padding:15px 0px; display:flex; justify-content:center;}
	div.modal-email-for-reset-password header img {width:190px;}
	div.modal-email-for-reset-password header button {position:absolute; width:28px; height:28px; border:none; margin-left:310px; margin-top:-10px; background-color:#e8e8e8; border-radius:100%; padding-top:3px; color:#666666;}

	div.modal-email-for-reset-password form {padding:15px; padding-top:0px; width:100%;}
	
	div.group-input-center {display:flex; flex-wrap:wrap; justify-content:center;}
	div.group-input-center label {width:100%; text-align:center; color:#e8e8e8; font-size:14px; margin-bottom:10px;}
	div.group-input-center input {width:100%; border:none; color:#666666; border-radius:3px; padding:6px 8px; font-size:14px;}

	div.btn-submit-center {display:flex; justify-content:center; margin-top:25px;}
	div.btn-submit-center button {border:none; color:#fdfdfe; padding:5px 20px; border-radius:4px;
		background: rgb(255,102,0);
		background: linear-gradient(0deg, rgba(255,102,0,1) 20%, rgba(255,136,0,1) 69%);
	}
</style>