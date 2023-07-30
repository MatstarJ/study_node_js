
const fs = require('fs');

const requesHandler = (req, res) => {
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>title</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url == '/message' && method === 'POST') {

    const url = req.url;
    const method = req.method;


    const body = [];
    //이벤트 리스너
    req.on('data', (chunk) => {
      console.log('chunk : ', chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      console.log('parsebody : ', parseBody);
      //writeFileSync(동기화) 파일이 생성되기 전까지 다음 코드의 실행을 막는다.
      //fs.writeFileSync('message.txt', message);

      fs.writeFile('message.txt', message, (err) => {
        console.log(err);
        res.writeHead(302, { Location: '/' });
        return res.end();
      });
      //res.statusCode = 302;
      // res.setHeader('Location','/');
    });
  }


  //console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');

  res.write('<html>');
  res.write('<head><title>title</title></head>');
  res.write('<body><h1>Hello </h1></body>');
  res.write('</html>');
  res.end();
};


//module.exports = requesHandler;
//module.exports.requesHandler = requesHandler;
//exports.requesHandler = requesHandler;

module.exports = {
  requesHandler,
}