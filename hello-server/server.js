const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Routing
    if (req.url === "/") {
        res.end("<h1>🏠 Welcome to Home Page</h1>");
    } 
    else if (req.url === "/about") {
        res.end("<h1>📘 About Us Page</h1>");
    } 
    else if (req.url === "/contact") {
        res.end("<h1>📞 Contact Page</h1>");
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>❌ 404 Page Not Found</h1>");
    }
});

// Start server
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});