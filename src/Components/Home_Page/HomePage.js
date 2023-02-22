import { Component } from "react";
import NavScrollExample from "./Navbar/Navbar"
import SliderImages from './Slider/slider';
import Section_App from './Section/Section_app'

class HomePage extends Component{
    render(){
        return(
            <div className="homepage">
                fdsaf
                <NavScrollExample/>
                <SliderImages />
                <Section_App />
            </div>
        )
    }
}
export default HomePage;