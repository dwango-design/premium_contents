/**
 * ページ内遷移
 */

import $ from 'jquery';

export default function navigation(linkId) {
  let windowWidth = $(window).width();
  if (linkId == 'navigation-premium') {
    let premiumOffset = $("#premium").offset().top;

    if(windowWidth > 480) {
      $('html,body').animate({
        scrollTop: premiumOffset - 54
      }, 800, 'swing');

    }else {
      $('html,body').animate({
        scrollTop: premiumOffset - 84
      }, 800, 'swing');

    }
   
  } else if (linkId == 'navigation-minogashi') {
    let minogashiOffset = $("#minogashi").offset().top;
    $('html,body').animate({
      scrollTop: minogashiOffset - 54
    }, 800, 'swing');
  } else if (linkId == 'navigation-ranking') {
    let rankingOffset = $("#ranking").offset().top;
    $('html,body').animate({
      scrollTop: rankingOffset - 108
    }, 800, 'swing');
  } else if (linkId == 'navigation-music') {
    let musicOffset = $("#music").offset().top;
    $('html,body').animate({
      scrollTop: musicOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-idol') {
    let idolOffset = $("#idol").offset().top;
    $('html,body').animate({
      scrollTop: idolOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-game') {
    let gameOffset = $("#game").offset().top;
    $('html,body').animate({
      scrollTop: gameOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-vr') {
    let vrOffset = $("#vr").offset().top;
    $('html,body').animate({
      scrollTop: vrOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-voice') {
    let voiceOffset = $("#voice").offset().top;
    $('html,body').animate({
      scrollTop: voiceOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-musical') {
    let musicalOffset = $("#musical").offset().top;
    $('html,body').animate({
      scrollTop: musicalOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-anime') {
    let animeOffset = $("#anime").offset().top;
    $('html,body').animate({
      scrollTop: animeOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-sports') {
    let sportsOffset = $("#sports").offset().top;
    $('html,body').animate({
      scrollTop: sportsOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-news') {
    let newsOffset = $("#news").offset().top;
    $('html,body').animate({
      scrollTop: newsOffset - 120
    }, 800, 'swing');
  } else if (linkId == 'navigation-shogi') {
    let shogiOffset = $("#shogi").offset().top;
    $('html,body').animate({
      scrollTop: shogiOffset - 120
    }, 800, 'swing');
  }else if (linkId == 'footer-premium') {
    let premiumOffset = $("#premium").offset().top - 80;
    $('html,body').animate({
      scrollTop: premiumOffset
    }, 800, 'swing');
  } else if (linkId == 'footer-minogashi') {
    let minogashiOffset = $("#minogashi").offset().top -80;
    $('html,body').animate({
      scrollTop: minogashiOffset
    }, 800, 'swing');
  }

}