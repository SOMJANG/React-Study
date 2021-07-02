// 기존 자바스크립트 문자열, 변수 선언 사용 방법

var string1 = '안녕하세요';
var string2 = '반갑습니다';

var greeting = string1 + string2;

var product = {product_name: '도서', product_price: '4200원'};

var message = '제품' + product.product_name + '의 가격은 ' + product.product_price + '입니다';

var multiLine = '문자열1\n문자열2';

var value1 = 1;
var value2 = 2;

var boolValue = false;

var operator1 = '곱셈값은 ' + (value1 * value2) + '입니다.';

var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';

console.log('기본 자바스크립트 문자열 사용');
console.log(greeting);
console.log(message);
console.log(multiLine);

console.log(operator1);
console.log(operator2);
console.log('-----------------------------------------------------------------------------------------');

// 맨 마지막에 ; 입력하는거 잊지 않기!

// 출력은 console.log(값);

// js 코드를 실행 시키려면 
// $ node 파일이름.js

// -----------------------------------------------------------------------------------------

// ES6의 문자열 사용 방법
// 템플릿 문자열 ( template string )
// 사용해보니 python3.6 이상에서 사용 가능한 f-string 기능과 매우 비슷함
// multiline 같은 경우에는 python의 """ """ <= 따옴표 세개 기능과 유사해 보였음
// '' 따옴표 사용이 아닌 `` 사용

var greeting = `${string1} ${string2}`;

var message = `제품 ${product.product_name}의 가격은 ${product.product_price}입니다.`;

var multiLine = `문자열1
문자열2`;

var operator1 = `곱셈값은 ${value1 * value2}입니다.`;

var operator2 = `불리언 값은 ${boolValue ?  '참' : '거짓'}입니다.`;

console.log('ES6 템플릿 문자열 사용')
console.log(greeting);
console.log(message);
console.log(multiLine);

console.log(operator1);
console.log(operator2);
console.log('-----------------------------------------------------------------------------------------');

// 실습
console.log('실습 코드');
var cart = {book_name: '도서', book_price: 1500};
var getTotal = function(cart) {
    return `${cart.book_price}원`;
};

var myCart = `장바구니에 ${cart.book_name}가 있습니다.
총 금액은 ${getTotal(cart)}입니다.`;

console.log(myCart);