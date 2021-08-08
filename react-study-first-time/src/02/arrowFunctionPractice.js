// 기존 자바스크립트
function add(first, second) {
    return first + second;
}

var add = function(first, second) {
    return first + second;
};

console.log(typeof(add));

// ES6
var add = (first, second) => {
    return first + second;
};

var add = (first, second) => first + second;

var addAndMultiple = (first, second) => ({add: first + second, multiply: first * second});

console.log(addAndMultiple(3, 30));


function addNumber(num) {
    return function (value) {
        return num + value;
    };
}

var addNumber = num => value => num + value;

console.log(addNumber(3, 3));



var calculateHousePrice = (officialPrice, primiumPrice) => `공식 가격은 ${officialPrice} 이며 프리미엄 가격은 ${primiumPrice} 로 최종 지불 금액은 ${officialPrice + primiumPrice} 입니다.`;

console.log(calculateHousePrice(300, 20000));

// value = 10 부분에서 오류남
class MyClass {
    value=10;
    constructor() {
      var addThis2 = function(first, second) {
        return this.value + first + second;
      }.bind(this);
      var addThis3 = (first, second) => this.value + first + second;
    };
  };

somjangClass = new MyClass()

console.log(somjangClass.addThis3(30, 30));