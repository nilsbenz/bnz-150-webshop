import {baseUrl} from "../util/fetch";
import CryptoJS from "crypto-js";

class AuthService {
  async login(user) {
    user.password = this.encryptPassword(user.password);
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
    user.password = this.encryptPassword(user.password);
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

  encryptPassword(password: string): string {
    return CryptoJS.MD5(password).toString();
  }
}

const authService = new AuthService();

export default authService;
