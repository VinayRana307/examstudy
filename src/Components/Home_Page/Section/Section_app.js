import { Component } from "react";
import hpgk from '../../../Assets/utils/images/hpgk.jpeg'
import india_gk from '../../../Assets/utils/images/india_gk.png'

import {Link} from 'react-router-dom';


export default class Section_App extends Component{
    render(){
        return(
            <div className="">
                <div className="row">
                    <div className="firstgrid col-lg-6 col-sm-12 text-center p-0">
                        <div className="m-0 p-0">
                            <Link to="/himachal_gk" className="m-0 p-0">
                                <img src={hpgk} width={100} height={100} className="msoffice"/>
                                <strong>Himachal MCQ</strong>
                                <p>himachal pradesh multiple type question in here</p>
                            </Link>
                        </div>
                    </div>
                    <div className="firstgrid col-lg-6 col-sm-12 text-center mt-5">
                        <div>
                            <Link to="/india_gk">
                                <img src={india_gk} width={100} height={100} className="msoffice"/>
                                <strong>India MCQ</strong>
                                <p>India multiple type question in here</p>
                            </Link>
                        </div>
                    </div>
                    <div className="footer">
                        <p>@copyright powered by vinay rana</p>
                    </div>
                </div>
            </div>
        )
    }
}