
//npm i -g bower
// npx create-react-app +name file
// cd + name file
// npm start


//bt4
// let person = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
// let {address}=person;
// let {city}=address;
// console.log(city);
// let {address:{city}}=person  méo dc
//bt1 Spread Syntax ( dùng để tránh tham chiếu với biến array obj)
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3=[...arr1,...arr2];
// console.log(arr3);
//bt 2
// let originalArray = [1, 2, 3];
// let copiedArray=[...originalArray];
//bt 3
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3={...obj1,...obj2}
// console.log(obj3);
// bt4
// let originalObject={a:1,b:3};
// let copiedObject={...originalObject};
// bt5
// let obj1 = {name: 'A', age: 20};
// let B={ score: 20,...obj1 }
//bt1 Map, filter
let a={id:1,name: 'A', age: 20,score:1};
let b={id:2,name: 'b', age: 20,score:1};
let c={id:3,name: 'c', age: 20,score:1};
let arr=[a,b,c]
// let sum=0;
// arr.map(x => {
//     sum+=x.score;
// })
// console.log(sum);
//bt2
// let arr1=arr.filter(x=>x.name==="A");
// console.log(arr1.length);
//bt3
//  let arr1=arr.filter(x=>x.name!=="A");
// console.log(arr1.length);