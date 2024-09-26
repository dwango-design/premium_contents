/**
 * (liveEndTime)から現在の日付を比較してNEWを付与する
 */

import $ from 'jquery';

export default function newTagLive() {

    $('.tag-new').each(function () {
        let liveEndTime = $(this).data('endtime');
        liveEndTime = liveEndTime.toString();
        let endYear = liveEndTime.substr(0, 4);
        let endMonth = liveEndTime.substr(5, 2);
        let endDate = liveEndTime.substr(8, 2);

        liveEndTime = new Date(endYear, endMonth, endDate);

        let nowTime = new Date();
        let nowYear = nowTime.getFullYear();
        let nowMonth = nowTime.getMonth() + 1;
        let nowDate = nowTime.getDate();

        nowTime = new Date(nowYear, nowMonth, nowDate);

        let diffTime = nowTime.getTime() - liveEndTime.getTime();
        let diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));


        if (diffDay > 1) {
            $(this).css('display', 'none');
        }
    });
}