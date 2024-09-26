/**
 * 生放送番組の視聴期限を取得し、現在の年月日-視聴期限年月日が10以下ならば
 * 差分の*日を表示する
 */

import $ from 'jquery';

export default function timeExpired() {
    $('.expired').each(function () {

        let expired = $(this).text().toString();
        let exYear = expired.substr(0, 4);
        let exMonth = expired.substr(5, 2);
        let exDate = expired.substr(8, 2);

        if (exYear < 2037) {
            expired = new Date(exYear, exMonth, exDate);
            let nowTime = new Date();
            let nowYear = nowTime.getFullYear();
            let nowMonth = nowTime.getMonth() + 1;
            let nowDate = nowTime.getDate();

            nowTime = new Date(nowYear, nowMonth, nowDate);
            let diffTime = expired.getTime() - nowTime.getTime();
            let diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDay < 10) {
                $(this).html('<p class="expired-text"><span class="expired-text-limit">視聴期限 あと</span><strong>' + diffDay + '</strong><span class="expired-text-day">日</span></p>');
            } else {
                $(this).css('display', 'none');
            }

        } else {
            $(this).css('display', 'none');
        }
    });
}