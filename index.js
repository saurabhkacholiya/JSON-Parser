'use strict'

function testParser(string) {
    console.log(string, null_parser(string))
}

testParser("null ")
testParser(" null ")
testParser("12null ")
testParser("null123")

function null_parser(data) {
    if(data.substring(0,4) === "null"){
        return [null,data.substring(4)]
    }else{
        return null
    }
}