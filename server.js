"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_data_js_1 = require("./users.data.js");
(0, users_data_js_1.getData)()
    .then(function (data) {
    hello.sayHello();
    console.log(data);
    hello.sayGoodBye();
}).catch(function (err) {
    console.error("ERROR: User data not returned");
});
//# sourceMappingURL=server.js.map