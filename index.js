'use strict'

function testParser(string) {
    console.log(string, boolean_parser(string))
}

testParser("true ")
testParser(" true ")
testParser("false")
testParser("_trueFalse")
testParser("")


function null_parser(data) {
    if(data.substring(0,4) === "null"){
        return [null,data.substring(4)]
    }else{
        return null
    }
}

function boolean_parser(data){
    if(data.substring(0,4) === "true"){
        return [true,data.substring(4)]
    }else if(data.substring(0,5) === "false"){
        return [false,data.substring(5)]
    }else{
        return null;
    }
}