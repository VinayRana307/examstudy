import React, { useEffect, useState } from "react";
import admin_user from "../../../Assets/utils/images/admin_user.jpg"
import { getDatabase,onChildAdded, push, ref, set } from "firebase/database";

function ChatApp(){
    const [name, setName] = useState("");
    const [chat, setChat] = useState([]);
    const [msg, setMsg] = useState("");

    const db = getDatabase();
    const chatListRef = ref(db, 'chat');

    useEffect(()=>{
        onChildAdded(chatListRef, (data) => {
            setChat(chat=>[...chat,data.val()])
          });
    },[])

    const sendChat = () =>{

        const chatListRef = ref(db, 'chat');
        const chatRef = push(chatListRef);
        set(chatRef, {
            name,message:msg
        });

        setMsg('');
    }
    return(
        <div className="chatApp">
             
             {name? null :<div>
                <input type="text" placeholder="Enter your Name" onBlur={(e)=>setName(e.target.value)} />
            </div>}
            {name?
            <div>
            <h1>User :{name}</h1>
            <div className="Chat_container">
                {chat.map((data,id)=>(
                <div key={id} className={`container-fluid ${data.name==name ? 'user_text_side' : ''}`}>
                    <p className="Chat_box">
                        <strong>{data.name} : </strong>
                        <span>{data.message}</span>
                    </p>
                    <div className="icon">
                        <img 
                        src={admin_user}
                        alt=""
                        className="chatAvatar"
                        />
                    </div>
                    
                    <span>{data.time}</span>
                </div>
                ))}
                <div className="Chat_message_input">
                    <input type="text" placeholder="Enter your message" onInput={e=>setMsg(e.target.value)} value={msg}/>
                    <button type="submit" onClick={e=>sendChat()}>Send</button>    
                </div>   
            </div>
            </div>:null}
        </div>
    )
}

export default ChatApp;