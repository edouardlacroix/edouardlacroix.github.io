import styles from './index.module.scss'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from "prop-types";



export default function CarouselWrapper(props) {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className={styles.wrapper}>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                infinite={true}
                bullets={false}
                buttons={true}
                organicArrows={false}
            >
                {props?.images.map(item => {
                    return (
                        <div className={styles.imageWrapper}>
                            <img src={item} className={styles.image} />
                        </div>

                    )
                })}
            </AutoplaySlider>
        </div>
    )
}

PropTypes.CarouselWrapper = {
    images: PropTypes.array.isRequired
};
