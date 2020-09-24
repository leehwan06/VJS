//자 벡틱이 무었인지 알아보자
//백틱은 이거야 ``
  //새로운 스트링이지
//저게 백틱이지 '', ""랑 다른거야
//어떻게 쓰냐?

//백틱은 ${인자}로 쓰지
/*
function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}                   //자 여기 새로운 스트링 백틱을 이용했지
                    //일반적인 ''나 ""같은 스트링은 하나하나
                    //식을 쓰듯이 써야하지만
                    //백틱은 문장중간에 단어하나 넣듯이 쓸수있어서 편해!


//변수를 하나 선언할게
//이 변수는 함수 sayHello를 호출하지
const greetNicolas = sayHello("Nicolas", 14);
//그리고 이 변수를 콘솔로그로 실행시켜보자

console.log(greetNicolas);
*/

//저 greetNicolas는 sayHello 함수의 리턴값이야 (?)
//이게 뭔말일까?
/*
자 greetNicolas는
sayHello를 실행하고
sayHello는 console.log로 뭘 찍지
그리고 console.log로 greetNicolas를 해보면
정의(undefined)되지 않았다고 나오지 (?) 에?
자
greetNicolas는 sayHello의 "실행된"
결과값이다
근데 저 sayHello함수에서 아무것도 반환하지않았지

그래서 저 greetNicolas를 정의 할려면
이렇게
*/
/*
function sayHello(name, age) {
  return  `Hello ${name} you are ${age} years old`;
}
/*
console.log가 아니라 return 으로 바꿨지
*/
/*
const greetNicolas = sayHello("Nicolas", 14);
console.log(greetNicolas);
//그리고 다시 해보면
//잘 나오네
//근데 이게 뭔소리냐 하나도 이해가 안되네;;
///그럼 이해를 돕기위해 계산기하나를 만들어보자
*/

/*
const calculator = {
  plus: function(a, b){
      return a + b;
  }
}
//여기 계산기 항목안에 plus라는 객체를만들었지
//이럼 이해할수있지
//그리고 더하기 라는 함수를만들자

const plus = calculator.plus(5, 5);
//앤 뭐냐하면
// plus라는 변수는 calculator의 plus객체를 5, 5의 인자를 주어서 실행한다라는거지
console.log(plus); //잘나오네
*/
//한번완성해보자
//저 계산기에 곱하기 빼기 나누기 제곱을 만들어보자

const calculator = {
  plus: function(a, b){
      return a + b;
  },
}
const calculator = {
  multiplication: function(a, b){
      return a * b;
  },
}

const multiplication = calculator.multiplication(5, 5);

console.log(multiplication);
