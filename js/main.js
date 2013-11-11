function toggle(el){
	el.parent().find("div").toggle();
  el.toggleClass("arrow");
};

$("fieldset").on("click", "legend", function(){
	if ($(this).parent().children().length == 2){
		toggle($(this));
	}
	else{
		$(this).parent().wrapInner("<div>");
    $(this).appendTo($(this).parent().parent());
    toggle($(this));
	}
});

