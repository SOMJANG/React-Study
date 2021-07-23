
// 기존 자바스크립트의 클래스 표현 방법

function Shape(x, y) {
    this.name = 'Shape';
    this.move(x, y);
}
// 함수를 생성자(constructor) 형태로 선언
// -> 상속이 필요한 변수나 함수를 prototype 객체에 할당하는 방법 사용
// -> prototype객체는 new 연산자로 생성되는 객체안에서 this연산자의 함수 및 변수 선언 위치를 참조할 수 있는 요소 <- 이 특징을 잘 활용함

// static 함수를 선언
Shape.create = function (x, y) { return new Shape(x, y); };

// 인스턴스 함수를 선언
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.area = function () {
    return 0;
};

Shape.prototype = {
    move: function (x, y) {
        this.x = x;
        this.y = y;
    },
    area: function () {
        return 0;
    }
};

var s = new Shape(0, 0);
s.area();

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.name = 'Circle';
    this.radius = radius;
}

Object.assign(Circle.prototype, Shape.prototype, {
    area: function () {
        return this.radius * this.radius;
    }
});

var c = new Circle(0, 0, 10);
c.area();

// 기존 자바스크립트에는 클래스 표현이 없어 prototype으로 클래스를 표현하였음



// ES6의 클래스 사용 방법
class Shape {
    static create(x, y) { return new Shape(x, y); }
    name='Shape';
    constructor(x, y) {
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}

var s = new Shape(0, 0);
s.area();

console.log(s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    area() {
        if (this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}

var c = new Circle(0, 0, 10);
c.area();

console.log(c.area());