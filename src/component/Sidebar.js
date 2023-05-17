import React, { useEffect, useState } from 'react';

// Import Avatar 
import {Avatar, IconButton} from '@material-ui/core';


// Import Icons 
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


// Import css 
import './sidebar.css';
import SidebarChat from './SidebarChat';

// import DB 
import db from '../firebase.js';




export default function Sidebar() {

  const[rooms,setRooms]=useState([]);

  useEffect(()=>{
      db.collection('rooms').onSnapshot(snapshot=>{
        setRooms(snapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
        })))
      })
  },[])


  return (
    <div className='sidebar'>

        {/*Header*/}
        <div className='sidebar-header'>

            <Avatar/>

            <div className='sidebar-headerRight'>
                    <IconButton><DonutLargeRoundedIcon/></IconButton>
                    <IconButton><ChatTwoToneIcon/></IconButton>
                    <IconButton><MoreVertTwoToneIcon/></IconButton>
            </div>
          </div>


            {/*Search*/}
            <div className='sidebar-search'>
                <div className='sidebar-searchContainer'>
                    <SearchTwoToneIcon/>
                    <input type='text' placeholder='Search or Start New Chat'/>
                </div>
            </div>


            {/*Chat section*/}
            <div className='sidebar-Chat'>
                <SidebarChat addnewChat/>
                {
                  rooms.map(room=>{
                    return <SidebarChat 
                              key={room.id}
                              id={room.id}
                              name={room.data.name}
                            />
                  })
                }
                
            </div>

        

    </div>
  )
}
