'use strict'

function testParser(string) {
    let correct = 'ERROR'
    try {
        correct = JSON.parse(string)
    } catch (error) {
        
    }
    console.log(string, string_revised(string), correct)
}

testParser('"saurabh"')
testParser(`"heehhe\\t1"`)
testParser(`1234"trickedYou"`)
testParser("")
testParser("")


function null_parser(data) {
    if (data.substring(0, 4) === "null") {
        return [null, data.substring(4)]
    } else {
        return null
    }
}

function boolean_parser(data) {
    if (data.substring(0, 4) === "true") {
        return [true, data.substring(4)]
    } else if (data.substring(0, 5) === "false") {
        return [false, data.substring(5)]
    } else {
        return null
    }
}

function string_parser(data) {
    if (data[0] === '"') {
        let dataAfterZeroPositionValue = data.substring(1)
        let endingSemicolon = dataAfterZeroPositionValue.search('"')
        if (endingSemicolon) {
            return [dataAfterZeroPositionValue.substring(0, endingSemicolon),
            data.substring(endingSemicolon + 2)]
        }
    } else {
        return null
    }
}

function string_revised(data) {
    if (data[0] === '"') {
        let parsedString = '';
        let length = 0;
        for (let i = 1; i < data.length; i++) {
            length+=1;
            if (data[i] === '"' && data[i-1] !== '\\') {
                break;
            }
            if(data[i] === '\\'){
                continue;
            }
            if(data[i-1] === '\\'){
                switch(data[i]){
                    case "t" : parsedString+="\t"
                    break;
                    case "n" : parsedString+="\n"
                    break;
                    case "b" : parsedString += "\b"
                    break;
                    case "r" : parsedString += "\r"
                    break;
                }
            }else{
                parsedString += data[i]
            }
        }
        return [parsedString, data.slice(length + 1)]
    } else {
        return null
    }
}
