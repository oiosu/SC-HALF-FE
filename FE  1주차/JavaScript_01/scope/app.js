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
// console.log(age); : 에러 발생===> scope와 연관있음


// -----------------------------------

// 어떤 함수 바깥에서 변수 선언이 되면 
// 안에 있는 함수는 바깥에서 불러오는 것은 가능하다.
function calcAge(birthYear) {
    const age = 2025 - birthYear;

    function printAge() {
        const output = `${firstName}님, 당신은 ${age}살 입니다.`
        console.log(output);
    }

    printAge();

    return age;
}

const firstName2 = "su"
calcAge(1990);