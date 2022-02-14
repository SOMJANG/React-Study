// ES6의 배열 전개 연산자
console.log('ES6 배열 전개 연산자');
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];

console.log(combined);

// concat은 두 배열을 합치는데 활용
var combined = array1.concat(array2);

console.log(combined);

var combined = [].concat(array1, array2);

console.log(combined);

var first = array1[0];
var second = array1[1];

// || 를 활용하면 값이 비어있을때 기본 값 설정이 가능함
var three = array1[2] || 'empty';
console.log(three); // empty 출력

function func(arguments) {
    var args = Array.prototype.slice.call(arguments);
    console.log(`args : ${args}`);
    var first = args[0];
    console.log(`first : ${first}`);
    // slice를 활용하여 1부터 마지막 인덱스까지 값을 가져옴
    var others = args.slice(1, args.length);
    console.log(`others : ${others}`);
}

func(combined);

console.log('-----------------------------------------------------------------------------------------');

// ES6의 전개 연산자
// ... 이 사용 방법
console.log('ES6 전개 연산자');
var combined = [...array1, ...array2];

console.log(combined);

var newArray = [first, second, three = 'empty', ...others] = array1;

console.log(`newArray : ${newArray}`);
console.log(newArray);

function testFunc(array1) {
    var testVal = [first, ...others] = array1;
    return testVal
}

console.log(testFunc(array1));

function testFunc(...array1) {
    var testVal = [first, ...others] = array1;
    return testVal
}

console.log(testFunc(array1));

console.log('-----------------------------------------------------------------------------------------');

// ES6의 객체 전개 연산자
console.log('ES6 객체 전개 연산자');
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};

console.log(combined);

var combined = Object.assign({}, objectOne, objectTwo);

console.log(combined);

var combined = Object.assign({}, objectTwo, objectOne);

console.log(combined);

var others = Object.assign({}, combined);

console.log(others);

delete others.other

console.log(others);

console.log('-----------------------------------------------------------------------------------------');

// ES6 전개 연산자
var combined = {
    ...objectOne,
    ...objectTwo,
};

console.log(combined);

var combined = {
    ...objectTwo,
    ...objectOne,
};

console.log(combined);

// {other, ...others} = combined
// 위처럼 진행하면 combined에서 other에 대한 값과
// 그 나머지 값들 others로 나뉘어 짐
var {other, ...others} = combined;
console.log(other);
console.log(others);

var {one, ...theOthers} = others;
console.log(one);
console.log(theOthers);

// 220214 Practice JS ES6
var appleProductList = ["MacBook Pro", "iMac", "iPad Pro", "iPhone", "airPods"];
var appleCareList = ["AppleCare", "AppleCare Plus"];

var appleItemList = [appleProductList[0], appleProductList[1], appleProductList[2], appleProductList[3], appleProductList[4], appleCareList[0], appleCareList[1]];

console.log(appleItemList);

var appleAllItemList1 = [].concat(appleProductList, appleCareList);
var appleAllItemList2 = [].concat(appleProductList, appleCareList, appleItemList);
// concat 은 2개도 합쳐지고 3개도 합쳐집니다.

console.log("appleAllItemList1");
console.log(appleAllItemList1);
console.log("appleAllItemList2");
console.log(appleAllItemList2);

var item1 = appleCareList[0];
var item2 = appleCareList[1];
var item3 = appleCareList[2];

console.log(`item1 : ${item1} item2 : ${item2} item3 : ${item3}`);

var item1 = appleCareList[0];
var item2 = appleCareList[1];
var item3 = appleCareList[2] || 'empty';

console.log(`item1 : ${item1} item2 : ${item2} item3 : ${item3}`);

function func() {
    var args = Array.prototype.slice.call(arguments);
    var first = args[0];
    var others = args.slice(1, args.length);

    console.log(`args ${args}`);
    console.log(`first ${first}`);
    console.log(`others ${others}`);
};

func(item1, item2, item3);