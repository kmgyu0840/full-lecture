"use strict";

// models/UserStorage를 사용하기 위해
const UserStorage = require("../../models/UserStorage");

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
        
        // UserStorage 데이터를 불러오기(받아오기) 위한 역할
        // 지금처럼 직접 접근하는 것은 불가하도록 해야함 (UserStorage에서 #으로 은닉화함)
        // getUsers 메서드 안에 원하는 데이터 컬럼명을 적어 불러올 수 있음
        const users = UserStorage.getUsers("id", "pw");
        
        // response 정의하여 true, false 따로 정의
        const response = {};
        if (users.id.includes(id)) {  //해당 id 확인 후 해당 index 불러오기
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) { //불러온 index 비밀번호만 일치하는지
                response.success = true;
                return res.json(response);  //로그인에 성공하면 success:true 오브젝트를 json으로 프론트로 응답
            }    
        }
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);  //실패하면... 
    },
};

// routes/home/index.js에서 사용할 수 있도록 연결 역할
module.exports = {
    output,
    process,
}