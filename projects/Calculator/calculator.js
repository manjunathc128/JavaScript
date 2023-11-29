'use strict';

const text = document.querySelector('.calc-display');

const EL0 = document.querySelector('#EL0');
const EL1 = document.querySelector('#EL1');
const EL2 = document.querySelector('#EL2');
const EL3 = document.querySelector('#EL3');
const EL4 = document.querySelector('#EL4');
const EL5 = document.querySelector('#EL5');
const EL6 = document.querySelector('#EL6');
const EL7 = document.querySelector('#EL7');
const EL8 = document.querySelector('#EL8');
const EL9 = document.querySelector('#EL9');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const div = document.querySelector('#div');
const mul = document.querySelector('#mul');
const equal = document.querySelector('#equal')

// console.log(EL1)
// let ;

EL0.addEventListener('click', function () {
    let currentText = text.textContent

    text.textContent=`${currentText}${EL0.textContent}`;
});

EL1.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL1.textContent}`;
});

EL2.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL2.textContent}`;
});

EL3.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL3.textContent}`;
});

EL4.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL4.textContent}`;
});

EL5.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL5.textContent}`;
});

EL6.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL6.textContent}`;
});

EL7.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL7.textContent}`;
});

EL8.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL8.textContent}`;
});

EL9.addEventListener('click', function () {
    let currentText = text.textContent
    text.textContent=`${currentText}${EL9.textContent}`;
});

plus.addEventListener('click',function(){
    let currentText = text.textContent

    text.textContent= `${currentText} + `;
})

minus.addEventListener('click',function(){
    let currentText = text.textContent
    text.textContent= `${currentText} - `;
})

mul.addEventListener('click',function(){
    let currentText = text.textContent
    text.textContent= `${currentText} * `;
})

div.addEventListener('click',function(){
    let currentText = text.textContent
    text.textContent= `${currentText} / `;
})

let calcResult = function (array){
    let result = Number(array[0])
    for (let i=0; i < array.length; i++) {
        console.log(i)
        if (array[i] == '+'){
            result = result + Number(array[i + 1])
            console.log(result)
        }else if(array[i] == '-'){
            result = result - Number(array[i + 1])
            console.log(result)
        }else if(array[i] == '*'){
            result = result * Number(array[i + 1])
            console.log(result)
        }else if(array[i] == '/'){
            result = result / Number(array[i + 1])
            console.log(result)
        }
        
    }
        console.log(result)
        return result 
    };


equal.addEventListener('click',function(){
    let currentText = text.textContent

    console.log(typeof currentText,currentText)
    let arr = currentText.split(' ')

    console.log(arr)
     
    text.textContent= calcResult(arr);
})




// const insertText = function (element){
//     element.addEventListener('click', () => {
//         text.textContent=element.textContent;
//     });
// };

// document.addEventListener('click',insertText(EL3))









