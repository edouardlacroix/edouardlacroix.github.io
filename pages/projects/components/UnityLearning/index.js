import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import CarouselWrapper from 'components/CarouselWrapper'
import { ImGithub } from 'react-icons/im';
import { AiFillYoutube } from 'react-icons/ai';
import Unity1 from 'images/Unity/Unity1.png'
import Unity2 from 'images/Unity/Unity2.png'

export default function UnityLearning() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'unityLearning_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[Unity1, Unity2]} />
                </div>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>UnityLearning</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>Unity</p>
                        <p>C#</p>

                        <h3>Objectives</h3>
                        <p>• Learn the process of game development on Unity.</p>
                        <p>• Allow the game to run, calculate different effects of card, winner, etc...</p>

                        <h3>Hosting</h3>
                        <p>None for now</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link} onClick={() => window.location = 'https://www.youtube.com/watch?v=Y3-iYIs16TI&list=PLUWxWDlz8PYKnrd27LTqOxL2lr3KhEVRT'}>
                                <AiFillYoutube />
                                <a>youtube/tutoriel</a>
                            </div>
                            <div className={parentStyle.link} onClick={() => window.location = 'https://github.com/edouardlacroix/UnityLearning'}
                                onMouseDown={(event) => event.button === 1 ? window.open('https://github.com/edouardlacroix/UnityLearning') : null}>
                                <ImGithub />
                                <a>edouardlacroix/LoveLetterServer</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords : Unity, C#
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
