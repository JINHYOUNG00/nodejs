const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');


const boardRoute = require('./routes/board.js');
const customerRoute = require('./routes/customer.js');
const todoRoute = require('./routes/todo.js');
const fileRoute = require('./routes/file.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms'));

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}

app.use(requestTime)

app.use("/board", boardRoute);
app.use('/customer',customerRoute);
app.use('/todo',todoRoute);
app.use('/file',fileRoute);

// 클라이언트에서 HTTP요청 메소드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우트 입니다.
// app.method(path,(handler)) 

// app.listen() 함수를 사용해서 서버를 실행
// 클라이언트는 'honst:port'로 노드서버에 요청을 보낼 수 있음
app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
    });

app.get("/", (req, res) => {
    console.log(req.cookies.modalYn);
    res.send("Hello World~~~asdsad!");
    
});
    
    
app.get("/post", (req, res) => {
    res.send("Post World!");
});
// app.get(/a/, (req, res) => {
//     res.send("a가 포함");
// });
app.get(/^insert/, (req, res) => {
    res.send("insert로 시작하는");
});

const ex0 = function(req, res, next) {
    console.log('첫번째 콜백')
    next();
}
const ex1 = function(req, res, next) {
    console.log('두번째 콜백')
    next();
}
const ex2 = function(req, res, next) {
    res.send('세번째 콜백')
}
app.get('/examples', [ex0, ex1, ex2]);

