import {baseUrl} from "../global/app";

class AuthService {
  async login(user) {
    return await fetch(baseUrl + '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  async register(user) {
    return await fetch(baseUrl + '/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}

const authService = new AuthService();

export default authService;
