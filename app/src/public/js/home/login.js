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

    // 데이터가 서버로 받으려면 브라우저의 /login경로 POST메서드로 데이터를 받을 수 있는 API가 마련되어 있어야 함
    // routes/home/index.js에 post를 만들어줘야함
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"     //요청하는 전달하는 데이터가 json인걸 알려줘야하므로
        },
        body: JSON.stringify(req),     //위에 들어오는 데이터 형식이 문자열인 JSON 형식이므로
    })
    // 서버 home.ctrl.js에서 응답하는 success(true, false) 데이터를 받으려면
    .then((res) => res.json())
    .then((res) => {});
}

