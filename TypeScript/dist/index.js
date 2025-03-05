"use strict";
// Tipos Básicos
let age = 5;
const firstName = 'Lucas';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Lucas", "Wendel"];
//Tupla serve para garantir valores e ordem
const person = [1, "Lucas"];
// Lista de tuplas
const people = [
    [1, "Lucas"],
    [2, "Wendel"]
];
//Intersections
const productId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
