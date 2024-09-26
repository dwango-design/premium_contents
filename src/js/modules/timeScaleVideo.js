/* -----------------------------------------------
▼ 動画長変換(秒→時:分)
----------------------------------------------- */
import $ from 'jquery';
export default function timeScaleVideo() {
  $('.timescale-video').each(function () {
    let $timeScale = $(this).text().toString();
    let $numTime = Number($timeScale);

    let $hour = Math.floor($numTime / 3600);
    let $min = ('0' + (Math.floor($numTime / 60) % 60)).slice(-2);

    if ($hour == 0) {
      $(this).html($min + '分');
    } else if ($hour != 0 && $min == 0) {
      $(this).html($hour + '時間');
    } else {
      $(this).html($hour + '時間' + $min + '分');
    }
  });
}