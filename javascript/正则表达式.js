// 是否电话号码 000-12345
function isTelephoneNumber(telephoneNumber) {
    return /^\d{3}-\d{5}$/.test(telephoneNumber)
}

// 匹配手机号码，假设手机号码规则如下：
// 必须是 11 位的数字；
// 第一位数字必须以 1 开头，第二位数字可以是[3, 4, 5, 7, 8] 中的任意一个，后面 9 个数是[0 - 9] 中的任意一个数字。
function phone(phone) {
    return /^1[34578]\d{9}/.test(phone)
}

// 视频文件的后缀名有 .mp4、.avi、.wmv、.rmvb 用正则表达式提取所有的视频文件的后缀
function isMp4(midea) {
    return /.+(.mp4|.avi|.wmv|.rmvb)/.test(midea)
}

// 匹配所有符合 XML 规则的标签 <div></div>
function isMp4(XML) {
    return /<(\w+)>.+<\/(\1)>/.test(XML)
}

// 请用正则表达式匹配所有的小数
const regex = new RegExp(/(?<!\.)\d+\.\d+$/);

// 提取下列数据中所有人的生日，使用两个分组，第一个分组提取“月”，第二个分组提取“日”。 王伟 1993年1月2日 张伟 1996.8.24 李伟 1996.3.21 李秀 1994 - 7 - 5
const regex1 = new RegExp(/((?<=[年.-])\d{1,2})[月.-](\d{1,2}))/);

// 编写正则表达式进行密码强度的验证，规则如下：
// 至少一个大写字母
// 至少一个小写字母
// 至少一个数字
// 至少 8 个字符
const regex2 = new RegExp(/(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{8,}/);
// (?=.*? [a - z]) 这段正则表达式规定了匹配的字符串中必须存在一个右边为任意字符和小写字母的位置，
// (?=.*? [a - z])(?=.*? [A - Z])(?=.*? [0 - 9])那这一整串连起来就是必须存在小写、大写、数字

// 写一个方法把下划线命名转成大驼峰命名
function strToCamel(str) {
    return str.replace(/(^|_)(\w)/g, (m, $1, $2) => $2.toUpperCase());
}

// 金额千分位分割
function formatMoney(originStr) {
    var regex = /(\d)(?=(\d{3})+\.)/g;
    return originStr.replace(regex, '$1,');
}