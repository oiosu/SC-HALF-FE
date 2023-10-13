// Operator
// 1. 할당연산자 (Assignment Operators)
const myAppleCount = 3;
const yourAppleCount = 49;
const totalAppleCount = myAppleCount + yourAppleCount;

let AppleCount = 4;
// 단축 연산자 
AppleCount += 20;
console.log(AppleCount);

appleCount -= 65;

appleCount *= 3;

appleCount /= 3;
console.log(appleCount);

// ** 타입 변환과 타입 강제 
// (1)
const birthYear = '1997';
//String으로 선언된 1997 값을 Number로 wrapper 한다.
console.log(Number(birthYear));
console.log(Number(birthYear) + 20);
// (2)
//만약 Number로 바뀔 수 없는 값이라면? 
console.log(Number('Hello'));
//Nan 이라는 결과값이 나온다 (오류는 아님)

// (3)
//숫자를 문자열로 wrapper 한다. 
console.log(String(30), 30);
// 30 전자 string, 후자 30 숫자 타입(각각의 타입이 다르다.)

// (4)
console.log("나는 " + 40 + "살 입니다."); //string 이지만 
// 40은 number이다. 하지만 결과를 보면 string으로 변환이 된다. 
// => 타입 강제 (자신의 타입을 버리고 다른 타입으로 변환)

// (5)
console.log("20" - 5.5);
// 다른 타입을 가진 두개를 연산을 하려면?
// 결과값 : 14.5
// 자바스크립트에서 이러한 연산도 가능하다 (타입변환과 타입강제 때문)


// 2. 비교연산자 (Comparison Operators)
const stringThree = '3';
const numberThree = 3;

console.log(stringThree == numberThree); //true 
// == : 단순하게 값이 같은지에 집중을 한다 (타입 신경x)

console.log(stringThree === numberThree); //false
// === : 값과 타입이 모두 같아야 한다 (타입 신경 o)

// 협업에서는 === 보다 == 을 권장한다.

//(1)
// string 타입의 true
const stringIsTrue = 'true';
// boolea 타입의 true
const booleanIsTrue = true;
// number 타입의 true
const numberIsTrue = 1;

// (2) 결과 
console.log(stringIsTrue === booleanIsTrue);
// false

console.log(booleanIsTrue == stringIsTrue);
// false
// false값으로 나온 이유
// :boolean 이나 string 타입은 number로 변환이 된다.
//  따라서 booleanIsTrue의 true 는 number 1로 변환이 되고
//  stringIsTrue 의 'true'는 Nan(not a number)으로 변환이 된다.
//  그래서 false 결과 값이 나오는 것이다.

console.log(booleanIsTrue == numberIsTrue);
// true

// 3. 산술연산자 (Arithmetic Operators)
let num = 3;
num++;
num--;
console.log(num);


// 4. 논리연산자 (Logical Operator)
const a1 = true && true; // true
const a2 = true && false // false
const a3 = false && true // false

const a4 = false && 3 == 4; // false

//(1) 왼쪽값이 true 일때 
// 비교 연산자에서 양쪽에 불린이 아닌 다른 값으로 이루어져 있을 때는 
// 왼쪽 값이 true이면 오른쪽에 있는 값을 바로 return 한다.
// 'dog' 뒤에 있는 연산자의 타입을 불린이 아닌 
// 온전한 값인 타입을 유지한다. 
const a5 = 'cat' && 'dog'; // true
// 다음처럼 인식을 한다.
// true && 'dog' => 'dog'
// 따라서 true 이다.
console.log(a5); // dog 결과값 

//(2) 왼쪽 값이 false 일때 무조건 false 이다. 
const a6 = false && 'cat'; // false 

//(3) 왼쪽 값이 true 이지만 오른쪽 값이 false 일때 false 값이 나온다. 
const a7 = 'cat' && false; //false 

const o1 = true || true; // true
const o2 = false || false; // true
const o3 = true || false; // true 
const o4 = false || 3 == 4; // false || false -> false


//'dog'(오른쪽 값)이 true라면 왼쪽 값 return 
const o5 = 'cat' || 'dog'; //'cat'
const o6 = false || 'cat'; //'cat'
// ===> or 연산자는 한쪽이 true 라면 true 값을 반환하되
// 반환되는 과정에서 형 변환을 하지 않고
// 그 값을 온전하게(=문자열이라면 문자열) return 한다.

const o7 = 'cat' || false; // 'cat'



// 5. 삼항연산자 (Conditional Operator)
const age = 17;
const AdultCheck = age >= 18 ? '성인' : '미성년'
// 다음과 같은 코드와 같은 뜻이다. 
if (age >= 18) return '성년';
else return '미성년';