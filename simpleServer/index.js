const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === "/"){
        res.writeHead(200, {"content-Type": "text/html"});
        res.write("<h2 style = 'color:blue'> ANA SAYFA </h1>")
    } else if(url === "/hakkimda"){
        res.writeHead(200, {"content-Type": "text/html"});
        res.write("<h2 style = 'color:purple'> HAKKIMDA SAYFASINA HOS GELDINIZ </h1>")
    } else if(url === "/iletisim"){
        res.writeHead(200, {"content-Type": "text/html"});
        res.write("<h2> BANA BURADAKİ BİLGİLERİLE ULAŞABİLİRSİNİZ </h1>")
    } else {
        res.writeHead(404, {"content-Type": "text/html"});
        res.write("<h2 style = 'color:red'> 404 Sayfa bulunamadi </h1>")
    }

    res.end();
});

const port = 5000;
server.listen(port, () => {
    console.log(`Sunucu port ${port} da başlatıldı.`)
});