import axios from 'axios';

export type LoginDto = {
  signed: string;
  message: string;
  address: string;
};

class RewardsService {
  private axiosClient = axios.create({ baseURL: 'http://localhost:5000/' });

  private setToken(token: string) {
    this.axiosClient.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async getMe() {
    return this.axiosClient.get('/users/me');
  }

  async getAuthMessage(signature: string) {
    return this.axiosClient.post('/auth/message', { signature });
  }

  async login(body: LoginDto) {
    const response = await this.axiosClient.post('/auth/login', {
      signature: btoa(JSON.stringify(body))
    });

    if (response.data) {
      this.setToken(response.data.token);
    }

    return response;
  }
}

export const rewardsService = new RewardsService();
