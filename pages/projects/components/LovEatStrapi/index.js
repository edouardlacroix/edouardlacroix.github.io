import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import { SiStrapi } from 'react-icons/si';
import Strapi1 from 'images/StrapiLovEat/Strapi1.png'
import Strapi2 from 'images/StrapiLovEat/Strapi2.png'
import CarouselWrapper from 'components/CarouselWrapper'
import { ImGithub } from 'react-icons/im';



export default function LovEatStrapi() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveatBack_pwa_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>LovEatStrapi</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>Strapi</p>
                        <h3>Objectives</h3>
                        <p>• Create an backend to serve (pun intended) the meals object to the PWA</p>
                        <p>• This is still a work in progress. It was started to explore Strapi.</p>


                        <h3>Hosting</h3>
                        <p>Heroku</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link}>
                                <SiStrapi />
                                <a onClick={() => window.location = 'https://loveat-back.herokuapp.com/'}>loveat-back.herokuapp.com</a>
                            </div>
                            <div className={parentStyle.link}>
                                <ImGithub />
                                <a onClick={() => window.location = 'https://github.com/edouardlacroix/loveat-pwa-back'}>edouardlacroix/loveat-pwa-back</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords: Strapi, Heroku
                        </div>

                    </div>
                </div>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[Strapi1, Strapi2]} />
                </div>
            </div>
        </div>

    )
}
