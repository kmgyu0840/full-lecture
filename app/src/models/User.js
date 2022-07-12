"use strict";

// UserStorage 데이터를 가져오기 위해
const UserStorage = require("./UserStorage");

//body에 항상 데이터를 가지고 다닐 수 있게
class User {
    constructor(body) {
        this.body = body;
    }

    //로그인 검증하는 로직
    login(){
        const body = this.body;
        const { id, pw } = UserStorage.getUserInfo(body.id); //UserStorage의 id, pw 데이터를 가지고 옴
        
        if (id) {
            //UserStorage에서 가져온 id와 client가 입력한 body의 id가 같고 UserStorage의 pw와 client가 입력한 body의 pw가 같은지
            if (id === body.id && pw === body.pw) {
                return {success : true};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success:false, msg:"존재하지 않는 아이디입니다."}
    }
}

//home.ctr.js에서 사용할 수 있도록
module.exports = User;