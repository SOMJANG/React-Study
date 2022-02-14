// 220214 var let const Practice

var varNum = 1;

if (true) {
    varNum = 3
}

console.log(varNum);

let letNum = 1;

if (true) {
    let letNum = 3
}

console.log(letNum);

// error case 
const constNum = 2;

try {
    constNum = 3;    // 불변 변수이기 때문에 = 으로 값을 할당할 수 없음
} catch (error) {
    console.log(error);
}

console.log(constNum);

// 만약 불변 변수의 값을 바꾸어야 한다면!
// concat, slice와 같은 무결성 내장 함수를 활용하여 값을 꺼내어 새로운 불변 변수에 할당해줍니다.

const iPhone12 = 1200000;
const iPhone13 = iPhone12 + 300000;

const appleProductList = {iphone12: iPhone12, iPhone13: iPhone13};

console.log(appleProductList);

const appleProductList2022 = {...appleProductList, iPhone14: iPhone13 + 200000};

console.log(appleProductList2022);


const apple2022ProductList = ["AirPods 3th Gen", "AirPods Pro 2th Gen", "M2 MacBook Pro", "MacBook Pro M2 Max 16"];

const macBookList = apple2022ProductList.slice(2, 4);

console.log(macBookList);

const mSeriesMacBook = apple2022ProductList.slice(2, apple2022ProductList.length);

console.log(mSeriesMacBook);