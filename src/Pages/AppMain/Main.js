import React, { Component } from 'react';
import AppSideBar from '../../Layout/Sidebar/AppSideBar'
import AppNav from '../../Layout/AppNav/Navbar'
import Widgets from '../../Layout/Widget/Widget';
import Dashboard_Chart from '../Elements/Dashboard/Charts/chart';
import Featured from '../Elements/Dashboard/Featured/Featured';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className='app_main'>
                <AppSideBar />

                <div className='app_main_containner'>
                    <AppNav />

                    <div className='widgets'>
                     <Widgets type="user"/>
                     <Widgets type="order"/>
                     <Widgets type="earning"/>
                     <Widgets type="balance"/>
                    </div>
                    <div className='charts'>
                    <Featured />
                    <Dashboard_Chart />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;