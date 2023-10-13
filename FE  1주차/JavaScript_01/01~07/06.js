// (1) 함수선언식 Function Declaration
// console.log(calcAge1(1993));
//  : 호이스팅으로 인해 먼저 호출을 해줘도 올바른 값이 나온다.

function calcAge1(birthYear) {
    return 2023 - birthYear;
}
console.log(calcAge1(1993));

// (2) 함수 표현식 Function Expression
// 함수 표현식으로 만들어진 코드는 반드시
// initialization 초기 선언이 되어지고 나서 
// 호출을 해줘야 한다. 

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
};

console.log(calcAge2(1992));

// (3) 화살표 함수 Arrow Function

const calcAge3 = (birthYear) => {
    return 2024 - birthYear;
};

console.log(calcAge3(1992));