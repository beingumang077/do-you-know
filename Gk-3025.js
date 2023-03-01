var readlineSync = require('readline-sync');
var name = readlineSync.question("hello sir, your name please: ");
var city = readlineSync.question("where do you live? ");
var fav = readlineSync.question("what's your favourite food? ");
var allow = readlineSync.question("are you ready for the quiz ? ");

var questions =[
  {
    question: "who is the CEO of google ? ",
    answer:"Sundar pichai"
  },
  {
    question:"is array mutable or immutable? ",
      answer:"mutable"
  },
  {
    question:"how many states are there in India? ",
    answer:"28"
  },
  {
    question:"who will hold the current G20 presidency? ",
    answer:"india"
  },
  {
    question:"press F to know the score",
    answer:"F"
  }
]
var score =0;
loop();
function loop(){
  for(var i=0;i<questions.length-1;i++){
    var ans = readlineSync.question(questions[i].question);
    if(ans.toLowerCase()==questions[i].answer.toLowerCase()){
      score+=1;
    }
    else{
      score-=1;
    }
  }
}
var key = readlineSync.question(questions[questions.length-1].question);
if(key.toLowerCase()==questions[questions.length-1].answer.toLowerCase()){
  console.log(name +score);
}
else{
  console.log("you need specs %s bro %d",name,score );
}