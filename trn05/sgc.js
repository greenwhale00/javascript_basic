$(function () {
    var TXT = ['HOME', '01', '02', '03', '04', 'lee,s portfolio', 'copyright']
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            //애니메이션을 큐스텍에 담아서 딜레이 시킴...
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            //부정연산자 사용
            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on')
        },
    });






    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,

        asNavFor: '.basicSlider',

    });

    $('.productSlider .slideMenu li').on('click', function () {
        var idx = $(this).index();
        $('.basicSlider').slick('slickGoTo', idx)
    })


    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.productSlider .slideMenu li').eq(c).addClass('on').siblings().removeClass('on')
    });



    $('.allOpen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').slideToggle('on');
    })



})