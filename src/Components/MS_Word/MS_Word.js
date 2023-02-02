import '../../Assets/style.css';
import msword_quiz from '../../Questions/MS_Word/Word_Questions'
import React from 'react';
import { Component } from 'react';
import axios from "axios";

class WordQuiz extends Component{
  constructor(){
    super();
    this.state={
      fromLanguage : [],
      toValue:'en',
      fromValue:'en',
    }
  }
    render(){
      let { fromLanguage } = this.state;
      console.log(fromLanguage)
        return(
            <div className="App">
             <span className="link" ><a href="/examstudy/#/home">Home</a></span>
            <h1 className="headings"><u><i><b>Computer MS Word MCQ Questions</b></i></u></h1>
            {msword_quiz.map((data,id) =>{
              return (
                <div className="Questions">
                    <strong style={{display:'flex'}}>{id+1}.<p key={id} style={{marginBottom:'3px',marginLeft:'10px'}}>{data.question}</p></strong>
                    <strong><p key={id} style={{margin:'0px 30px',marginBottom:'20px',fontSize:'15px'}}>{data.hindiquestion}</p></strong>

                    <p key={id} >{data.option1}
                      <p key={id} style={{margin:'0px 20px'}}>{data.hindi1}</p>
                    </p>

                    <p key={id} >{data.option2}
                      <p key={id} style={{margin:'0px 20px'}}>{data.hindi2}</p>
                    </p>

                    <p key={id} >{data.option3}
                      <p key={id} style={{margin:'0px 20px'}}>{data.hindi3}</p>
                    </p>

                    <p key={id} >{data.option4}
                      <p key={id} style={{margin:'0px 20px'}}>{data.hindi4}</p>
                    </p>
                    <strong>Ans : <p className="answer" key={id}>{data.answer}</p></strong>
                    <strong><p className="answer" key={id} style={{margin:'2px 60px',display:'block'}}>{data.hindiAns}</p></strong>
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