const http=require('http');
const server= http.createServer((req,res)=>{
    console.log(req.url, req.method);

    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Myntra</title></head>');
        res.write('<body>');
        res.write('<ol type="A">');
        res.write('<li><a href="/home">Home</a></li><br>');
        res.write('<li><a href="/men">Men</a></li><br>');
        res.write('<li><a href="/women">Women</a></li><br>');
        res.write('<li><a href="/kids">Kids</a></li><br>');
        res.write('<li><a href="/cart">Cart</a></li><br>');
        res.write('</ol>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(req.url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<p>Welcome to Home</p>');
        return res.end();
    }else if(req.url==='/men'){
        res.setHeader('Content-Type','text/html');
        res.write('<p>Welcome to Men</p>');
        return res.end();
    }else if(req.url==='/women'){
        res.setHeader('Content-Type','text/html');
        res.write('<p>Welcome to Women</p>');
        return res.end();
    }else if(req.url==='/kids'){
        res.setHeader('Content-Type','text/html');
        res.write('<p>Welcome to Kids</p>');
        return res.end();
    }else if(req.url==='/cart'){
        res.setHeader('Content-Type','text/html');
        res.write('<p>Welcome to Cart</p>');
        return res.end();
    }
    return res.end();

});

const PORT=3000;
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});