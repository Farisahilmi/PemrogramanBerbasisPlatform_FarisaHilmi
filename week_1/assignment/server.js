const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("aku disini dengan bersama teman teman ku ");
});

server.listen(3000, () => {
    console.log("server jalan di http://localhost:3000")
})