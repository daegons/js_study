'use strict'; // 이크마5에 추가됨 // 좀더 엄격하게

//////호이스팅 : 어디에 선언했는지에 상관없이 제일위로 선언을 올려주는 것
//var는 블록 스콥 무시
//const 값 할당 후 변경 불가

//()전체 괄호 묶고 마지막()로 함수 즉시 실행..
// (function hi() {
//   console.log('hihi');
// })();

const fruits = ['☢', '💯', '💘'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(`=========let i of fruits===========`);

for (let i of fruits) {
  console.log(i);
}
console.log(`=========let i in fruits==========`);
for (let i in fruits) {
  console.log(fruits[i]);
}
console.log('===========forEach=========');
fruits.forEach((i) => {
  console.log(i);
});
console.log('===========test=========');

let man = [];
function frutsAry(name) {
  fruits.forEach((i) => {
    console.log(`${name}${i}`);
    let userName = `${name}${i}`;
    man.push(userName);
  });
}
frutsAry('대곤');

console.log(man);

console.clear();

const fruit = 'apple, banana, orange, mango';

const result = fruit.split(',');
console.log(result);

let eat = new Array(fruit);
console.log(eat);
