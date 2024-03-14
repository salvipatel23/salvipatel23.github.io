"use strict";


import {sayHello, sayGoodBye} from './hello.js'
import { getData} from './users.data.js'

getData()
    .then(function (data){
    sayHello();
    console.log(data);
    sayGoodBye();
}).catch(function (err){
    console.error("ERROR: User data not returned");
});

