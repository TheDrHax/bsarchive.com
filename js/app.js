
//

$(window).scroll(function() {
    
    if ($(this).scrollTop() > 65) {
        
        $('span.left a').attr("href", "#srch");
        $('span.left a img').css({'transform': 'rotate(0deg)'});
        
    } else {
        
        $('span.left a').attr("href", "/");
        $('span.left a img').css({'transform': 'rotate(-90deg)'});
        
    }
    
});


// Плавная прокурутка к якорям

$(document).ready(function() {
	$('a[href*=#]').bind("click", function(e) {
	var anchor = $(this);
		$('html, body').stop().animate( {scrollTop: $(anchor.attr('href')).offset().top}, 300); e.preventDefault();
	});
	return false;
});


// Подсвечивание нажатой буквы 

function activate(a) {
	var aa = document.getElementsByTagName('a');
	for( i in aa )
		if( aa[i] != a && aa[i].id == 'active' )
			aa[i].id = '';
	a.id = 'active';
}



