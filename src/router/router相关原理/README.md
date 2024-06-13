# vue-router原理

## 路由分为两种模式：hash模式和history模式

### hash模式

hash模式是通过监听hash值的变化来实现的，当hash值发生变化时，会触发hashchange事件，通过监听hashchange事件，我们就可以得到当前的hash值，然后根据hash值来展示不同的页面。

```javascript
window.addEventListener('hashchange', function () {
  console.log(window.location.hash)
})
```

### history模式

history模式是通过监听popstate事件来实现的，当浏览器前进或后退时，会触发popstate事件，通过监听popstate事件，我们就可以得到当前的路径，然后根据路径来展示不同的页面。

```javascript
window.addEventListener('popstate', function () {
  console.log(window.location.pathname)
})
```

[原理小记](https://time.geekbang.org/column/article/440504?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)
这个里面就有vue-router原理的小总结，可以一看；
