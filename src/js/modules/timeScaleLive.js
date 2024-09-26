/**
 * 放送時間をh時間m分に変換
 *  startTime 生放送開始日時
 * liveEndTime 生放送終了日時
 */
import $ from 'jquery';
export default function timeScaleLive() {

    $('.timescale-live').each(function () {
        let endTime = $(this).data('end');
        let endTimeYear = endTime.substr(0, 4);
        let endTimeMonth = endTime.substr(5, 2);
        let endTimeDate = endTime.substr(8, 2);
        let endTimeHour = endTime.substr(15, 2);
        let endTimeMin = endTime.substr(18, 2);

        endTime = new Date(endTimeYear, endTimeMonth, endTimeDate, endTimeHour, endTimeMin).getTime();

        let startTime = $(this).data('start');
        let startTimeYear = startTime.substr(0, 4);
        let startTimeMonth = startTime.substr(5, 2);
        let startTimeDate = startTime.substr(8, 2);
        let startTimeHour = startTime.substr(15, 2);
        let startTimeMin = startTime.substr(18, 2);

        startTime = new Date(startTimeYear, startTimeMonth, startTimeDate, startTimeHour, startTimeMin).getTime();

        let duration = Math.floor((endTime - startTime) / 1000);
        const h = Math.floor(duration / 3600);
        const m = Math.floor(duration / 60) % 60;

        if (h == 0) {
            $(this).html(m + '分')
        } else if (h != 0 && m == 0) {
            $(this).html(h + '時間')
        } else {
            $(this).html(h + '時間' + m + '分')
        }
    });
};