// ******************** 절대 잊어버리면 안될 사항 ********************
// 코드 작성 Tip )
// 1. 들여쓰기는 철저히 하자. / 퍼블리싱은 소스가 브라우저에서 다 보이기 때문에 정렬된 소스를 보여주는게 좋다
// 2. 함수를 정의할때 줄바꿈을 잘하자. 변수 선언 및 변수 할당과 조건문의 사이에 줄바꿈을 넣어주면 변수선언과 조건문의 코드가 분리되므로, 소스를 알아보기 쉬워진다.
// 3. Javascript에서 함수를 정의할때는 꼭! 첫글자는 소문자인 카멜케이스를 사용하자 ! Ex) CloseEvent(잘못된 표현), closeEvent(옳은 표현)
// 4. 개발자 보관용 소스와 사용자나 배포할 소스는 복사해서 따로 관리하자! ex) 개발자 보관용 소스에서 개발을 진행하다가 배포할때 되면 통쨰로 복사해서 이름만 바꾸어 놓는다!
// 5. 배포할 소스에는 주석은 웬만하면 다 지우자. / 주석이 보이면 소스 보기에서 볼경우 퍼블리셔가 무슨생각으로 개발했는지 다 보이기 때문에 배포용 소스에서는 다 지우자. / 프로그램에 전혀 영향을 주지 않는다.
// 6. 배포할 소스에는 console.log 함수는 다 지워주자. / 이유는 5번사항과 같다. / 프로그램에 전혀 영향을 주지 않는다.
// ******************** 절대 잊어버리면 안될 사항 ********************

$(function () {
  /*햄버거메뉴 클릭*/
  $(".menuBtn").click(function (ev) {
    ev.preventDefault();

    $(this).toggleClass("active");
    $(".menuwrap").toggleClass("visible");
  });
});

// Tip) Jquery 와 $는 같은 표현이다. 바꿔도 잘 되므로 바꿔서 사용하도록 하자.
// 혹시나 안되는 경우가 있을수 있으므로 긁어온 코드는 밑에 줄과 같이 주석처리해서 소스를 까먹지 않도록 하자
$(document).ready(function ($) {
  // jQuery(document).ready(function($) {

  $(".header").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

//메뉴이동
jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

// Tip) 개발용 소스에서는 가져온 부분은 표시해놓도록 하자. 나중에 내가 짠건지 가져온건지 모르면 난감한 경우가 많다.
//tab
new CBPFWTabs(document.getElementById("tabs"));

// Source Solve) premier 함수를 실행하라. 매개변수는 1을 넘겨준다.
premier(1);

// Source Solve) premier 함수를 정의한다. 매개변수는 n으로 지정한다.
function premier(n) {
  // Source Solve) for문을 실행한다. 실행조건의 변수는 i이며 1로 정의한다. i가 9보다 작을때까지 1씩 더해가며 for문을 실행한다.
  for (var i = 1; i < 9; i++) {
    // Source Solve) HTML 소스에서 ID가 premier + i ex)premier1 인 이름의 Element를 가져와서 obj라는 변수에 저장한다.
    var obj = document.getElementById("premier" + i);

    // Source Solve) HTML 소스에서 ID가 premier_button + i ex)premier_button 인 이름의 Element를 가져와서 menu라는 변수에 저장한다.
    var menu = document.getElementById("premier_button" + i);

    // Tip) Javascript에서 == 와 === 두가지 의 비교 연산자가 존재하는데, == 는 두 변수의 값만 비교하며, ===는 두 변수의 타입까지 비교한다.
    // Example ) "1" == 1 은 true 반환  / "1" === 1 은 false 반환

    // Source Solve) n ( 매개변수 )의 값이 i ( for 정의 변수 )의 값과 동일하다면 if문의 코드문을 실행한다.
    if (n == i) {
      // Source Solve) obj 변수에 담김 값의 style 속성, display 속성의 값을 "block"로 변경한다.
      obj.style.display = "block";
      // Source Solve) menu 변수에 담김 값의 style 속성, background 속성의 값을 "#fff"로 변경한다.
      menu.style.background = "#fff";
      // Source Solve) menu 변수에 담김 값의 style 속성, color 속성의 값을 "#ffaea5"로 변경한다.
      menu.style.color = "#ffaea5";
      // Source Solve) n ( 매개변수 )의 값이 i ( for 정의 변수 )의 값과 동일하지 않다면 else문의 코드문을 실행한다.
    } else {
      // Source Solve) obj 변수에 담김 값의 style 속성, display 속성의 값을 "node"로 변경한다.
      obj.style.display = "none";
      // Source Solve) menu 변수에 담김 값의 style 속성, background 속성의 값을 ""로 변경한다.
      menu.style.background = "";
      // Source Solve) menu 변수에 담김 값의 style 속성, color 속성의 값을 ""로 변경한다.
      menu.style.color = "";
    }
  }
}

// Source Solve) modal 함수를 정의한다. 매개변수는 n으로 지정한다.
function modal(n) {
  // Tip) Javascript에서 변수의 값을 보고 싶으면 console.log("", <변수>)를 이용하면 된다. console.log 함수를 이용하면 브라우저 개발자 모드의 콘솔 창에서 해당 값을 볼 수 있다.
  // Source Solve) "입력된 Element Number : <n>"의 형식으로 브라우저 개발자 모드의 콘솔 창에 로그를 출력한다.
  console.log("입력된 Element Number : ", n);

  // Source Solve) for문을 실행한다. 실행조건의 변수는 i이며 1로 정의한다. i가 9보다 작을때까지 1씩 더해가며 for문을 실행한다.
  for (var i = 1; i < 9; i++) {
    // Source Solve) HTML 소스에서 ID가 myModal + i ex)myModal1 인 이름의 Element를 가져와서 modal라는 변수에 저장한다.
    var modal = document.getElementById("myModal" + i);

    // Source Solve) n ( 매개변수 )의 값이 i ( for 정의 변수 )의 값과 타입이 동일하다면 if문의 코드문을 실행한다.
    if (n === i) {
      // Source Solve) modal 변수에 담김 값의 style 속성, display 속성의 값을 "block"로 변경한다.
      modal.style.display = "block";
      // Source Solve) n ( 매개변수 )의 값이 i ( for 정의 변수 )의 값과 동일하지 않다면 else문의 코드문을 실행한다.
    } else {
      // Source Solve) modal 변수에 담김 값의 style 속성, display 속성의 값을 "none"로 변경한다.
      modal.style.display = "none";
    }
  }
}

// Source Solve) cloaeEvent 함수를 정의한다. 매개변수는 n으로 지정한다.
function cloaeEvent(i) {
  // Source Solve) "cloaeEvent Run"의 형식으로 브라우저 개발자 모드의 콘솔 창에 로그를 출력한다.
  console.log("cloaeEvent Run");
  // Source Solve) HTML 소스에서 ID가 myModal + i ex)myModal1 인 이름의 Element를 가져와서 modal라는 변수에 저장한다.
  var modal = document.getElementById("myModal" + i);
  // Source Solve) modal 변수에 담김 값의 style 속성, display 속성의 값을 "none"로 변경한다.
  modal.style.display = "none";
}
