Danywhere 随启随用的静态文件服务器
==============================

Running static file server anywhere. 随时随地将你的当前目录变成一个静态文件服务器的根目录。

## Installation
```
npm install danywhere -g
```

## Execution
```
$ danywhere
// or with port
$ danywhere -p 8000
// or start it but silent(don't open browser)
$ danywhere -s
// or with hostname
$ danywhere -h localhost -p 8888
// or with folder
$ danywhere -d ~/git/danywhere
```

## Help
```
$ danywhere --help
Usage:
  danywhere --help // print help information
  danywhere // 8000 as default port, current folder as root
  danywhere 8888 // 8888 as port
  danywhere -p 8989 // 8989 as port
  danywhere -s // don't open browser
  danywhere -h localhost // localhost as hostname
  danywhere -d /home // /home as root
```

## Visit

```
http://localhost:8000
```
执行命令后，默认浏览器将为您自动打开主页。

## License
The MIT license.
