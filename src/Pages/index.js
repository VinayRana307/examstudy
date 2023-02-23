import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Main from './AppMain/Main'
import AppNav from '../Layout/AppNav/Navbar'
import ChatApp from '../Pages/Elements/ChatUser/Chat'

const Elements = ({match}) => (
    <Fragment>
        <div className="app-main">
            <div className="app-main__outer">
                <div className="app-main__inner">
                
                    {/* Clients */}
                    <Route path={`${match.url}/userdata`} component={Main}/>
                    <Route path={`${match.url}/userdata1`} component={AppNav}/>
                    <Route path={`${match.url}/chat`} component={ChatApp}/>
					
                </div>
            </div>
        </div>
    </Fragment>
);
export default Elements;