/**
 * 「遷移リンク幅 < 画面幅-(60*2) 」ならばナビゲーション領域を中央寄せにする
 */

import $ from 'jquery';

export default function navPosition() {
    let windowWidth = $(window).width();
    let navWidth = $('#navigation ul').get(0).scrollWidth;
    navWidth = navWidth + 120;

    if (windowWidth > navWidth) {
        $('.navigation-contents').css('justify-content', 'center');
    } else {
        $('.navigation-contents').css('justify-content', 'flex-start')
    }
}