const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
    res.end();
});

const PORT=3000;
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});