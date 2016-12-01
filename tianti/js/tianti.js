$(document).ready(function(){
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(); 
        if(scrollTop > 0){                 
        	$("#nav").css("background","#36679C");
        }else{       	
        	$("#nav").css("background","#48609E");
        }
    }).trigger("scroll");
    
    $(".navbar-toggle").click(function(){
    	if($("#mobile-navbar-collapse").hasClass("bounce-in")){
    		$("#mobile-navbar-collapse").removeClass("bounce-in");
    		$("#mobile-navbar-collapse").addClass("bounce-out");
    	}else{
    		$("#mobile-navbar-collapse").addClass("bounce-in");
    		$("#mobile-navbar-collapse").removeClass("bounce-out");
    	}    	
    });
});