
/*
console.log('Hello Nicolas');
console.log('Hello Jun');
console.log('Hello Lin');
console.log('Hello Dal');
*/

//위 상황에서 Hello를 전부 gritting으로 바꾸고 싶다.
//이럴때 함수를 쓰지

//sayHello라는 함수를 만듬


/*
function sayHello(){
  console.log('Hello!'); //위 함수는 console.log('Hello!');라는 기능을 동작한다
}

sayHello(); //저위에서 만든 sayHello라는 함수를 실행시키자
console.log("hi!"); //이건 그냥 console.log(); 를 쓴거야
          //저 log안에 넣고싶은걸 ""안에 넣으면 함수는 그걸 쓴다는거야


sayHello("Nicolas"); //여기서 저 괄호가 무엇이냐
                     //저건 인자(argument)라고 하는것이다
*/



/*
일단 "함수"는 "인자"를 받는다
기억해야할건 "인자"는 변수같은거야
우린 저 "함수"가 우리가 주는 "인자"를 가져가게해야해
그럴려면 "함수"를 만드는 시점에 "인자"설정하는거지
*/



/*
//예를들어
//요런코드에서
            //요기 "인자"자리에 "potato"라는 이름을 줬어
            //이제 이 자리이름는 "potato"야
            //그리고 이 자리이름은 나중에 함수 안에서 쓸거야
function sayHello(potato){
  console.log('Hello!', potato);   //여기에 'Hello'라는 텍스트옆에
}                                  //"potato"라는 자리를 가져다 뇠어
                                   //이제 "potato"자리에 앉는애는
                                   //저기에 앉는거

//자 이제 저자리를 채워보자
          //"potato"에 "Nicolas"라는 텍스트가 앉았어
sayHello("Nicolas")
          //그럼이제 함수를 만들때 설정한
          //"Hello"텍스트 옆에 "Nicolas"라는 텍스트도 같이 앉지
*/

/*
//그리고 인자 자리를 복수로 만들수있지
              //"chicken"이라는 자리를 만들었어
function sayHello(potato, chicken){
  console.log('Hello!', potato, 'you have', chicken, '?');
}                     //이러면 순서대로
            //Hello! "potato"자리에 앉은애 you have "chicken"자리에 앉은애?
            //라고 나오겠지

//자릴 채워보자
sayHello("hwan", "chicken");
//잘 나오네
          //함수는 우리가 데려다놓은 "hwan", "chicken"들을 잘 이해하고
          //제대로 해석해냈어!!!
*/

//이 함수들을 쓰면 우리가 원하는것을 하고싶은 만큼 편하고 쉽고 간단하게 해낼수있지


//function  1강의 끝!         
