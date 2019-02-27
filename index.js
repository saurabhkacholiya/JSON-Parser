'use strict'

function testParser(string) {
    console.log(string, string_parser(string))
}

testParser('"saurabh"')
testParser(`"hee\"hhe"1234`)
testParser(`1234"trickedYou"`)
testParser("")
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
        return null
    }
}

function string_parser(data){
    if(data[0] === '"'){
       let dataAfterZeroPositionValue = data.substring(1)
       let endingSemicolon = dataAfterZeroPositionValue.search('"')
        if (endingSemicolon){
            return [dataAfterZeroPositionValue.substring(0,endingSemicolon),
                data.substring(endingSemicolon+2)]
        }
    }else{
        return null
    }
}

