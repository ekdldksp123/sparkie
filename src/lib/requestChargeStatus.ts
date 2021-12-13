import axios from 'axios';

export default async function requestChargeStatus() {
  return axios.get(
    `http://api.data.go.kr/openapi/tn_pubr_public_elcty_car_chrstn_api`,
    {
      params: {
        serviceKey: process.env.REACT_APP_DATA_SERVICE_KEY,
        type: 'json',
      },
    },
  );
}
