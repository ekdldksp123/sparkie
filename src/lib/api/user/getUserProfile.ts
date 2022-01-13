import axios from 'axios';

export default async function getUserProfile(username: string): Promise<any> {
  return await axios.get(`api/v1/user?username=${username}`);
}