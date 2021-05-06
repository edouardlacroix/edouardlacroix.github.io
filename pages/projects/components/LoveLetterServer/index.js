import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import CarouselWrapper from 'components/CarouselWrapper'
import { ImGithub } from 'react-icons/im';
import { SiHeroku } from 'react-icons/si';
import LoveLetter1 from 'images/LoveLetterBack/LoveLetterBack1.png'



export default function LoveLetterBack() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveLetterServer_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[LoveLetter1]} />
                </div>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>LoveLetterServer</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>TypeScript</p>
                        <p>Express</p>
                        <p>Socket</p>

                        <h3>Objectives</h3>
                        <p>• Create the backend for the game LoveLetter.</p>
                        <p>• Allow the game to run, calculate different effects of card, winner, etc...</p>
                        <p>• This project was started to discover Next JS and provide a more friendly lookup on my tests projects.</p>
                        <h3>Hosting</h3>
                        <p>Github Pages</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link} onClick={() => window.open('https://loveletterback.herokuapp.com/', '_blank')}>
                                <SiHeroku />
                                <a >loveletterback.herokuapp.com</a>
                            </div>
                            <div className={parentStyle.link} onClick={() => window.open('https://github.com/edouardlacroix/LoveLetterServer', '_blank')}
                                onMouseDown={(event) => event.button === 1 ? window.open('https://github.com/edouardlacroix/LoveLetterServer', '_blank') : null}>
                                <ImGithub />
                                <a>edouardlacroix/LoveLetterServer</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords : TypeScript, Express, Socket, Heroku
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
