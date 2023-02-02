import { Component } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import books1 from '../../../Assets/utils/images/books1.jpg'
import books2 from '../../../Assets/utils/images/books2.jpg'
import books3 from '../../../Assets/utils/images/books3.jpg'
import books4 from '../../../Assets/utils/images/books4.jpg'

export default class SliderImages extends Component{
    render(){
        const fadeImages = [
            {
              url: books1,
              caption: 'First Slide'
            },
            {
              url: books2,
              caption: 'Second Slide'
            },
            {
              url: books3,
              caption: 'Third Slide'
            },
            {
              url: books4,
              caption: 'Fourth Slide'
            },
          ];

        return(
            <div className="slide-container">
                <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                    <img style={{ width: '100%'}} src={fadeImage.url} />
                    </div>
                ))}
                </Fade>
            </div>
        )
    }
}