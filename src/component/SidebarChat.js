import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import'./sidebar.css';



export default function SidebarChat({addnewChat}) {

    const[seed,setSeed]=useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[])


  return (
            addnewChat ? (
                    <div className='sidebar-chat'>
                        <h2>Add New Chat</h2>
                    </div>
            ) : (
                    <div className='sidebar-chat'>
                        <Avatar src={`https://api.dicebear.com/api/human/${seed}.svg`}/>
        
                        <div className='sidebar-chatinfo'>
                            <h2>Name</h2>
                            <p>last Msg</p>
                        </div>
                    </div>
            ) 
        

  )
}
