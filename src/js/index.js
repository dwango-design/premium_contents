import $ from 'jquery';
import 'slick-carousel';
import sliderMinogashi from './modules/sliderMinogashi';
import timeScaleVideo from './modules/timeScaleVideo';
import timeScaleLive from './modules/timeScaleLive';
import timeExpired from './modules/timeExpired';
import newTagLive from './modules/newTagLive';
import navigation from './modules/navigation';
import followButton from './modules/followButton';
import navPosition from './modules/navPosition';
import sliderPickup from './modules/sliderPickup';
import sliderPremiumAnime from './modules/sliderPremiumAnime';
import sliderPremiumOther from './modules/sliderPremiumOther';
import pickupRefAdd from './modules/pickupRefAdd';
import premiumRefAdd from './modules/premiumRefAdd';
import inView from './modules/inView';
import {push as dataLayerPush} from './modules/dataLayer';
import '../scss/global.scss';
import {isTouchDevice} from './modules/device';

$(window).on('load', function () {

  sliderMinogashi();
  timeScaleVideo();
  timeScaleLive();
  timeExpired();
  newTagLive();

  pickupRefAdd();
  premiumRefAdd();


  // カルーセル最終で、右のフィルターを外す
  $('.slider-list-ranking .btn-next').on("click", function () {
    const $target = $('.slider-list-ranking .btn-next');
    if ($target.is("[aria-disabled = 'true']")) {
      $('.slider-list-ranking').addClass('filter-last');
    } else {
      $('.slider-list-ranking').addClass('filter-start'); //次が押されている状態=押された後は先頭ではない
    }
  });

  // カルーセル先頭以外で、左のフィルターを表示
  $('.slider-list-ranking .btn-prev').on("click", function () {
    const $target = $('.slider-list-ranking .btn-prev');
    if ($target.is("[aria-disabled = 'true']")) {
      $('.slider-list-ranking').removeClass('filter-start');
      $('.slider-list-ranking').removeClass('filter-last'); //前が押されている状態=押された後は終端ではない
      $target.removeAttr('style');
    } else {
      $('.slider-list-ranking').addClass('filter-start');
      $('.slider-list-ranking').removeClass('filter-last');
    }
  });

  navPosition(); /* ナビゲーションを中央寄せするか */

  window.addEventListener('scroll', function () {
    // 追従プレミアム登録ボタン表示処理
    followButton();
  });

  // 枠ツクール読み込み後のslick発火(ピックアップ・プレミアム限定動画枠)
  const delay = 50;
  const limit = 2;
  let loopCountPickup = 1;
  let loopCountAnime = 1;
  let loopCountOther = 1;
  let loopCountInfo = 1;

  // ピックアップ枠
  const pickupInterval = setInterval(() => {
    if ($('#premium-contents-pickup').hasClass('loaded')) {
      const pickupBg = document.getElementById('pickupBg');
      pickupBg.classList.remove('loading-pickup');
      // ピックアップ枠 imp
      // slickによりDOMが複製され、inView判定が多重実行されるので sliderPickup() より先に行う必要がある
      inView(document.querySelectorAll('.pickup-contents'), element => {
        const itemId = element.getAttribute('data-item_id');
        itemId && dataLayerPush('imp', 'premium-contents-pickup-content', itemId);
      }, {
        threshold: 0.5,
        isOnce: true
      });
      sliderPickup();
      // ピックアップ枠 click/tap
      // slickによりDOMが複製され、複製されたDOMに対してもclickイベントを指定する必要があるため sliderPickup() より後に行う必要がある
      document.querySelectorAll('.pickup-contents').forEach(element => {
        const itemId = element.getAttribute('data-item_id');
        if (itemId) {
          element.addEventListener('click', () =>
              dataLayerPush(isTouchDevice() ? 'tap' : 'click', 'premium-contents-pickup-content', itemId));
        }
      });
      clearInterval(pickupInterval);
    } else if (loopCountPickup == limit) {
      //試行回数がlimit回数に達したら、Interval切断・ブランクステート表示
      $('#pickupBg').css('display', 'none');
      $('#blankLimitedPickup').css('display', 'block');
      clearInterval(pickupInterval);
    }
    loopCountPickup = loopCountPickup + 1;
  }, delay);

  // プレミアム限定アニメ枠
  const animeInterval = setInterval(() => {
    if ($('#premium-contents-limited-anime').hasClass('loaded')) {
      sliderPremiumAnime();
      clearInterval(animeInterval);
      $('#premiumContentsAnime .btn-next').attr('id', 'btn-next-premium-anime');
    } else if (loopCountAnime == limit) {
      //試行回数がlimit回数に達したら、Interval切断・ブランクステート表示
      $('#blankLimitedAnime').css('display', 'block');
      clearInterval(animeInterval);
    }
    loopCountAnime = loopCountAnime + 1;
  }, delay);

  // プレミアム限定エンターテイメント・ゲーム・音楽枠
  const otherInterval = setInterval(() => {
    if ($('#premium-contents-limited-other').hasClass('loaded')) {
      sliderPremiumOther();
      clearInterval(otherInterval);
      $('#premiumContentsOther .btn-next').attr('id', 'btn-next-premium-other');
    } else if (loopCountOther == limit) {
      //試行回数がlimit回数に達したら、Interval切断・ブランクステート表示
      $('#blankLimitedOther').css('display', 'block');
      clearInterval(otherInterval);
    }
    loopCountOther = loopCountOther + 1;
  }, delay);

  // 更新情報枠
  const infoInterval = setInterval(() => {
    const $premiumContentsInformation = $('#premium-contents-information');
    if ($premiumContentsInformation.hasClass('loaded')) {
      /* 更新情報が存在すれば表示 */
      $premiumContentsInformation.css('display', 'block');
      // 更新情報枠 imp/click/tap
      const contents = document.querySelectorAll('#premium-contents-information a');
      inView(contents, element => {
        const itemId = element.getAttribute('data-item_id');
        itemId && dataLayerPush('imp', 'premium-contents-information', itemId);
      }, {
        threshold: 0.5,
        isOnce: true
      });
      contents.forEach(element => {
        const itemId = element.getAttribute('data-item_id');
        if (itemId) {
          element.addEventListener('click', () =>
              dataLayerPush(isTouchDevice() ? 'tap' : 'click', 'premium-contents-information', itemId));
        }
      });
      clearInterval(infoInterval);
    } else if (loopCountInfo == limit) {
      //試行回数がlimit回数に達したら、Interval切断
      clearInterval(infoInterval);
    }
    loopCountInfo = loopCountInfo + 1;
  }, delay);

  const load = document.getElementById('loading');
  load.classList.add('loaded');

  $('.minogashi-contents').each(function () {
    if ($(this).find('li').length == 0) {
      $(this).find('.blank').css('display', 'block');
    }
  });
});


