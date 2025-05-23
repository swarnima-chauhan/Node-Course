const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method);

    if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome</h1>
                <a href="/calculator">Calculator</a>
            </body>
        </html>
    `);
    return res.end();
    }else if(req.url==='/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write(`
        <html>
            <body>
            <form action="/calculate-result" method="POST">
                <input name="a"></input>
                <input name="b"></input>
                <input type="submit" value="sum">
            </form>
            </body>
        </html>
    `);
    return res.end();
    }else if(req.url==='/calculate-result' && req.method=="POST"){
        const body=[];
        req.on('data', chunk=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',()=>{
            const fullBody=Buffer.concat(body).toString();
            console.log(fullBody);
            const params=new URLSearchParams(fullBody);
            const bodyObject=Object.fromEntries(params);
            console.log(bodyObject);
            // fs.writeFileSync('calculator.txt',JSON.stringify(bodyObject));
        });
    }
});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Sever is running on http://localhost:${3000}`);
})