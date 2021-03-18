import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import { SiHeroku } from 'react-icons/si';
import CarouselWrapper from 'components/CarouselWrapper'
import { ImGithub } from 'react-icons/im';
import LoveLetter1 from 'images/LoveLetter/LoveLetter1.png'
import LoveLetter2 from 'images/LoveLetter/LoveLetter2.png'



export default function LoveLetterFront() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveLetterFront_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>LoveLetterFront</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Socket</p>
                        <p>Parcel</p>


                        <h3>Objectives</h3>
                        <p>• Create an digital version of the board game Love-Letter© (simple, complexe, amazing game) </p>
                        <p>• This is a stopped (on hold) projects.</p>


                        <h3>Hosting</h3>
                        <p>Heroku</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link}>
                                <SiHeroku />
                                <a onClick={() => window.location = 'https://loveletterfront.herokuapp.com/'}>loveletterfront.herokuapp.com</a>
                            </div>
                            <div className={parentStyle.link}>
                                <ImGithub />
                                <a onClick={() => window.location = 'https://github.com/edouardlacroix/LoveLetterFront'}>edouardlacroix/LoveLetterFront</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords : React, Redux, Socket, Heroku, Parcel
                        </div>

                    </div>
                </div>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[LoveLetter1, LoveLetter2]} />
                </div>
            </div>
        </div>

    )
}
