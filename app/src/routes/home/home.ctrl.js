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
        
        if (users.id.includes(id)) {  //해당 id 확인 후 해당 index 불러오기
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) { //불러온 index 비밀번호만 일치하는지
                return res.json({  //로그인에 성공하면 success:true 오브젝트를 json으로 프론트로 응답
                    success: true,
                });
            }    
        }
        return res.json({  //실패하면... 
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

// routes/home/index.js에서 사용할 수 있도록 연결 역할
module.exports = {
    output,
    process,
}