"use strict";

class UserStorage {
    static #users = { //외부에서 다이렉트 접근하지 못하도록 #으로 은닉화
        id : ["qwe", "asd", "zxc"],
        pw : ["123", "456", "789"],
        nm : ["가나", "다라", "마바"],
    };

    // 외부에서 데이터를 받을 수 있도록 메서드를 활용해야함
    // 클래스에서 변수 접근하기 위해서는 static을 사용해야함
    // 여러개의 데이터를 받기 위해서 ...fields 활용
    // reduce함수 숙지
    static getUsers(...fields) {
        const users = this.#users;
        const newUser = fields.reduce((newUser, field) => {
            if (users.hasOwnProperty(field)) { //users에서 해당하는 키값이 있는지 있으면 true
                newUser[field] = users[field];    //키와 값
            }
            return newUser;  
        }, {});
        return newUser;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);  //  => [id, pw, nm] 형태로 들어옴
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; // [qwe, 123, 가나]가 만들어짐
    }
}

// routes/home/home.ctrl.js에서 사용할 수 있도록 연결 역할
module.exports = UserStorage;