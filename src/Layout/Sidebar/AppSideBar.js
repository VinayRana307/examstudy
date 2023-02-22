import React, { Component } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AnchorIcon from '@mui/icons-material/Anchor';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


class AppSideBar extends Component{
    render(){
        return(
            <div className='appsidebar'>
                <div className='top'>
                    <span className='logo'>Admin</span>
                </div>
                <hr/>
                <div className='center'>
                    <ul>
                        <p className="title">Main</p>
                        <li>
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </li>
                        <p className="title">List</p>
                        <li>
                            <PersonOutlineIcon className="icon"/>
                            <span>User</span>
                        </li>
                        <li>
                            <InventoryIcon className="icon"/>
                            <span>Product</span>
                        </li>
                        <li>
                            <ProductionQuantityLimitsIcon className="icon"/>
                            <span>Order</span>
                        </li>
                        <li>
                            <LocalShippingIcon className="icon"/>
                            <span>Delivery</span>
                        </li>
                        <p className="title">Userful</p>
                        <li>
                            <InsertChartIcon className="icon"/>
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneIcon className="icon"/>
                            <span>Notification</span>
                        </li>
                        <p className="title">Service</p>
                        <li>
                            <MonitorHeartIcon className="icon"/>
                            <span>System Health</span>
                        </li>
                        <li>
                            <AnchorIcon className="icon"/>
                            <span>Logs</span>
                        </li>
                        <li>
                            <SettingsIcon className="icon"/>
                            <span>Setting</span>
                        </li>
                        <p className="title">User</p>
                        <li>
                            <AccountCircleIcon className="icon"/>
                            <span>Profile</span>
                        </li>
                        <li>
                            <LogoutIcon className="icon"/>
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
                <div className='bottom'>
                    <div className='colorOption'></div>
                    <div className='colorOption'></div>
                    <div className='colorOption'></div>
                </div>
            </div>
        )
    }
}

export default AppSideBar;