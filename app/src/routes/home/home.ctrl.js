"use strict";

const home = (req, res) => {
    res.render("home/index");   // views/home/index.ejs와 연결시키는 것
}
const login = (req,res) => {
        res.render("home/login")   // views/home/login.ejs와 연결시키는 것
    }

// routes/home/index.js에서 사용할 수 있도록 연결 역할
module.exports = {
    home,
    login,
}