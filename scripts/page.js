$(document).ready(function() {
    console.log("hello");
    $("#accept-container").hide();
    $("#invitation-container").hide();
    $("#final-page").hide();
    first_yes = $("#yes1");
    first_yes.on("click", function() {
        $("#main-container").hide();
        $("#accept-container").show();
    });
    no1 = $("#no1");
    no1.on("click", function() {
        no1.html("Yes");
    })
    no = $(".button-no#no");
    console.log(no.offset());
    let no_moved = false;
    no.hover(function() {
        if (no_moved == false) {
            no.css("position", "absolute");
            no.css("left", "520px");
            no.css("top", "520px");
            no_moved = true;
        }
        else {
            no.css("position", "relative");
            no.css("top", "0px");
            no.css("left", "0px")
            no_moved = false;
        }
    }, function() {
    });
    second_yes = $("#yes2");
    second_yes.on("click", function() {
        $("#accept-container").hide();
        $("#invitation-container").show();
    });

    confirmation = $("#confirm");
    confirmation.on("click", function() {
        $("#invitation-container").hide();
        $("#final-page").show();
        setTimeout(function() {
            window.close();
        }, 3500);
    })

});
