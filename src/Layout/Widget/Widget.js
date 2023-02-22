import React, { Component } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

class Widgets extends Component{
    constructor(props){
        super();
        this.state ={
            amount:100,
            diff : 20,
        }
    }
    loadComponent(){
       
    }
    render(props){
        let data;
        const amount = 100;
        const diff = 20;

        switch(this.props.type){
            case "user":
                data ={
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    icon: <PersonOutlineIcon 
                    classNAME="icon"
                    style={{
                        color:'crimson',
                        backgroundColor:'rgba(255, 0, 0, 0.2)'
                    }}
                    />
                }
                break;
                case "order":
                data ={
                    title:"ORDERS",
                    isMoney:false,
                    link:"See all orders",
                    icon: <ShoppingCartOutlinedIcon 
                    classNAME="icon" 
                    style={{
                        color:'green',
                        backgroundColor:'rgba(0, 128, 0, 0.2)'
                    }}
                    />
                }
                break;
                case "earning":
                data ={
                    title:"EARNINGS",
                    isMoney:true,
                    link:"See all earnings",
                    icon: <MonetizationOnOutlinedIcon 
                    classNAME="icon"
                    style={{
                        color:'goldenrod',
                        backgroundColor:'rgba(218, 165, 32, 0.2)'
                    }} 
                    />
                }
                break;
                case "balance":
                data ={
                    title:"BALANCE",
                    isMoney:false,
                    link:"See details",
                    icon: <AccountBalanceWalletOutlinedIcon 
                    classNAME="icon" 
                    style={{
                        color:'purple',
                        backgroundColor:'rgba(128, 0, 128, 0.2)'
                    }}
                    />
                }
                break;

                default:
                    break;
                    console.log(data)

    } 
    console.log(data)
        return(
            <div className='widget'>
                {this.loadComponent()}
                <div className='left'>
                    <span className='title'>{data.title}</span>
                    <span className='counter'>
                       {data.isMoney && "$"}{amount}
                        </span>
                    <span className='widget_link'>{data.link}</span>
                </div>
                <div className='right'>
                    <div className='percentage'>
                        <KeyboardArrowUpIcon />
                        {diff} %
                    </div>
                    {data.icon}
                </div>
            </div>
        )
    }
}

export default Widgets;