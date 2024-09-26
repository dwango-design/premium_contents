/**
 * もしurlの中に、?が含まれていたら、&ref=
 *  含まれていなかったら、?ref= を付与する
 */

import $ from 'jquery';

export default function pickupRefAdd() {
    $('.pickup-url-format').each(function () {
        let hrefStg = $(this).attr('href');
        if (hrefStg.indexOf('?') != -1) {
            hrefStg = hrefStg + '&ref=premium_contents_pickup';
            $(this).attr('href', hrefStg);
        } else {
            hrefStg = hrefStg + '?ref=premium_contents_pickup';
            $(this).attr('href', hrefStg);
        }
    });
}