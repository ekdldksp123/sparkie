import axios from 'axios';

export default async function requestChargeStatus(params: SearchParams) {
  return axios.get(
    `api/v1/getChargerInfo`,
    // `http://api.data.go.kr/openapi/tn_pubr_public_elcty_car_chrstn_api`,
    {
      params: {
        ...params,
        // type: 'json',
        // serviceKey: process.env.REACT_APP_DATA_SERVICE_KEY,
        // serviceKey: process.env.REACT_APP_DATA_EVCHARGER_KEY,
        serviceKey:
          'u/nd5t9/1uTDtkilbsSSuXXoFhzoq/gI2kaFBrGCJQrMUbxXmmP/YB8UoySSjGjVVcRaCLtlUCHsQxhIByBCzg==',
      },
    },
  );
}
