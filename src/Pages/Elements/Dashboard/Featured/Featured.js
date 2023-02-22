import React, { Component } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

class Featured extends Component{
    render(){
        return(
            <div className='featured'>
                <div className='top'>
                    <h1 className='title'>Total Revenue</h1>
                    <MoreVertIcon />
                </div>
                <div className='bottom'>
                    <div className='featuredChart'>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>;
                    </div>
                    <p className='title'>Total sale made today</p>
                    <p className='amount'>$815</p>
                    <p className='desc'>
                        Previous transaction processing. Last payment may not be included.
                    </p>
                    <div className='summary'>
                        <div className='item'>
                            <div className='itemTitle'>Target</div>
                            <div className='itemResult positive' style={{color:'red'}}>
                                <KeyboardArrowDownIcon fontSize="small"/>
                                <div className='resultAmount'>$14.2k</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='itemTitle'>Last Week</div>
                            <div className='itemResult positive'>
                                <KeyboardArrowDownIcon fontSize="small"/>
                                <div className='resultAmount'>$14.2k</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='itemTitle'>Last Month</div>
                            <div className='itemResult negative' style={{color:'green'}}>
                                <KeyboardArrowDownIcon fontSize="small"/>
                                <div className='resultAmount'>$14.2k</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        )
    }
}

export default Featured;