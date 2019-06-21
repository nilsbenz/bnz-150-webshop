import {baseUrl} from "../util/fetch";

class AuthService {
  async login(user) {
    const res = await fetch(baseUrl + '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
    if (res.status === 200) {
      localStorage.setItem('Authorization', res.headers.get('Authorization'));
      localStorage.setItem('TokenCreated', Date());
      return true;
    } else {
      return false;
    }
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

  isLoggedIn(): boolean {
    let date = new Date();
    date.setDate(date.getDate() - 7);
    if(localStorage.getItem('Authorization') && new Date(localStorage.getItem('TokenCreated')) > date) {
      return true;
    } else {
      localStorage.removeItem('Authorization');
      localStorage.removeItem('TokenCreated');
      return false;
    }
  }
}

const authService = new AuthService();

export default authService;
