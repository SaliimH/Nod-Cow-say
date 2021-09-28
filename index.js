const infos = require('./information.js');

console.log(`Hi, my name is ${infos.name} and I'm ${infos.age} years old and i'm in ${infos.campus} at Wild code school.`);



const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${infos.name} and I'm ${infos.age} years old and i'm in ${infos.campus} at Wild code school.`,
    e : "@@",
}));
