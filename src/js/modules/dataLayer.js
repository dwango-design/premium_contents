/**
 * GA360のイベントをpushする
 * customDimensionは、event_infoにlabel_detail以外のkeyで値を入れたい時、event_info以外のkeyを使いたい時に利用する
 * @param {'imp' | 'click' | 'tap'} action
 * @param {string} label
 * @param {string?} labelDetail
 * @param {{[key: string]: {[key: string]: string|number }}?} customDimension
 */
export function push(action, label, labelDetail, customDimension = {}) {
    const data = {
        event: `nicovideo_${action}_${label}`
    };
    if (labelDetail) {
        data['event_info'] = {
            label_detail: labelDetail
        };
    }
    window['NicoGoogleTagManagerDataLayer'].push({...data, ...customDimension});
}
