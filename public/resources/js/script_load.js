$(document).ready(function () {
    var rootpage = '#/'
    var research = '#!/#research'
    // $('head').load('/assets/templates/head.html');
    $('#navbar').load('/public/templates/navbar.html');
    $('#footer').load('/public/templates/footer.html');

    // $('#toScanPage').click(function(){
    //     $('#header').css('display','none');
    //     $('#navbar').removeClass('hideitem');
    //     $('#navbar').load('/assets/templates/navbar.html');
    // });
    // console.log(window.location.origin);
    // console.log(window.location.href);

    function hideheader(){
        $('#header').addClass('hideitem');
        $('#navbar').removeClass('hideitem');
        $('#navbar').load('/public/templates/navbar.html');
        $('#research').addClass('hideitem');
    }

    function showheader(){
        $('#header').removeClass('hideitem');
        $('#navbar').addClass('hideitem');
        $('#research').removeClass('hideitem');
    }

    function switchCase(){
        if((window.location.hash === rootpage)){
            showheader();
        }else{
            hideheader();
        }
    }

    switchCase();

    $(window).on('hashchange', function (e) {
        switchCase();
    });
});

