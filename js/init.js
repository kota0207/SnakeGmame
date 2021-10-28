document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = appleY = 15;
let appleZ = appleS = 5;
let count=0;

let c = document.getElementById("count");
// console.log(c.textContent);
// c.textContent = "0";
