# vue-router

## vue-router使用history模式后端需要增加配置

```shell
   location / {
        try_files $uri /index.html;
    }
```

这段代码的意思是，如果访问的路径不存在，则重定向到/index.html，这样就可以保证前端路由的页面刷新不会出现404错误。
将不存在的页面交给前端router处理；
