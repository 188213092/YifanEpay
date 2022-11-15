const yifanepay = require("yifanepay");
let ordernumber = yifanepay.order_number()

let data = {
    pid: "xxx",
    money: "0.1",
    name: "商品名称",
    notify_url: "http://xxx.com/notify_url.php",
    out_trade_no: ordernumber,
    return_url: "http://xxx.com/return_url.php",
    sitename: "网站名称",
    type: "wxpay",
}

let a = yifanepay.outcom("易支付密钥", "易支付平台地址", data)

console.log(a)
