const http = require('http');

function createServer(port) {
    const server = http.createServer((req, res) => {
        if (req.url === '/search') {
            const searchResults = searchFiles('.', 'goa');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(searchResults));
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to GOA!');
        }
    });

    server.listen(port, () => {
        logOperation(`Server started on port ${port}`);
        console.log(`Server is running on http://localhost:${port}`);
    });
}

createServer(3000);