import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Request received");
    res.write(`${Math.floor(Math.random() * 10)}`);
    res.end();
})

server.listen(8081);