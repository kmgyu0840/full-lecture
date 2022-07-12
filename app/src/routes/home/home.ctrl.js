"use strict";

const users = {
    id : ["qwe", "asd", "zxc"],
    pw : ["123", "456", "789"],
};


// home, login은 뷰단을 내보내주는 역할로 output으로 정의
const output = {
    home : (req, res) => {
        res.render("home/index");   // views/home/index.ejs와 연결시키는 것
    },
    login : (req,res) => {
            res.render("home/login");   // views/home/login.ejs와 연결시키는 것
        },
}

// public/js/home/login.js에서 body로 데이터를 전달 받음
const process = {
    login : (req, res) => { //인증하는 과정
        const id = req.body.id,
            pw = req.body.pw;
        console.log(id, pw);
    },
};

// routes/home/index.js에서 사용할 수 있도록 연결 역할
module.exports = {
    output,
    process,
}