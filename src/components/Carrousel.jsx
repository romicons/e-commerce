import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Carrousel = () => {
    return (
        <Splide hasTrack={ false } options={ {
            type         : 'loop',
            gap          : '1rem',
            autoplay     : true,
            pauseOnHover : false,
            resetProgress: false,
            width        : '100%', 
            height: '400px',
        } }>
            <SplideTrack>
                <SplideSlide>
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/petsgo-ecommerce.appspot.com/o/AD_1.png?alt=media&token=f0dda8e2-0162-4fb2-b25b-825812bd8749" 
                        alt="Image 1." 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </SplideSlide>
                <SplideSlide>
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/petsgo-ecommerce.appspot.com/o/AD_2.png?alt=media&token=24b16fe1-cf31-4423-aa47-a38958f3be49" 
                        alt="Image 2." 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </SplideSlide>
                <SplideSlide>
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/petsgo-ecommerce.appspot.com/o/AD_3.png?alt=media&token=a8c66027-bc30-4658-820a-db0d988127dc" 
                        alt="Image 3." 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </SplideSlide>
            </SplideTrack>

            <div className="splide__progress">
                <div className="splide__progress__bar" />
            </div>
        </Splide>
    )
}
