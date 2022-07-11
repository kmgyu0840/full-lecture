"use strict";

// npm install express -s 설치
const express = require("express");
const app = express();

// 브라우저에 요청받고 반응하기 위해 (현재는 "/"에 들어오면 주는 것만)
app.get("/", (req, res) => {
    res.send("여기는 루트입니다.");
});

// 브라우저에 요청받고 반응하기 위해 (현재는 "/login"에 들어오면 주는 것만)
app.get("/login", (req,res) => {
    res.send("여기는 로그인 화면입니다.")
});

// 3000번 포트로 서버 가동 (이것만으로도 서버 가동하는 것)
app.listen(3000, () => {
    console.log("서버 가동");
});

// 서버 실행은 node app.js