// 함수 Function
// (1)
function logger() {
    console('logging...');
}
//함수 실행이 되지 않은 이유 : 함수를 선언했지만 호출하지 않기 때문

// - 함수 호출
// 함수는 한번 혹은 여러번 호출이 가능하며 
// 그에 대한 결과값은 같다. 
// 단, 값이 같아야 여러변 호출이 가능하다. 
logger()

// (2)
function bySomeFruits(bananaCount) {
    const fruits = `바나나 ${bananaCount} 개를 샀다.`;
    return fruits;
}

const bananas = bySomeFruits(5);
console.log(bananas);

// 만약 매개변수를 여러개 넣어주면?
function bySomeFruits(bananaCount, lemonCount) {
    const fruits = `바나나 ${bananaCount}개, ${lemonCount}개를 샀다.`;
    return fruits;
}

const bananasAndLemon = bySomeFruits(5, 9);
console.log(bananas)
