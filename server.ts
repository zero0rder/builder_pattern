let app, server,
    express = require('express'),
    path = require('path'),
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000,
    root = path.resolve(__dirname, '..');
 
app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/'));
server = app.listen(port, host, startServer);

function startServer () {
    console.log('Server started @localhost::', port);
    console.log('Root directory', root);
    console.log('Press Ctrl+C to exit...\n');
}