/**
 * もしurlの中に、?が含まれていたら、&ref=
 *  含まれていなかったら、?ref= を付与する
 */

import $ from 'jquery';

export default function premiumRefAdd() {
    $('.premium-url-format-anime').each(function () {
        let hrefStg = $(this).attr('href');
        if (hrefStg.indexOf('?') != -1) {
            hrefStg = hrefStg + '&ref=premium_contents_limited_anime';
            $(this).attr('href', hrefStg);
        } else {
            hrefStg = hrefStg + '?ref=premium_contents_limited_anime';
            $(this).attr('href', hrefStg);
        }
    });

    $('.premium-url-format-other').each(function () {
        let hrefStg = $(this).attr('href');
        if (hrefStg.indexOf('?') != -1) {
            hrefStg = hrefStg + '&ref=premium_contents_limited_other';
            $(this).attr('href', hrefStg);
        } else {
            hrefStg = hrefStg + '?ref=premium_contents_limited_other';
            $(this).attr('href', hrefStg);
        }
    });
}