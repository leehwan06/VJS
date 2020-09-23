//Array와 Objact와의 다른점 Obj는 각각의 value에 이름을 붙힐수있다
//Array는 [2]
//Obj는 {이름}
//Obj는 {} 컬리브라켓을 쓴다




const nicoInfo = {
  name: "Nico", //변수처럼쓴다
  age: 33,
  gender: "Male",
  ishandsome: true,
  favMovies: ["Along the gods", "Harry potter"], //Array도 사용가능
  favFood: [{
      name: "Kimchi",
      fatty: false
    },
    {
      name: "Cheese burger",
      fatty: true
    }
  ]
};


/*
console.log(nicoInfo);
*/
console.log(nicoInfo.gender);
// [2] 이런식이아니라 Obj는  .을 쓰고 항목을 쓰면된다

nicoInfo.gender = "Female"; // Obj 항목을 변수로도 활용 가능

console.log(nicoInfo.gender);

//DB에서 가져올떈 주로 Array를 쓴다
