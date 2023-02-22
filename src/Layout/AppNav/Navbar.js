import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import admin_user from '../../Assets/utils/images/admin_user.jpg'
class AppNav extends Component{
    render(){
        return(
            <div className='app_navbar'>
                <div className='wrapper'>
                    <div className='search'>
                        <input type="text" placeholder='Search ... '/>
                        <SearchOutlinedIcon className='icon'/>
                    </div>
                    <div className='items'>
                    <div className='item'>
                            <Link to="/home">Home</Link>
                        </div>
                        <div className='item'>
                            <LanguageOutlinedIcon className='icon'/>
                        </div>
                        <div className='item'>
                            <DarkModeOutlinedIcon className='icon'/>
                        </div>
                        <div className='item'>
                            <FullscreenExitOutlinedIcon className='icon'/>
                        </div>
                        <div className='item'>
                            <NotificationsNoneOutlinedIcon className='icon'/>
                            <div className='counter'>1</div>
                        </div>
                        <div className='item'>
                            <ChatBubbleOutlineOutlinedIcon className='icon'/>
                            <div className='counter'>2</div>
                        </div>
                        <div className='item'>
                            <ListOutlinedIcon className='icon'/>
                        </div>
                        <div className='item'>
                            <img 
                            src={admin_user}
                            alt=""
                            className='avatar'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppNav;