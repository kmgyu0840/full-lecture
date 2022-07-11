"use strict";

//HTML에서 입력된 데이터를 서버에서 제어할 수 있도록 DOM을 활용
const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("button");

//버튼이 클릭되면 id, pw를 서버로 가져오는
loginBtn.addEventListener("click", login);

function login() {
    const req = {          //요청 데이터이므로 req 정의
        id : id.value,     //id 데이터 가져오는
        pw : pw.value,     //pw 데이터 가져오는
    };
    console.log(req);      //웹 개발자모드에 데이터 출력이되는지 확인
}