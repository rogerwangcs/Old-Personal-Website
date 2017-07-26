var mainToggle = "open";
var currentPage = "page5";
var newPage = "page5";

document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
        $('.loader').css('visibility','visible');
    } else if (state == 'complete') {
        $('.loader').removeClass('loader').addClass('loader-closed');
        setTimeout(function() {
            $('.loader-closed').css({'display':'none','z-index' : '-10000'});
        },400);
    }
}

$(document).ready(function(){

    $('body').on('scroll mousewheel touchmove', stopScrolling);

    $(".main-button-open").click(function(){
        $('#' + currentPage).removeClass('page-inner-open').addClass('page-inner-closed').css('display', 'none');

        $('#' + newPage).removeClass('page-inner-open').addClass('page-inner-closed').css('display', 'none');

        currentPage = "page5";
        newPage = "page5";

        pageChange(this.id);
        activatePage();
    });
    $(".navbar-button-open").click(function(){
        if("page" + this.id != newPage) {
            pageChange(this.id);
            activatePage();
        }
    });



    $("#back-button").click(function(){

        $('body').css('overflow-y','hidden');
        $('body').on('scroll mousewheel touchmove', stopScrolling);

        $('.header-bg-closed').removeClass('header-bg-closed').addClass('header-bg-open');

        $('.background-closed').css('display', 'block').delay(50).queue(function(){
            $(this).removeClass('background-closed').addClass('background-open').dequeue();
        });

        $('.portrait-closed').css('display', 'block').delay(50).queue(function(){
            $(this).removeClass('portrait-closed').addClass('portrait-open').dequeue();
        });

        $('.title-closed').css('display', 'block').delay(50).queue(function(){
            $(this).removeClass('title-closed').addClass('title-open').dequeue();
        });

        $('.main-nav-closed').css('display', 'block').delay(100).queue(function(){
            $(this).removeClass('main-nav-closed').addClass('main-nav-open').dequeue();
        });

        $('.navbar-open').removeClass('navbar-open').addClass('navbar-closed').delay(300).queue(function(){$(this).css('display', 'none').dequeue()});

        $('.back-button-open').removeClass('back-button-open').addClass('back-button-closed').delay(150).queue(function(){$(this).css('display', 'none').dequeue();});

        mainToggle = "open";


    });


});



function stopScrolling (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function activatePage() {
    if(mainToggle == "open") {

        $('body').css('overflow-y','auto');
        $('body').off('scroll mousewheel touchmove', stopScrolling);
        window.scrollTo(0, 0);

        $('.header-bg-open').removeClass('header-bg-open').addClass('header-bg-closed');

        $('.background-open').removeClass('background-open').addClass('background-closed').delay(300).queue(function(){
            $(this).css('display','none').dequeue();
        });

        $('.portrait-open').removeClass('portrait-open').addClass('portrait-closed').delay(300).queue(function(){
            $(this).css('display','none').dequeue();
        });

        $('.title-open').removeClass('title-open').addClass('title-closed').delay(300).queue(function(){
            $(this).css('display','none').dequeue();
        });

        $('.main-nav-open').removeClass('main-nav-open').addClass('main-nav-closed').delay(300).queue(function(){
            $(this).css('display','none').dequeue();
        });

        $('.navbar-closed').css('display', 'block').delay(50).queue(function(){
            $(this).removeClass('navbar-closed').addClass('navbar-open').dequeue();
        });

        $('.back-button-closed').css('display','block').delay(100).queue(function(){
            $(this).removeClass('back-button-closed').addClass('back-button-open').dequeue();
        });
        mainToggle = "closed"
    }
}
function pageChange(pageID) {
    currentPage = newPage;
    newPage = "page" + pageID;

    $('#' + currentPage).removeClass('page-inner-open').addClass('page-inner-closed').delay(300).queue(function(){
        $(this).css('display', 'none').dequeue();
    });

    $('#' + newPage).css('display','block').delay(200).queue(function(){
        window.scrollTo(0, 0);
        $(this).removeClass('page-inner-closed').addClass('page-inner-open').dequeue();
    });
}
