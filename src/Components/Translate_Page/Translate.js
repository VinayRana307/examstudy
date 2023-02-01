import { useEffect, useState } from "react";
import axios from 'axios'
import '../../Assets/style.css'

export default function Translate(){
    const [options,setOptions] = useState([])
    const [to,setTo] = useState("en")
    const [from,setFrom] = useState("en")
    const [input,setInput] = useState()
    const [output,setOutput] = useState()



    useEffect(()=>{
        axios.get('https://libretranslate.de/languages',{
            headers:{
                'accept' : 'application/json'
            }
        }).then(res=>{
            setOptions(res.data)
        })
    })


   const Translate = () =>{
        const params = new URLSearchParams();
        params.append('q',input)
        params.append('source',from)
        params.append('target',to)
        params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post("https://libretranslate.de/translate",params,{
          headers:{
            'accept':'application/json',
            'content-type':'application/x-www-form-urlencoded',
          }
        }).then(res=>{
            console.log(res)
          setOutput(res.data.translatedText)
        })
    
      }
    
    return(
        <div>
            <h3 className="text-center mt-2 mb-2">Translate Your Best Language</h3>
            <div className="text-center m-3">
                From ({from})  :
                <select onChange={e=>setFrom(e.target.value)}>
                    {options.map((opt,id )=>
                        <option key={opt.code} value={opt.code}>{opt.name}</option>
                    )}
                </select>
                To ({to})  :
                <select onChange={e=>setTo(e.target.value)}>
                    {options.map((opt,id )=>
                        <option key={opt.code} value={opt.code}>{opt.name}</option>
                    )}
                </select>
            </div>
            <div className="InputValue text-center">
                <textarea cols="50" rows="8" onInput={(e)=>setInput(e.target.value)}></textarea>
            </div>
            <div className="outputValue text-center">
                <textarea cols="50" rows="8" value={output}></textarea>
            </div>
            <div className="translate_button">
                <button onClick={e=>Translate()}>Translate</button>
            </div>
            <div className="footer_translate">
                <p>@ powered by vinay rana  ..... </p>
            </div>
        </div>
    )


}