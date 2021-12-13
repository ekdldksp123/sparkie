import axios from 'axios';

export default async function writePostApi(post: any) {
  return await axios.post(`api/v1/post`, post);
}