$(function () {
  $("#navigation div ul li p").on("click", function () {
    const linkId = $(this).attr("id");
    navigation(linkId);
  });

  $(".footer-contents .lead_jump").on("click", function () {
    const linkId = $(this).attr("id");
    navigation(linkId);
  });

  $('#premium-contents-limited-anime').on('click', function (e) {
    // console.log('プレミアム限定動画アニメの.btn-nextが1回クリック');
    $('#premiumContentsAnime .btn-prev').attr('style', 'display: flex !important');
    $('#premiumContentsAnime .slider-list').addClass('filter');
    $('#premiumContentsAnime .slider-list_outer_hidden').css('overflow-x', 'visible');

  });

  $('#premium-contents-limited-other').on('click', function (e) {
    // console.log('プレミアム限定動画その他の.btn-nextが1回クリック');
    $('#premiumContentsOther .btn-prev').attr('style', 'display: flex !important');
    $('#premiumContentsOther .slider-list').addClass('filter');
    $('#premiumContentsOther .slider-list_outer_hidden').css('overflow-x', 'visible');

  });

  // 見逃し配信の.btn-nextが1回クリックされたら
  // 当該カテゴリの.btn-prevが表示
  $('.minogashi-contents.infinity-slider').on('click', function (e) {
    // console.log('見逃し配信の.btn-nextが1回クリック');
    $(this).find('.btn-prev').attr('style', 'display: flex !important');
    $(this).find('.slider-list').addClass('filter');
    $(this).find('.slider-list_outer_hidden').css('overflow-x', 'visible');
  });

  // 見逃し配信枠 imp
  inView('.minogashi-contents-genreName', element => {
    const genreId = element.getAttribute('data-genre_id');
    genreId && dataLayerPush('imp', 'premium-contents-live-genre', genreId);
  }, {
    threshold: 1,
    isOnce: true
  });
});

window.addEventListener('resize', function () {
  navPosition(); /* ナビゲーションを中央寄せするか */
  sliderPremiumAnime('resize');
  sliderPremiumOther('resize');
  sliderMinogashi('resize');

  const windowWidth = $(window).width();
  if (windowWidth >= 764) {
    $('.slider-list').each(function () {
      if ($(this).hasClass('filter')) {
        $(this).find('.btn-prev').attr('style', 'display: flex !important');
        // $('.slider-list-ranking').addClass('filter-start');
      }
    });
  }
});
