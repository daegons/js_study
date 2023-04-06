"use strict"; // 이크마5에 추가됨 // 좀더 엄격하게

//////호이스팅 : 어디에 선언했는지에 상관없이 제일위로 선언을 올려주는 것
//var는 블록 스콥 무시
//const 값 할당 후 변경 불가

//()전체 괄호 묶고 마지막()로 함수 즉시 실행..
// (function hi() {
//   console.log('hihi');
// })();

const fruits = ["☢", "💯", "💘"];

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
console.log("===========forEach=========");
fruits.forEach((i) => {
  console.log(i);
});
console.log("===========test=========");

let man = [];
function frutsAry(name) {
  fruits.forEach((i) => {
    console.log(`${name}${i}`);
    let userName = `${name}${i}`;
    man.push(userName);
  });
}
frutsAry("대곤");

console.log(man);

console.clear();

const fruit = "apple, banana, orange, mango";

const result = fruit.split(",");
console.log(result);

let eat = new Array(fruit);
console.log(eat);

console.clear();
//==========90점인 사람을 찾아라!!===================
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("대곤", 29, true, 45),
  new Student("은주", 28, false, 80),
  new Student("기석", 30, true, 90),
  new Student("원정", 40, false, 66),
  new Student("테란", 18, true, 88),
];
//내방식
for (let i in students) {
  if (students[i].score === 90) {
    console.log(`${students[i].name}님은 90점 이상 입니다`);
  }
}
//다른 방식//한줄이라 return생략.. 조건 맞으면 값 변수로 ㄱㄱ
const results = students.find((man) => man.score === 90);
console.log(`${results.name}님도 90점 이상!!!!`);

//==============true인 학생들만 찾아서 배열을 만들어라!!!===============
//내방식 응용
const trueMan = students.filter((man) => {
  return man.enrolled === true;
});
console.log(trueMan);
//==============점수만! 배열로 따로 만들어라!!!===============
console.clear();
const scoreMan = students.map((score) => {
  console.log(score.score);
  return score.score;
});
console.log(scoreMan); //[45, 80, 90, 66, 88]
//==============50점 이하 학생 있으면 true ===============
console.clear();
const foorMan = students.some((foorScore) => {
  console.log(foorScore.score < 50); //4false
  return foorScore.score < 50;
});
console.log(foorMan); //true
//==============학생들의 평균점수!!!===============
//https://www.youtube.com/watch?v=3CUjtKJ7PJg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10
//30분에...
const average = students.reduce((prev, curr) => {
  console.log(prev + curr.score); //369
  return prev + curr.score;
}, 0);
console.log(average / students.length); //73.8

//==============(1)점수만 스트링으로 변환!!!(2)그리고 낮는 숫자 순으로 정렬===============
console.clear();
const string = students.map((studen) => {
  return studen.score;
});
console.log(string.toString()); //45,80,90,66,88   join()도 가능

console.log(string.sort()); //[45, 66, 80, 88, 90]

//========================JSON==================
console.clear();

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} 뛰어~~!!!`);
  },
};
console.log(rabbit); //{name: 'tori', color: 'white', size: null, birthDate: Thu Apr 06 2023 10:54:49 GMT+0900 (한국 표준시), jump: ƒ}
// JSON.stringify 적용 후
let json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);
//출력 {"name":"tori","color":"white","size":null}

console.log(`JSON.parse()적용`);

let obj = JSON.parse(json);
console.log(obj); //출력 {name: 'tori', color: 'white', size: null}
