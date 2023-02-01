import { Component } from "react";
import India_notes from '../../Questions/India/notes'
class India_allnotes extends Component{
    render(){
        return(
            <div className="india_notes">
                <h3 className="text-center" style={{color:'red',padding:'30px 0px'}}>अन्य महत्वपूरण तथ्य</h3>
                <ol type="1">
                    {India_notes.map((data,id)=>
                    <li>{data.text}</li>
                    )}
                </ol>
            </div>
        )
    }
}
export default India_allnotes;