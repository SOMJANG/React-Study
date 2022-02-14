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

// 220214 Practice JS ES6
var product1 = "맥북"
var product2 = "아이폰"
var product3 = "아이맥"

var appleProductStr = "애플의 제품에는" + " " + product1 + ", " + product2 + ", " + product3 + "등 이 있습니다.";

console.log(appleProductStr);

var appleProductInfo = {mac: "맥북", iphone: "아이폰", imac: "아이맥"};

var appleProductStr = "애플의 제품에는 " + appleProductInfo.mac + ", " + appleProductInfo.iphone + ", " + appleProductInfo.imac + "등 이 있습니다.";

console.log(appleProductInfo);
console.log(appleProductStr);

var samsungProductInfo = {s22: "갤럭시S22", tab: "갤럭시탭", book: "갤럭시북"}

var samsungProductStr = "삼성의 제품에는 " + samsungProductInfo.s22 + ", " + samsungProductInfo.tab + ", " + samsungProductInfo.book + "등 이 있습니다.";

console.log(samsungProductStr);

var isGalaxy = false;

var productStr = (isGalaxy ? samsungProductStr : appleProductStr);

console.log(productStr);

isGalaxy = true;
// 이렇게 isGalaxy를 true 로 바꾸었다고 해서

// var product_list_str = (isGalaxy ? samsung_product_str : apple_product_str);

console.log(productStr);
// 여기서 삼성이 나오는 것은 아님.

// Template 문자열로 바꾸는 작업해보기
var appleProductTempStr = `애플의 제품에는${appleProductInfo.mac}, ${appleProductInfo.iphone}, ${appleProductInfo.imac} 등 이 있습니다.`;

console.log(`템플릿 문자열로 변경한 결과\n${appleProductStr}`);