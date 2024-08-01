import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import firstSlide from '../assets/Slider/1.jpg'

export const Carrousel = () => {
    return (
        <Splide hasTrack={ false }       options={ {
            type         : 'loop',
            gap          : '1rem',
            autoplay     : true,
            pauseOnHover : false,
            resetProgress: false,
            height       : '100%',
          } }>
            <SplideTrack>
                <SplideSlide><img src={firstSlide} alt="Image 1"/></SplideSlide>
                <SplideSlide><img src={firstSlide} alt="Image 2"/></SplideSlide>
                <SplideSlide><img src={firstSlide} alt="Image 3"/></SplideSlide>
            </SplideTrack>

            <div className="splide__progress">
                <div className="splide__progress__bar" />
            </div>
        </Splide>
    )
}