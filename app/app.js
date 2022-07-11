"use strict";

// npm install express -s 설치
const express = require("express");
const app = express();

// npm install ejs -s 설치
//뷰단에 해당 부분을 처리해 줄 수 있는 뷰엔진 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// routes/home/index.js에 있는 router를 연결하는 역할 (미들 웨어)
const home = require("./src/routes/home");
app.use("/", home);

// login.ejs와 js/home/login.js를 연결 역할 (미들 웨어)
app.use(express.static(`${__dirname}/src/public`));

// bin/www.js에서 app을 사용할 수 있도록 연결 역할
module.exports = app;

// 서버 실행은 node app.js







// // http 내장 함수 사용하여 서버 가동
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if (req.url === '/') {
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면 입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.")
// });