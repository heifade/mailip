mailip


[![NPM version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Build Status](https://travis-ci.org/heifade/mailip.svg?branch=master)](https://travis-ci.org/heifade/mailip)

[npm-image]: https://img.shields.io/npm/v/mailip.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mailip
[downloads-image]: https://img.shields.io/npm/dm/mailip.svg

# 源代码及文档
[源代码](https://github.com/heifade/mailip)
[开发文档](https://heifade.github.io/mailip/)

# 安装
```bash
npm install mailip -g
```

# 例子1：
```bash
每隔1分钟检查本机ip是否发生修改，如果发生修改，将ip发邮件
mailip -f 发件人邮箱 -t 收件人邮箱 -p 发件人邮箱密码 -n 60 -u 服务器IP地址
```

# 参数：
```bash
-f 发件人邮箱
-t 收件人邮箱
-p 发件人邮箱密码
-s 发件人邮件服务器地址 smtp.qq.com
-o 发件人邮件服务器端口
-n 间隔时长（隔多长时间获取一下ip地址，ip与上一次不同时会发邮件）,单位秒，当为0时只发送一次
-g 是否发送公网IP
-u 邮件主题
```

