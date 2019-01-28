const express = require('express');
const bodyParser = require('body-parser');
const url = require('querystring');

const apiRouter = express.Router();
const app = express();


app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);



apiRouter.post('/sayHello', function(req, res) {

  console.log('----log start-----');

// 받아온 json객체를 자바스크립트 객체로 변환
//  var tObj = JSON.stringify(req.body);
//  console.log(tObj);



let requestBlock = req.body.action.params.name1;
let responseText;



// DOC에 응답포맷별 json 형식 참조
// 블록이름과 params 값에 따라 나눠야함
// 블록 이름: 공지사항
if(requestBlock == '공지사항' ) { // && req.body.action.params.noti == ){
  //크롤링 데이터 넣기
  console.log('----log middle-----');

  let responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "crawlin data1"
          }
        }
      ]
    }
  };
 responseText = responseBody;
}


// 블록 이름: 학사공지
if(req.body.userRequest.block.name == '학사공지') { // && 파라미터 명 추가시
  //크롤링 데이터 넣기

    let responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "crawlin data2"
            }
          }
        ]
      }
    };
    responseText = responseBody;
}


// 블록 이름: 취업
if(req.body.userRequest.block.name == '취업') { // && 파라미터 명
  //크롤링 데이터 넣기

    let responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "crawlin data3"
            }
          }
        ]
      }
    };
responseText = responseBody;
}


// 블록 이름: 장학
if(req.body.userRequest.block.name == '장학') { // && 파라미터 명
  //크롤링 데이터 넣기

    let responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "crawlin data4"
            }
          }
        ]
      }
    };

responseText = responseBody;
}


// 블록 이름: 행사
if(req.body.userRequest.block.name == '행사') { // && 파라미터 명
  //크롤링 데이터 넣기

    let responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "crawlin data5"
            }
          }
        ]
      }
    };

responseText = responseBody;
}

  console.log("-----log finish---");


  res.status(200).send(responseText);
});


app.listen(3000, () => {
  console.log('skill server listening on port 3000');
});
