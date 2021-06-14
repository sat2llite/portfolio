//scroll
// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : false});

// var $html = $("html");
// var page = 1;
// var lastPage = $(".section").length;

// $html.animate({scrollTop:0},10);

// $(window).on("wheel", function(e){
 
// 	if($html.is(":animated")) return;
 
// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;
 
// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		if(page == 1) return;
 
// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();
 
// 	$html.animate({scrollTop : posTop});
 
// });
//menu
$(function(){
    /*햄버거메뉴 클릭*/
    $('.menuBtn').click(function(ev){
        ev.preventDefault();

        $(this).toggleClass('active');
        $('.menuwrap').toggleClass('visible');
    })
});


jQuery(document).ready(function($) {

    $(".header").click(function(event){            
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

//메뉴이동
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){            
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

//tab
new CBPFWTabs( document.getElementById( 'tabs' ) );

premier(1);
function premier(n) {
for(var i = 1; i < 9; i++) {
    obj = document.getElementById('premier'+i);
    menu = document.getElementById('premier_button'+i);
    if ( n == i ) {
        obj.style.display = "block";
        menu.style.background="#fff";
        menu.style.color="#ffaea5";
    } else {
        obj.style.display = "none";
        menu.style.background="";
        menu.style.color="";
    }
}
}

