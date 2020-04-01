//change list on click
$("ul").on("click","li", function(){
	$(this).toggleClass("donee")
})

//click on X
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type = 'text']").keypress(function(event){
	if (event.which === 13) {
		var newadd = $(this).val();
		var ikon = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        $("ul").append("<li><span>"+ ikon +"</span>" + newadd + "</li>");
        $(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
    
})