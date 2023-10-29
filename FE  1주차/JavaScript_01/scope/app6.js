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
  },
};

profile.calcAge();
