
/**
 * 追従プレミアム登録ボタン表示処理
 */

 import $ from 'jquery';

 export default function followButton() {
    let scrollHeight = $(window).scrollTop();
    let windowHeight = $(window).height();
    let showY = $('#premium').offset().top + 52; // margin-top:52px
    let hideY = $('#lower').offset().top;

    if(showY < scrollHeight + windowHeight && scrollHeight + windowHeight < hideY) {
        $('#followButton').fadeIn();
    }else {
        $('#followButton').fadeOut();
    }
 }