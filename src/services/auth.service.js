import api from './api';

class AuthService {
  login(user) {
    return api.post('auth/login', {
        email: user.target.email.value,
        password: user.target.password.value
      })
      .then(response => {
        let dataUser = response.data.data.user;
        dataUser.token = response.data.data.token;
        localStorage.setItem('user', JSON.stringify(dataUser));
        window.location.reload();
        return dataUser;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  async getMoneyUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    let response = await api.get(`user/${user.id}`);
    user.money = response.data.data.user.money;
    localStorage.setItem('user', JSON.stringify(user));
    return user.money;
  }

  register(dataUser) {
    console.log('dataUser');
    console.log(dataUser);
    return api.post('auth/register', {
      first_name: dataUser.first_name,
      last_name: dataUser.last_name,
      cpf: dataUser.cpf,
      birth_date: dataUser.birth_date,
      email: dataUser.email,
      mobile_phone: dataUser.mobile_phone,
      username: dataUser.username,
      password: dataUser.password,
      password_confirmation: dataUser.password_confirmation,
    })
    .then(response => {
      console.log('response');
      console.log(response.data);
      let dataUser = response.data.data.user;
      dataUser.token = response.data.data.token;
      localStorage.setItem('user', JSON.stringify(dataUser));
      window.location.reload();
      return dataUser;
    });
  }

  edit(dataUser) {
    return api.put(`auth/update/${dataUser.id}`, {
      first_name: dataUser.first_name,
      last_name: dataUser.last_name,
      cpf: dataUser.cpf,
      birth_date: dataUser.birth_date,
      email: dataUser.email,
      mobile_phone: dataUser.mobile_phone,
      username: dataUser.username,
      address_country: dataUser.address_country,
      timezone: dataUser.timezone,
      language: dataUser.language,
      sex: dataUser.sex,
      address_state_id: dataUser.address_state_id,
      address_city_id: dataUser.address_city_id,
      address_zipcode: dataUser.address_zipcode,
      address_street: dataUser.address_street,
      address_number: dataUser.address_number,
      address_complement: dataUser.address_complement,
    })
    .then(response => {
      let dataUser = response.data.data.user;
      dataUser.token = response.data.data.token;
      localStorage.setItem('user', JSON.stringify(dataUser));
      window.location.reload();
      return dataUser;
    });
  }
}

export default new AuthService();