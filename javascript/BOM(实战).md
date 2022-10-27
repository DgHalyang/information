### 视图

1. 查看滚动条的滚动距离
   1. window.pageXOffset 横向/pageYOffset 纵向滚动条
   2. IE8 及 IE8 以下的使用方法
      1. document.body.scrollLeft/scrollTop——求横向距离和纵向距离
      2. document. documentElement.scrollLeft/scrollTop
      3. 上面两个兼容性比较混乱，其中一个有值，另外一个的值一定是 0。这两个最好的用
         法是取两个值相加，因为不可能存在两个同时有值
      4. 如 document.body.scrollLeft + document. documentElement.scrollLeft
2. 查看视口的尺寸
   1. window.innerWidth/innerHeight 可视区域的宽高 （加上 滚动条宽度 / 高度）
3. 查看元素的几何尺寸
   1. domEle.getBoundingClientRect(); 【es5】
4. 查看元素的尺寸
   1. dom.offsetWidth，dom.offsetHeight
5. 查看元素的位置
   1. dom.offsetLeft, dom.offsetTop
6. 让滚动条滚动
   1. scroll(x，y), scrollTo(x，y),功能是一样的，里面能填两个参数
   2. scrollBy(x，y);是累加滚动距离，填负数就往上滚动

### 脚本化css

1. dom.style.prop 【常用，只有这个可读可写，其余只能读】
   1. div.style.height
   2. div.style.borderWidth

### 绑定事件

1. ele.onxxx = function (event) {}
2. ele.addEventListener(type, fn, false);     // ture为事件捕获
   1. div.addEventListener（’事件类型’，处理函数，false）
3. 触发顺序，先捕获，后冒泡
4. 取消冒泡
   1. event.stopPropagation();
   2. event.cancelBubble = true 【ie】
5. 阻止默认事件
   1. return false
   2. event.preventDefault();
   3. event.returnValue = false; 【ie】

### 事件对象

1. event || window.event  【window.event 用于 IE，event 只能用于非 ie 浏览器】
2. 事件源对象
   1. event.target
   2. event.srcElement

### JSON

1. JSON 是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别，
   对象就是本地用的，json 是用来传输的）
2. JSON.parse(); string — > json
3. JSON.stringify(); json — > string

### 异步加载

1. defer 【ie】
2. async
3. script，插入到 DOM 中，加载完毕后 callBack