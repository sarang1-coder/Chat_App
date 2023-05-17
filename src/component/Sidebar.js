import React from 'react';

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




export default function slidebar() {
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
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>

        

    </div>
  )
}
