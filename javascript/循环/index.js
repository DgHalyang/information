// for循环
for (i = 0; i < 10; i++) {
    console.log(i)
}

// while循环[底层是for循环] 与上面等价
while (i < 10) {
    console.log(i)
    i++
}

// do while 是不管满不满足条件都会先执行一次，
// 再判断成不成立，如果成立才会执行第二次，不成立就停止
do {
    document.write('a');
    i++;
} while (i < 10)

// for in（简化版for循环）
var obj = {
    name: '13',
    age: 123
}
for (var prop in obj) {
    // 是否是原型上的属性 hasOwnProperty
    if (obj.hasOwnProperty(prop)) {
        console.log(prop)
        // name age
        console.log(obj[prop])
        // 13 123
    }

}