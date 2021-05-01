//JavaScript

//inner-heightの自動取得（主にスマホ用）
const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 画面のサイズ変動があった時に高さを再計算する
window.addEventListener('resize', setFillHeight);
// 初期化
setFillHeight();

//jQuery
$(function () {

    //ローディング処理
    //読み込みが完了したら実行
    $(window).on('load', function () {
        // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
        endLoading();
    });

    //10秒経過した段階で、上記の処理を上書き、強制終了
    //setTimeout('endLoading()', 10000);

    //ローディング非表示処理
    function endLoading() {
        // 0.8秒かけてロゴを非表示にし、その後1秒かけて背景を非表示にする
        $('.loading-circle').fadeOut(800, function () {
            $('.loading').fadeOut(1000);
        });
    }

    //ヘッダーより下にスクロールした時ロゴに背景色

    var header = $('.header'); //ヘッダーコンテンツ
    var anchor = $('.header-logo>a, .headerNav-item>a');
    var openBtn = $('.top, .middle, .bottom');
    var topViewHeight = $('.topMain').height();

    //初回処理、ページトップにいる場合、ヘッダーの背景色を消す
/*
    if ($(window).scrollTop() == 0) {
        linkBox.removeClass('bg-active');
        backLink.fadeOut(100);
    }
*/
    $(window).on('scroll', function () {
        if (topViewHeight > jQuery(this).scrollTop()) {
            //スクロール位置が指定クラスより上にいるので、cssで指定した色のまま
            header.removeClass('g-white');
            anchor.removeClass('t-black');
            openBtn.removeClass('b-btn');
        } else {
            //指定位置より下までスクロールしたので、色を反転させる
            header.addClass('g-white');
            anchor.addClass('t-black');
            openBtn.addClass('b-btn');
        }
    });

    // メニューの開閉
    var duration = 1000;

    $('.openBtn').on('click', function () {
        $('.bgNav').toggleClass('open');

        if ($('.bgNav').hasClass('open')) {
            $('.bgNav').stop(true).animate({
                left: '0'
            }, duration, 'easeOutExpo');
        } else {
            $('.bgNav').stop(true).animate({
                left: '100%'
            }, duration, 'easeOutExpo');
        };
    });

    //指定要素から150pxスクロールしたら、下から上にフェードイン

    $(window).scroll(function () {
        $('.fadeIn').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150) {
                $(this).addClass('fadeUp');
            }
        });
    });

    //ページトップへのスクロール
    $('.pageTop').click(function () {
        //class名.page-topがクリックされたら、以下の処理を実行
        $("html,body").animate({ scrollTop: 0 }, "300"); //300ms
    });
    //ページトップの出現
    $('.pageTop').hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) { //600px
            $('.pageTop').fadeIn(600); //600ms
        } else {
            $('.pageTop').fadeOut(600); //600ms
        }
    });

    //balloonの表示/非表示切り替え
    $('.readMore').hover(
        function () {
            var i = $('.readMore').index(this);
            $('.balloon').eq(i).fadeIn();
        },
        function () {
            var i = $('.readMore').index(this);
            $('.balloon').eq(i).fadeOut();
        }
    );

    // worksスライダー

    $('.works-wrapper').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 5000,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
        responsive: [{
            breakpoint: 1024,//tb画面の時、2枚表示
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,//SP画面の時、1枚表示
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    //アコーディオンをクリックした時の動作
    $('.accordion-title').on('click', function () {//タイトル要素をクリックしたら
        var findElm = $(this).next(".accordion-box");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();//アコーディオンの上下動作

        if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去し
        } else {//それ以外は
            $(this).addClass('close');//クラス名closeを付与
        }
    });

});
