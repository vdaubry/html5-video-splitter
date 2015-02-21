var http = require('http');
http.createServer(function (request, response) {
  if (request.method === 'OPTIONS') {
      console.log('!OPTIONS');
      var headers = {};
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      headers["Access-Control-Allow-Credentials"] = false;
      headers["Access-Control-Max-Age"] = '86400';
      headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
      response.writeHead(200, headers);
      response.end();
  } else if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            var data = JSON.parse(body);
            var inputFilePath = "./"+data.inputFilePath;
            var outputFilePath = "./output-"+data.inputFilePath
            var start = data.begin;
            var end = data.end;
            
            var command = "ffmpeg -y -ss "+start+" -t "+(end-start)+" -i "+inputFilePath+" -vcodec copy -acodec copy "+outputFilePath;
            var exec = require('child_process').exec;
            exec(command, function(error, stdout, stderr) {
              console.log(stdout);
              console.log(stderr);
              console.log(stderr);
              response.writeHead(200, {'Content-Type': 'text/plain'});
              response.end();
            });
        });
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');