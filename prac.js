'use strict'

// console.log('i am awesome ')

// let c = 0;
// mark: for (let i = 0; i < 5; i++) {
//     inner: for (let j = 0; j < 5; j++) {
//         c++
//         console.log(c, j, i)
//         if (i === 2) {
//             break mark
//         }
//     }
// }

// console.log('==========')
// console.log('c value is ', c )
// console.log('==========')


// let string = 'saurabh';

// for(let value in string){
//     console.log('for  each ',value)
// }

// for(let value of string){
//     console.log('for of',value)
// }


// let obj = {property : 1, method: () => {} }

// console.log('Object.entries',Object.entries(obj))

// console.log('Object.keys',Object.keys(obj))

// console.log('Object.values',Object.values(obj))


// let entriesObject = Object.entries(obj)

// console.log('entriesObject[0][0] is ', entriesObject[0][0])

// console.log('entriesObject[0][1] is ', entriesObject[0][1])


// let object = {
//     a : 1,
//     b : 2,
//     c : 3,
//     method : () => {},
// }

// for(let index in object){
//     console.log(object[index])
// }

// console.log([5,6,7].forEach(e => console.log("e is ",e)))

// let array = [1,2,3]

// let forEachExample = function(item, value, object){
//     console.log('item',item)
//     console.log('value',value)
//     console.log('object',object)
// }

// console.log(array.forEach(forEachExample))


// let string = "HeLlo World"

// let matches = string.match("l")

// console.log(matches)


const string = 'black*raven lime*parrot white*seagull'
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/
let match
while(match=regex.exec(string)){
    let value = match[0]
    let index = match.index
    let input = match.input
    console.log(`${value} at ${index} with ${input}`)
    console.log(match.groups.color)
    console.log(match.groups.bird)
}
