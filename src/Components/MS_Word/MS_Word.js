import '../../Assets/style.css';
import msword_quiz from '../../Questions/MS_Word/Word_Questions'
import React from 'react';
import { Component } from 'react';
class WordQuiz extends Component{
  constructor(){
    super();
    this.state={

    }
  }
    render(){
        return(
            <div className="App">
             <span className="link" ><a href="/examstudy/#/home">Home</a></span>
            <h1 className="headings"><u><i><b>Computer MS Word MCQ Questions</b></i></u></h1>
            {msword_quiz.map((data,id) =>{
              return (
                <div className="Questions">
                    <strong><p key={id}>{data.question}</p></strong>
                    <p key={id}>{data.option1}</p>
                    <p key={id}>{data.option2}</p>
                    <p key={id}>{data.option3}</p>
                    <p key={id}>{data.option4}</p>
                    <strong>Ans : <p className="answer" key={id}>{data.answer}</p></strong>
                    <hr/>
                </div>
              )
            })
          }   
          </div>
        )
    }
};
export default WordQuiz;