// check off specific todos by clicking 

$("ul").on("click", "li", function () {

    $(this).toggleClass("completed")

});


// click on the x to delete a todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });


    e.stopPropagation();

});

// adding an item
$("input[type='text']").keypress(function (e) {
    if (e.keyCode === 13) {
        // grabbing a new todo text from the input
        var todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li> <span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
        $(this).val(" ");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})