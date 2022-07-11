"use strict";

// express활용하기 위해 정의
const express = require("express");
const router = express.Router();    //라우트를 담당하는 곳이라서 app이 아닌 router

// routes/hom/home.ctrl.js과 연결 역할
const ctrl = require("./home.ctrl");

// 브라우저에 요청받고 반응하기 위해 (현재는 "/"에 들어오면 주는 것만) (라우팅)
router.get("/", ctrl.home);

// 브라우저에 요청받고 반응하기 위해 (현재는 "/login"에 들어오면 주는 것만) (라우팅)
router.get("/login", ctrl.login);

//app.js에서 사용할 수 있도록 연결하는 역할
module.exports = router;