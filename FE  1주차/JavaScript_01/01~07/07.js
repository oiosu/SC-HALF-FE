// 1. Array
// (1)
const fruit1 = 'apple';
const fruit2 = 'banana';
const fruit3 = 'kiwi';
const fruits = [fruit1, fruit2, fruit3];

console.log(fruits);

// (2)
const diffTypeArray = ['hello', 23, true, null];
console.log(diffTypeArray);

// 인덱스 기반으로 참조하기 
console.log(fruits[2]);
// 배열 클래스 속성 중 하나가 length 이다. (자주 사용)
console.log(fruits.length);
// 만약 배열의 값을 바꾸고 싶다면? 
// const로 선언될때는 바꿀수 없다고 했는데 값을 바뀔 수 있다.
// 원시 타입 vs 객체 타입 (서로 다르게 동작)
// array는 객체 타입에 속한다. 따라서 값을 바꿀 수 있다. 
fruits[2] = 'mango';
console.log(fruits);


// (3)
// 만약 나이를 계산한다면, (자주사용, 중요한 개념 : map)
// birthYearArray 출생년도 배열에서 
// 나이를 구하는 공식은 동일하기에, 
// 배열의 그 값을 같은 함수 로직으로 처리하여 return을 하고 싶다면 
// map을 사용하면 된다. 
// 순서대로 각각의 배열들의 원소들을 공식에 적용하여 처리한다. 
const birthYearArray = [1990, 1992, 1994];
const ageArray = birthYearArray.map(
    birthYearArray => 2023 - birthYearArray
);
console.log(ageArray);

// 2. methods
const cars = ['hyundai', 'bmw', 'audi'];
// (1) add element
cars.push('toyota');
cars.unshift(cars);
console.log(cars);

// (2) remove element
cars.pop();
cars.shift();
console.log(cars);

// (3) get index
// 같은 값이 배열안에 들어 있을시, 가장 앞에 있는 값을 찾아준다 
console.log(cars.indexOf("bmw"));
// 만약 같은 값이 배열안에 들어 있을시, 뒤에 있는 값을 찾고 싶다면,
console.log(cars.lastIndexOf("bmw"));

// (4) is contain
// 배열에 ___ 값이 들어가 있는지 확인하고 싶을 때, 
console.log(cars.includes("audi"));
console.log(cars.includes("volvo"));


// (5) 여러개의 배열 연결
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArray = [...array1, ...array2];
console.log(combineArray);

// ------------------------------------------------------

// 3. object, key-value pair
// 딕셔너리 구조

// firstName ===> property (속성)
const profile = {
    firstName: "Kevin",
    lastName: "Kim",
    age: 30,
    job: 'engineer',
    isMarried: false,
};
console.log(profile);
console.log(profile.firstName);
console.log(profile['firstName']);

// (1) 수정 
profile.age = 31;
console.log(profile);

// (2) 여러개의 오브젝트 연결
const obj1 = {
    name: 'Own',
    age: 56
};

const obj2 = {
    address: "seoul",
    job: "teacher"
};

const combineObject = {
    ...obj1,
    ...obt2
};

// (3) 
// 모든 키값을 알고 싶다면?
// 다음과 같이 코드를 작성하면, 모든 키값을 배열로 값을 확인할 수 있다. 
console.log(Object.keys(combineObject));

// map 
console.log(Object.keys(combineObject)
    .map(key => combineObject[key]));


