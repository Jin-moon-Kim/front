// test18.js(정규식)
'use strict';

// /^(?=.*[a-zA-Z_]).{3,15}$/g  ==>> ?=.*은 []안의 문자들을 0번 이상 검사만 수행한다. 여기선 '.'뒤에 {3,15}를 입력
// 하였기에 [a-zA-Z_] 이 들어있는 문자들을 최소 3~15글자까지 입력시켜줘야 한다.
function regexCheck() {
  const regEx1 = /^[a-zA-Z0-9_]{3,15}$/g;  // 아이디는 '영문 대/소문자와 숫자, '_'만 포함하여 3~15자 이하로만 작성?
  const regEx2 = /^(?=.*[a-zA-Z_-]).{3,15}$/g;    // 비밀번호는 첫글자는 영문자, 전체적으로 영문자, 숫자, 특수문자는 '_'만 허용, 3~15자까지
  //const regEx3 = //g;   // 닉네임은 '영문 대/소문자, 한글, 숫자, _, - 가 올수 있다.
  //const regEx4 = //g;   // 성명은 한글이나, 영문과 '_' 만 사용
  const regEx5 = /^[a-z0-9]([\._-]?[a-z0-9])*@[a-z0-9]([-_]?[a-z0-9])*(\.[a-z]{2,3})+$/i;   // 이메일(소문자) 형식체크(atom@naver.com, atom@naver.co.kr, a.b@naver.com)
  //const regEx6 = //g;   // url 형식에 맞도록 체크
  const regEx7 = /\d{6}-[1-4]/g;   // 주민번호 앞쪽 6자리숫자, 7번째는 성별(1~4) 체크(123456-1)
  const regEx8 = /\d{2,3}-\d{3,4}-\d{4}$/g;   // 전화번호는 : 02-123-1234, 010-1234-1234

  let content = document.getElementById("content").value.trim();

  if(content == '') {
    alert("문자열을 입력하세요");
    document.getElementById("content").focus();
    return false;
  }

  // if(!regEx1.test(content)) alert("아이디는 '영문 대/소문자와 숫자, '_'만 포함하여 3~15자 이하로 작성하시오.");
  if(!regEx2.test(content)) alert("비밀번호는 영문 대소문자가 1개이상, 숫자1개이상, 특수문자(_) 1개, 3~15자까지");
  // if(!regEx5.test(content)) alert("이메일 형식을 확인하세요");
  // if(!regEx7.test(content)) alert("주민번호 형식을 확인하세요");
  // if(!regEx8.test(content)) alert("전화번호 형식을 확인하세요");


  else {
    alert("자료가 정상 처리 되었습니다. 통과~~~~");
  }
  document.getElementById("content").select();
  document.getElementById("content").focus();
}