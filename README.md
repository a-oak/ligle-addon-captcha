
ligle-addon-captcha
=====================
[![Build Status](https://travis-ci.org/a-oak/ligle-addon-captcha.svg?branch=master)](https://travis-ci.org/a-oak/ligle-addon-captcha)
[![Build Status](https://travis-ci.org/a-oak/ligle-addon-captcha.svg?branch=develop)](https://travis-ci.org/a-oak/ligle-addon-captcha)
Copyright (c) 2015 [A-Oak](http://a-oak.com/) Co. Ltd. under MIT LICENSE.



这是验证码功能的addon。

# 用法

## 添加路由
在app.js中

```
cfg = {}; // 这里可以使用配置addon的一些内容，比如路由的地址。
require('ligle-addon-captcha')(ligle,cfg);// 这步实例化addon，并且保存到ligle.addon上

...

app.use(ligle.addon.captcha.route);//使用addon提供的路由功能
```

## 使用中间件
在 xxx.js 中

```
var checkCode = ligle.addon.captcha.midware.checkCode;
router.get(checkCode,function(req,res){// 验证验证码是否正确。
  ...
});
```

## 前端中的添加
表单代码样例

代码截取的一部分：

```
<form method="post" enctype='multipart/form-data' action="/xxx">
 <input class="ligle-input-md" type="text" name="code" maxlengtd="4" id="code">
 <img class="CAPTCHA" src="/getCode" alt="验证码"/>
</form>

<script>
function onCaptcha(obj){
  var oldsrc = obj.src.split('?')[0];
  obj.src = oldsrc + '?t=' + Math.random(); 
}
$(document).ready(function(){
  $('.CAPTCHA').each(function(i,obj){
    obj.onclick = function(){onCaptcha(obj)};
  });
});
</script>

```


# 补充关于addon和plugin

addon和plugin区别：（我自己规定的）

plugin是对引擎的事件有所响应，进行处理，比如打开数据库、程序退出之类的。
（目前就一个global的plugin。提供全局对象的功能。）

addon是对引擎的功能扩展，结合路由、模型、中间件的一个统一体。
（以后我们可能重点就是写addon。）

以上。
