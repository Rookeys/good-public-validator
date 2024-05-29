export function formatUTCDateToLocalDateString(utcDateString: string) {
  // UTC 날짜 문자열을 Date 객체로 파싱
  var date = new Date(utcDateString);

  // 로컬 시간대의 연, 월, 일을 추출
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // getMonth는 0에서 시작하므로 1을 추가
  var day = date.getDate();

  // 월과 일을 항상 두 자리 숫자로 포맷팅
  month = month < 10 ? 0 + month : month;
  day = day < 10 ? 0 + day : day;

  // yyyy-mm-dd 형식으로 결과 반환
  return year + "-" + month + "-" + day;
}
