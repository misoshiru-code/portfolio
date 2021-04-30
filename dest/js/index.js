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

// メニューの開閉
$(function () {
    var duration = 1000;

    $('.menu_trigger').on('click', function () {
        $('.nav_bg').toggleClass('open');

        if ($('.nav_bg').hasClass('open')) {
            $('.nav_bg').stop(true).animate({
                left: '0'
            }, duration, 'easeOutExpo');
        } else {
            $('.nav_bg').stop(true).animate({
                left: '100%'
            }, duration, 'easeOutExpo');
        };
    });

    //指定要素から150pxスクロールしたら、下から上にフェードイン

    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150) {
                $(this).addClass('fadeinup');
            }
        });
    });

    //ページトップへのスクロール
    $('.page-top').click(function () {
        //class名.page-topがクリックされたら、以下の処理を実行
        $("html,body").animate({ scrollTop: 0 }, "300"); //300ms
    });
    //ページトップの出現
    $('.page-top').hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) { //600px
            $('.page-top').fadeIn(600); //600ms
        } else {
            $('.page-top').fadeOut(600); //600ms
        }
    });
    //ホバーイベント
    $(".page-top").hover(
        function () {
            $(this).animate({
                opacity: "0.7"
            }, 300); //300ms
        },
        function () {
            $(this).animate({
                opacity: "1"
            }, 300); //300ms
        });

    //balloonの表示/非表示切り替え
	$('.read_more').hover(
		function(){
			var i = $('.read_more').index(this);
			$('.balloon').eq(i).fadeIn();
		},
		function(){
			var i = $('.read_more').index(this);
			$('.balloon').eq(i).fadeOut();
		}
	);

    // worksスライダー

    $('.work-wrapper').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 3000,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        //pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
        responsive: [{
            breakpoint: 768,//SP画面の時、1枚表示
            settings: {
                slidesToShow: 1,
            }
        }]
    });
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function () {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    } else {//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

// プログレス表示
/*
$(function () {

    imagesProgress();

    function imagesProgress() {

        var $container = $('#progress'),
            $progressBar = $container.find('.progress-bar'),
            $progressText = $container.find('.progress-text'),

            imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length,

            imgLoaded = 0,
            current = 0,

            progressTimer = setInterval(updateProgress, 1000 / 60);

        imgLoad.on('progress', function () {
            imgLoaded++;
        });

        function updateProgress() {

            var target = (imgLoaded / imgTotal) * 100;

            current += (target - current) * 0.1;

            $progressBar.css({ width: current + '%' });
            $progressText.text(Math.floor(current) + '%');

            if (current >= 100) {
                clearInterval(progressTimer);
                // $container.addClass('progress-complete');
                // $progressBar.add($progressText)
                //     .delay(500)
                //     .animate({ opacity: 0 }, 250, function () {
                //         $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint');
                //     });
                $container
                    .delay(500)
                    .animate({ opacity: 0 }, 1000, function () {
                        $container.css({ top: '-100%' });
                    });
            }

            if (current > 99.9) {
                current = 100;
            }
        }
    }

});
*/