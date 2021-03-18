import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import CarouselWrapper from 'components/CarouselWrapper'
import { AiOutlineLink } from 'react-icons/ai';
import LovEat1 from 'images/LovEat/LovEat1.png'
import LovEat2 from 'images/LovEat/LovEat2.png'
import LovEat3 from 'images/LovEat/LovEat3.png'
import LovEat4 from 'images/LovEat/LovEat4.png'
import { ImGithub } from 'react-icons/im';
import { RiReactjsLine } from 'react-icons/ri';





export default function LovEatPWA() {
    const router = useRouter()

    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveat_pwa_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[LovEat1, LovEat2, LovEat3, LovEat4]} />
                </div>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>LovEatPWA</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>React</p>
                        <p>Redux</p>
                        <h3>Objectives</h3>
                        <p>• Create an app that allow someone to choose his next meal</p>
                        <p>• The user can add a meal with differents parameters, such as ingredients, how to buy/make/deliver the meal.</p>
                        <p>• This is still a work in progress. This project was started to explore PWA in react.</p>


                        <h3>Hosting</h3>
                        <p>Vercel</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link}>
                                <RiReactjsLine />
                                <a onClick={() => window.location = 'https://loveat.vercel.app/'}>loveat.vercel.app</a>
                            </div>
                            <div className={parentStyle.link}>
                                <ImGithub />
                                <a onClick={() => window.location = 'https://github.com/edouardlacroix/LovEat-pwa'}>edouardlacroix/LovEat-pwa</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords: React, Redux, PWA, Vercel
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
