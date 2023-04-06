console.clear();
//===================================

/// Promise js 내장 / 비동기

//1.state

//2.정보 제공자, 소비자 염두

//===============정보 제공자===================
//네트워크 통신, 파일 읽어오는것 헤비한것들 비동기 추천
const promise = new Promise((resolve, reject) => {
  console.log(`뭘 하는중....`);
  setTimeout(() => {
    // resolve("daegon");
    reject(new Error("no network"));
  }, 2000);
});

//===============정보 소비자: then, catch, finally===================
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`finally`); //무조건 수행
  });

//===============Promise chaining===================

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num)); //5
//======================================================

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`🙁`);
    }, 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} =>😟`);
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg}=>😭`);
    }, 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
