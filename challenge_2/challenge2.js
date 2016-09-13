/*$(function(){
	//all your code should go here
 /*var state = true;
    $( "h1" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
    */
 

$(document).ready(function(){
    $("h5:odd").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("aside p").hover(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("div p:eq(8)").hover(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $("div p:eq(10)").hover(function(){
        $(this).hide();
    });
});

var i = 0; 

$("h1").click(function(){
	i++;
	if (i%2 != 0) {
    $("h1").css("color", "red");
} else {    $("h1").css("color", "black");
}
});


$("p").not("aside p").text(function () {
    return $(this).text().replace("Bacon", "LASER VISION"); 
});​​​​​


