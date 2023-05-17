import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import './chat.css';



export default function Chat() {
  return (
    <div className='chat'>

        {/*Chat Header*/}
        
        <div className='chat-header'>
            <Avatar/>
            <div className='chat-headerInfo'>
                <h3>Name</h3>
                <p>Last Seen</p>
            </div>

            <div className='header-right'>
                <IconButton><SearchTwoToneIcon/></IconButton>
                <IconButton><AttachFileTwoToneIcon/></IconButton>
                <IconButton><MoreVertTwoToneIcon/></IconButton>
            </div>
        </div>



        {/*Chat Body*/}

        <div className='chat-body'>
                <p className='chat-message chat-receiver'>
                    <span className='chat-name'>
                        My Name
                    </span>
                    Text Msg
                    <span className='chat-time'>
                        12:00PM
                    </span>
                </p>


                <p className='chat-message chat-receiver'>
                    <span className='chat-name'>
                        My Name
                    </span>
                    Text Msg
                    <span className='chat-time'>
                        12:00PM
                    </span>
                </p>


                <p className='chat-message chat-receiver'>
                    <span className='chat-name'>
                        My Name
                    </span>
                    Text Msg
                    <span className='chat-time'>
                        12:00PM
                    </span>
                </p>



                <p className='chat-message'>
                    <span className='chat-name'>
                        My Name
                    </span>
                    Text Msg
                    <span className='chat-time'>
                        12:00PM
                    </span>
                </p>

        </div>


        {/*Chat Footer*/}

        <div className='chat-footer'>
                <InsertEmoticonTwoToneIcon/>
                <InsertLinkTwoToneIcon/>
                <form>
                    <input type='text' placeholder='Type your Message'/>
                    <input type='submit'/>
                </form>
                <MicTwoToneIcon/>
        </div>




    </div>
  )
}
