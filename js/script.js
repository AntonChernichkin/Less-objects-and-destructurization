"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest(); //вызов метода из объекта

const {border, bg} = options.colors; //деструктуризация объекта

console.log(border);

// console.log(options.name);

delete options.name; //удаление свойства/ключа

console.log(options);

for (let key in options) { //перебор ключей в объекте
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) { //перебор ключей во вложенном объекте
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options)); //перебор ключей из объекта в массив
console.log(Object.keys(options).length); //количество элементов в этом массиве