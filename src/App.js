
import React,{useState}from "react"
import questions from "./qustions";

function App() {
  console.log(questions.length)
  const [finalResult,setFinalresult]=useState(false);
  const [qustionCount,setQuestioncount]=useState(0);
  const [score,setScore]=useState(0);
  function check(isCorrect){
    console.log(qustionCount+1);
    console.log(isCorrect);
    if(isCorrect){
      setScore(score+1);
     }
     if(qustionCount+1<questions.length){
      setQuestioncount(qustionCount+1);
     }
     else{
      setFinalresult(true);
     }
    };
   const restartQuiz=()=>{
      setScore(0);
      setQuestioncount(0);
      setFinalresult(false);
      
    }
    

  return (
    <div className="App">
      {finalResult?<div className="final-result">
        <h1 className="head">Final Results</h1>
        <h2>{score} out of 5 correct</h2>
        {score<4?<p>Try Again</p>:<p>Congratulations..!</p>}
        <button onClick={()=>restartQuiz()}>Restart game</button>

      </div>: <div><h1>Quiz </h1>
      <h2>Current Score:{score}</h2>
      <div className='question-card'>
        <h2>Question {qustionCount+1} out of 5</h2>
        <h3 className="question-text">{questions[qustionCount].text}</h3>
        <ul>
         {questions[qustionCount].options.map((option)=>{
          return(
          <li key={option.id} onClick={()=>{check(option.isCorrect)}}>{option.text}</li>
          );
         })}
        </ul>
      </div>
      </div>}
     

      
     
    </div>
  );
}

export default App;
