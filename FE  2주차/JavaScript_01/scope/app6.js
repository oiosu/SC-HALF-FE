console.log(this);

const calcAge = function (birthYear) {
  console.log(this);
};
// calcAge(1990);

const calcAgeArrow = (birthYear) => {
  console.log(this);
};

const profile = {
  firstName: "Kevin",
  year: 1991,
  calcAge: function () {
    console.log(this);

    // 만약 안에서 함수를 선언해주면 어떻게 될까?
    const isMillenial = () => {
      console.log(this);
    };
    isMillenial();
  },
};

profile.calcAge();
