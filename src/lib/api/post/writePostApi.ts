import axios from 'axios';

export default async (post: any) => {
  return await axios.post(`api/v1/post`, post);
};
