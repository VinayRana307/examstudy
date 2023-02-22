import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Main from './AppMain'
import AppNav from '../Layout/AppNav/Navbar'

const Elements = ({match}) => (
    <Fragment>
        <div className="app-main">
            <div className="app-main__outer">
                <div className="app-main__inner">
                
                    {/* Clients */}
                    <Route path={`${match.url}/userdata`} component={Main}/>
                    <Route path={`${match.url}/userdata`} component={AppNav}/>
					
                </div>
            </div>
        </div>
    </Fragment>
);
export default Elements;