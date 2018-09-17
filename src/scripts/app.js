const hello = 'World';
console.log(hello);



$(function () {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        before: function (i, panels) {

            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);
            $(".pagination a").on("click", $.scrollify.move);
        }
    });

    $("#project1").on('click', function ()  {
        $(".project2").removeClass("visible")
        $(".project3").removeClass("visible")
        $(".project4").removeClass("visible")
        $(".project1").toggleClass("visible")
    });

    $("#project2").on('click', function () {
        $(".project1").removeClass("visible")
        $(".project3").removeClass("visible")
        $(".project4").removeClass("visible")
        $(".project2").toggleClass("visible")
    });
    $("#project3").on('click', function () {
        $(".project1").removeClass("visible")
        $(".project2").removeClass("visible")
        $(".project4").removeClass("visible")
        $(".project3").toggleClass("visible")
    });
    $("#project4").on('click', function () {
        $(".project1").removeClass("visible")
        $(".project2").removeClass("visible")
        $(".project3").removeClass("visible")
        $(".project4").toggleClass("visible")
    });


    // reveals projects when screen size goes under 768px
        var alterClass = function () {
            var ww = document.body.clientWidth;
            if (ww < 768) {
                $('.project').addClass('visible');
            } else if (ww >= 401) {
                // $('.test').addClass('blue');
            };
        };
        $(window).resize(function () {
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();

    // animate phone reveal + background
    ScrollReveal().reveal('.portfolio--phone', { delay: 500 });
});
