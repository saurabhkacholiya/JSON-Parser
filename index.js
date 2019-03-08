'use strict'

function testParser(string) {
    let correct = 'ERROR'
    try {
        correct = JSON.parse(string)
    } catch (error) {

    }
    console.log(string, array_parser(string), correct)
    console.assert(JSON.stringify((array_parser(string) || [])[0]) === JSON.stringify(correct))
}

testParser("[1")
testParser("[1 ,            2 ]")
testParser(`[
    "a",
    "b",
    12,
    null
]`)
testParser("[5]")
testParser(" []")
testParser("[ajfalsdjf")


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
        return [parsedString, data.substring(length + 1)]
    } else {
        return null
    }
}

function number_parser(data) {
    let regex = /^-?(?:[1-9][0-9]*|0)(?:.[0-9]+)?(?:[eE][+-]?[0-9]+)?/
    let match = data.match(regex)
    if (match) {
        return [Number(match[0]), data.substring(match[0].length)]
    }
    return null;
}

function value_parser(data) {
    return (string_parser(data) || number_parser(data) || null_parser(data) ||
        boolean_parser(data))
}

function remove_white_spaces(data) {
    let regexFroWhiteSpace = /\s+/
    for (let i = 0; i < data.length; i++) {
        let result = regexFroWhiteSpace.test(data[i])
        if (result) {
            continue;
        } else {
            data = data.substring(i);
            break;
        }
    }
    return data
}


function array_parser(data) {
    let previous = '';
    if (data[0] !== '[') return null; 
    data = data.substring(1)
    let newArray = []
    while (data) {
        data = remove_white_spaces(data)
        if(previous === ',' && data[0] === ']') return null
        if(previous === 'value' && data[0] !== ']') return null
        if (data[0] === ']') return [newArray, data.substring(1)]
        let result = value_parser(data)
        if (result) {
            newArray.push(result[0])
            data = result[1] 
            data = remove_white_spaces(data)
        }
        previous = 'value'
        if (data[0] === ',') {
            data = remove_white_spaces(data.substring(1))
            previous = data[0]
        }
        if(data === "" && data[data.length-1] !== ']'){
            return null
        }
        continue;
    }
    return [newArray, data]
}