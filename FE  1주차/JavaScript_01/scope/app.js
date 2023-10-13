// strict mode 를 작성하는 이유 
// : 자바스크립트가 원칙대로 맞음, 틀림을 엄격하게 판단을 원한다면
// strict mode 라는 키워드를 넣어서 사용한다 
// (자주 사용하지 않지만 실습을 위해)

'strict mode'

function calcAge(birthYear) {
    const age = 2025 - birthYear;
    return age;
}

const firstName = 'su';
console.log(calcAge(1990));