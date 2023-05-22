import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import './chat.css';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import firebase from 'firebase/compat/app';






export default function Chat({user}) {

    const{roomId}= useParams();

    const[roomName,setroomName]=useState('');

    const[input,setInput]=useState('');

    const[messages,setMessages]=useState([]);


    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                    setroomName(snapshot.data().name);
            });

            db.collection('rooms').doc(roomId).collection('message').orderBy('timestamp','asc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc=>doc.data()))
            })
        }
    },[roomId])


    const textInput = (e) => {
        setInput(e.target.value);
    }


    const sendMessage = (e) => {
        e.preventDefault();
        if(input===''){
            return alert('Please Enter Message');
        }
        db.collection('rooms').doc(roomId).collection('message').add({
            name:user.displayName,
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    }

    const[seed,setSeed]=useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[])


  return (
    <div className='chat'>

        {/*Chat Header*/}
        
        <div className='chat-header'>

            <Avatar src={`https://api.dicebear.com/api/human/${seed}.svg`}/>

            <div className='chat-headerInfo'>
                <h3>{roomName}</h3>
                <p>
                    Last Seen{"   "}
                    {
                        new Date(
                            messages[messages.length-1]?.timestamp?.toDate()
                        ).toUTCString()
                    }
                    
                </p>
            </div>

            <div className='header-right'>
                <IconButton><SearchTwoToneIcon/></IconButton>
                <IconButton><AttachFileTwoToneIcon/></IconButton>
                <IconButton><MoreVertTwoToneIcon/></IconButton>
            </div>
        </div>



        {/*Chat Body*/}

        <div className='chat-body'>


            {
             messages.map(message=>(
                <p className={`chat-message ${
                    message.name===user.displayName && 'chat-receiver'}`}>
                    <span className='chat-name'>
                       {message.name}
                    </span>
                    {message.message}
                    <span className='chat-time'>
                        {
                            new Date(message.timestamp?.seconds*1000).toLocaleTimeString()
                        }
                    </span>
                </p>
                    ))

            }

        </div>





        {/*Chat Footer*/}

        <div className='chat-footer'>
                <InsertEmoticonTwoToneIcon/>
                <InsertLinkTwoToneIcon/>
                <form onSubmit={sendMessage}>
                    <input type='text' 
                            value={input}
                            placeholder='Type your Message'
                            onChange={textInput}/>
                    <input type='submit'/>
                </form>
                <MicTwoToneIcon/>
        </div>




    </div>
  )
}
