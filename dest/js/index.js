//JavaScript

const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // 画面のサイズ変動があった時に高さを再計算する
  window.addEventListener('resize', setFillHeight);
  
  // 初期化
  setFillHeight();

  

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
});

/*
// blog.htmlのサイト内検索の開閉
$(function () {
    var duration = 1000;

    $('.icon').on('click', function () {
        $('.search_input_wrap').toggleClass('open2');

        if ($('.search_input_wrap').hasClass('open2')) {
            $('.search_input_wrap').stop(true).animate({
                width: '240px'
            }, duration, 'easeOutExpo');
            $('.icon').stop(true).animate({
                left: '38%'
            }, duration, 'easeOutExpo');
        } else {
            $('.search_input_wrap').stop(true).animate({
                width: '0'
            }, duration, 'easeOutExpo');
            $('.icon').stop(true).animate({
                left: '49%'
            }, duration, 'easeOutExpo');
        };
    });
});
*/

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