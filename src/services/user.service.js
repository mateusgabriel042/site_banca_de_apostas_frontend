import api from './api';

class UserService {
	getUser(idUser) {
    	return api.get(`user/${idUser}`);
	}
}

export default new UserService();