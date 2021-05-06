import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import CarouselWrapper from 'components/CarouselWrapper'
import { ImGithub } from 'react-icons/im';
import { BsFillTriangleFill } from 'react-icons/bs';
import ISSViewer1 from 'images/ISSViewer/ISSViewer1.png'
import ISSViewer2 from 'images/ISSViewer/ISSViewer2.png'

export default function ISSViewer() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'issviewer_div'}>
            <div className={parentStyle.sharedContentWrapper}>

                <div className={parentStyle.descriptionWrapper}>
                    <h1>ISS Viewer</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>React</p>

                        <h3>Objectives</h3>
                        <p>• Gather ISS live feed and ISS position in real time</p>

                        <h3>Hosting</h3>
                        <p>Vercel</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link} onClick={() => window.open('https://iss-viewer.vercel.app/', '_blank')}>
                                <BsFillTriangleFill />
                                <a>iss-viewer.vercel.app</a>
                            </div>
                            <div className={parentStyle.link} onClick={() => window.open('https://github.com/edouardlacroix/UnityLearning', '_blank')}
                                onMouseDown={(event) => event.button === 1 ? window.open('https://github.com/edouardlacroix/ISSViewer') : null}>
                                <ImGithub />
                                <a>edouardlacroix/ISSViewer</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keywords : React, Vercel
                        </div>

                    </div>
                </div>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[ISSViewer1, ISSViewer2]} />
                </div>
            </div>
        </div>

    )
}
