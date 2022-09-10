import api from './api';

class PayloadService {
	async createPayment(value) {
		return api
		.get(`payload/create-payment/${value}`)
		.then(response => {
	        return response.data.linkPayment;
	    });
	}
}

export default new PayloadService();