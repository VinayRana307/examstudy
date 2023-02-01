import '../../Assets/style.css';
import India_Questions from '../../Questions/India/India_Questions'
import React from 'react';
import { Component } from 'react';
import axios from "axios";

class India_GK extends Component{
  constructor(){
    super();
    this.state={
    }
  }
    render(){
        return(
            <div className="App">
             <span className="link" ><a href="/examstudy/#/home">Home</a></span>
            <h1 className="headings"><u><i><b>भारत का इतिहास</b></i></u></h1>
            {India_Questions.map((data,id) =>{
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
export default India_GK;