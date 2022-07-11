"use strict";

// 서버 가동 (이것만으로도 서버 가동하는 것)
const app = require("../app")  //app.js에서 app을 사용할 수 있도록 연결하는 역할
const PORT = 3000
app.listen(PORT, () => {
    console.log("서버 가동");
});