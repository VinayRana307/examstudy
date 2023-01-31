import { Component } from "react";
import NavScrollExample from "./Navbar/Navbar"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

class HomePage extends Component{
    render(){
        const fadeImages = [
            {
              url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              caption: 'First Slide'
            },
            {
              url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
              caption: 'Second Slide'
            },
            {
              url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              caption: 'Third Slide'
            },
          ];

        return(
            <div className="homepage">
                <NavScrollExample/>
                <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%'}} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
            </div>
        )
    }
}
export default HomePage;