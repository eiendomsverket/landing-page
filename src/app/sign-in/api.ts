import axios from 'axios';
import { ENDPOINTS } from '../api/endpoints';

export async function loginUser(email: string, password: string) {

  console.log('Logging in with:', email);

  return axios.post(ENDPOINTS.LOGIN, { email, password });
}

