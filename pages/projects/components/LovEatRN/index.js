import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import { TiCancel } from 'react-icons/ti';
import CarouselWrapper from 'components/CarouselWrapper'
import { ImGithub } from 'react-icons/im';
import LovEat1 from 'images/LovEat/LovEat1.png'
import LovEat2 from 'images/LovEat/LovEat2.png'



export default function LovEatRN() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveat_rn_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>LovEatRN</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>React Native</p>
                        <p>Redux</p>

                        <h3>Objectives</h3>
                        <p>• Create app from the same model as LovEat PWA</p>
                        <p>• This is a cancel project as the need where match with only a PWA app, without the complexity of the React Native</p>


                        <h3>Hosting</h3>
                        <p>None for now</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link}>
                                <TiCancel />
                                <a>None</a>
                            </div>
                            <div className={parentStyle.link}>
                                <ImGithub />
                                <a onClick={() => window.open('https://github.com/edouardlacroix/LovEat', '_blank')}>edouardlacroix/LovEat</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords: React Native, Redux
                        </div>

                    </div>
                </div>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[LovEat1, LovEat2]} />
                </div>
            </div>
        </div >

    )
}
