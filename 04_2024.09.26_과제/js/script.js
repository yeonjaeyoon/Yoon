// 연산자 실습
// 실습 1
var num1 = 23;
var num2 = 12;
rst1 = num1 + num2;
document.write(`최종합계는 ${rst1} 입니다.<br/>`);

// 실습 2
var num3 = 12;
var num4 = 5;
rst2 = num3 % num4;
document.write(`두 수를 나눈 나머지 값은 ${rst2} 입니다.<br/>`);

// 실습 3
var thisYear = 2024;
thisYear++;
document.write(`내년은 ${thisYear}년 입니다.<br/>`);

// 실습 4
var myNum = 2;
document.write(`당신은 ${myNum % 2 == 0 ? "여성" : "남성"} 입니다.<br/>`);

// 실습 5

var img = "";

img += "<img src = img/kakao_01.jpg>";
img += "<img src = img/kakao_02.jpg>";
img += "<img src = img/kakao_03.jpg>";
img += "<img src = img/kakao_04.jpg>";

document.write(img);
document.write(`<br/>`);

// 변수선언
// 실습 1
var myName = "윤연재";
document.write(`안녕하세요. 만나서 반갑습니다. 저는 ${myName} 입니다.<br/>`);

// 실습 2
var currentYear = 2021;
document.write(`올해의 연도는 ${currentYear}년 입니다.<br/>`);

// 실습 3
var charImg = "<img src = img/snoopy_01.png>";
document.write(charImg);
document.write(`<br/>`);

// 실습 4
var snoopyImg = "";
snoopyImg += "<div class='snoopy'>";
snoopyImg += "</div>";
document.write(snoopyImg);
document.write(`<br/>`);