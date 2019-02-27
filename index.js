'use strict'

function null_parser(data) {
    if(data.subString(0,4) === "null"){
        return [null,data.subString(4)]
    }else{
        return null
    }
}