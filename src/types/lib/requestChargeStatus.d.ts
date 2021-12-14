type SearchParams = {
  pageNo?: number;
  numOfRows?: number;
  type?: 'json' | 'xml';
  chrstnNm?: string; // 충전소명
  chrstnLcDesc?: string; // 충전소위치상세
  instlCtprvnNm?: string; // 설치시도명
  restde?: string; // 휴점일
  useOpenTime?: string; // 이용가능시작시각
  useCloseTime?: string; // 이용가능종료시각
  slowChrstnYn?: string; // 완속충전가능여부
  fastChrstnYn?: string; // 급속충전가능여부
  fastChrstnType?: string; // 급속충전타입구분
  slowChrstnCo?: string; // 완속충전기(대수)
  fastChrstnCo?: string; // 급속충전기(대수)
  prkplceLevyYn?: string; // 주차료부과여부
  rdnmadr?: string; // 소재지도로명주소
  lnmadr?: string; // 소재지지번주소
  institutionNm?: string; // 관리업체명
  phoneNumber?: string; // 관리업체전화번호
  latitude?: number; // 위도
  longitude?: number; // 경도
  referenceDate?: string; // 데이터기준일자
  instt_code?: string; // 제공기관코드
  instt_nm?: string; // 제공기관기관명
};
