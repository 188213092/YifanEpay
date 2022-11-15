const utility = require("utility");
const moment = require("moment");

/**
 * @returns 生成订单号
 */

function order_number() {
    const order = moment().format("YYYYMMDDHHmmss") + Math.floor(Math.random() * 10)
    let ordernumber = order;

    return ordernumber;
}

/**
 * 
 * @param {keys} keys 
 * @param {url} url 
 * @param {data} data
 * @returns key:易支付密钥,url:易支付地址,data:参数排序拼接后的数据
 */

function outcome(keys, url, data) {
    var sPara = [];
    if (!data) return null;
    for (var key in data) {
        if ((!data[key]) || key == "sign" || key == "sign_type") {
            continue;
        };
        sPara.push([key, data[key]]);
    }
    sPara = sPara.sort();
    var prestr = '';
    for (var i2 = 0; i2 < sPara.length; i2++) {
        var obj = sPara[i2];
        if (i2 == sPara.length - 1) {
            prestr = prestr + obj[0] + '=' + obj[1] + '';
        } else {
            prestr = prestr + obj[0] + '=' + obj[1] + '&';
        }
    }
    let akey = keys;
    let sign = utility.md5(prestr + akey);
    let result = `${url}submit.php?${prestr}&sign=${sign}&sign_type=MD5`

    return result
}

module.exports = { outcome, order_number }

