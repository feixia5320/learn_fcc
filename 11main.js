require.config({
    //data-main的路径就是默认的baseUrl
    baseUrl: "",
    paths: {
        "fun1" : "11fun1",
    }
});


require(["fun1"], function () {

    //fun1必须在require的依赖中
    let fun = require("fun1");
    let res = fun.add(1,2);
    console.log("fun1", res)
});