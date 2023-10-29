// call, apply, bind
const koreanAir = {
  airline: "KoreanAir",
  iataCode: "KAL",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name}이 ${this.airline} 항공의 
        ${this.iataCode}${flightNum}예약했습니다.`
    );
    // booking이 될때마다 배열에 내역들을 넣어주고 싶다면?
    // this로 내역들을 참조할 수 있다.
    this.booking.push({
      flight: ` ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

koreanAir.book(123, "su");
koreanAir.book(456, "kim");

// 아시아나 항공
const asiana = {
  airline: "Asiana",
  iataCode: "ASA",
  booking: [],
};

// call
// 인자들을 하나씩 받는지
book.call(asiana, 23, "sara");

// apply
// 인자들을 배열로 받는지
const flightData = [222, "GID"];
book.apply(asiana, flightData);

// bind
// 조금 더 간편한 방식
const bookASA = book.bind(asiana);
bookASA(66, "Rebecca");
console.log(asiana);

// 응용
// 항공 번호가 같다면 이름만 적어주면 된다.
const bookASA55 = book.bind(asiana, 55);
bookASA55("Micheal");
console.log(asiana);
