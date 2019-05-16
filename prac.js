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


//=====================================================

// let obj = {property : 1, method: () => {} }

// console.log('Object.entries',Object.entries(obj))

// console.log('Object.keys',Object.keys(obj))

// console.log('Object.values',Object.values(obj))


//=====================================================


//=============================================================

// let entriesObject = Object.entries(obj)

// console.log('entriesObject[0][0] is ', entriesObject[0][0])

// console.log('entriesObject[0][1] is ', entriesObject[0][1])

//=============================================================


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


// const string = 'black*raven lime*parrot white*seagull'
// const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/
// let match
// while(match=regex.exec(string)){
//     let value = match[0]
//     let index = match.index
//     let input = match.input
//     console.log(`${value} at ${index} with ${input}`)
//     console.log(match.groups.color)
//     console.log(match.groups.bird)
// }



// function add (a,b,c,d="hi"){
//     console.log(arguments)
// }

// add(7,["a","c"],{})

// function returnString(){
//     return "returnString"
// }

// function display(text,returnString,abc){
//     console.log(text)
//     returnString()
//     console.log(abc)
// }

// display('saurabh',returnString,returnString())


// function Classic() {
//     let b = function () {
//         console.log("hello i am in classic")
//         console.log(this)
//     }
//     b()
// }

// let object = new Classic()

// class Saurabh {

//    function() {
//         console.log("Hello i am in c")
//         console.log(this)   
//     }
// }

// let saurabh = new Saurabh()



// function Hello(name) {

// }

// console.log(typeof(Hello.prototype))

// let saurabh = {
//     surname:"kacholiya",
//     age : function(){
//         console.log('hehehe cant say')
//     }
// }

// console.log(saurabh.__proto__.surname)


// let a = {
//     b : function(){
//         console.log('hello')
//     }
// }

// let c = a 

// c.b()

// let p = new p;

// let instance = new Number()
// instance.prop = 123;
// instance.meth = function(){}

// console.log(instance.__proto__)



// let array = new Array()
// Array.prototype.kuchbhi = 234
// console.log(array.kuchbhi)



// function test(){
//     var a = 1 ;
    
//     for(var a = 1; a< 5 ; a++){}

//     console.log(a)
//   }
  
  
// test()  



// const newString = () => 'Hello there'

// newString() 

// console.log(newString())




// let array = [1,2,3,4,5,6,7,8,9]

// let newArray = array.slice()

// newArray.splice(2,1)

// console.log(newArray)

// console.log(array);


