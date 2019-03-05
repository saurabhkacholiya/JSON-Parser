'use strict'

function testParser(string) {
    let correct = 'ERROR'
    try {
        correct = JSON.parse(string)
    } catch (error) {

    }
    console.log(string, number_parser(string), correct)
}

testParser("satuv")
testParser("1234e32satufb")
testParser("---132244345")
testParser("falfjal12ekdsf")
testParser("e21sataufbhas")


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
        let parsedString = '';
        let length = 0;
        for (let i = 1; i < data.length; i++) {
            length += 1;
            if (data[i] === '"' && data[i - 1] !== '\\') {
                break;
            }
            if (data[i] === '\\') {
                continue;
            }
            if (data[i - 1] === '\\') {
                switch (data[i]) {
                    case "t": parsedString += "\t"
                        break;
                    case "n": parsedString += "\n"
                        break;
                    case "b": parsedString += "\b"
                        break;
                    case "r": parsedString += "\r"
                        break;
                }
            } else {
                parsedString += data[i]
            }
        }
        return [parsedString, data.slice(length + 1)]
    } else {
        return null
    }
}

function number_parser(data) {
    let regex = /^-?(?:[1-9][0-9]*|0)(?:.[0-9]+)?(?:[eE][+-]?[0-9]+)?/
    let match = data.match(regex)
    if (match) {
        console.log("match", match)
        return [Number(match[0]), data.slice(match[0].length)]
    }
    return null;
}

function value_parser(data) {
    return (string_parser(data) || number_parser(data) || null_parser(data) ||
        boolean_parser(data))
}