import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import CarouselWrapper from 'components/CarouselWrapper'

import Github from 'images/GithubPages/GitHubPages.png'

import { ImGithub } from 'react-icons/im';


export default function GithubPages() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'gitubPages_div'}>
            <div className={parentStyle.sharedContentWrapper}>
                <div className={parentStyle.carouselWrapper}>
                    <CarouselWrapper images={[Github]} />
                </div>
                <div className={parentStyle.descriptionWrapper}>
                    <h1>GithubPages</h1>
                    <div className={parentStyle.descriptionText}>
                        <h3>Technologies</h3>
                        <p>React</p>
                        <p>NextJs</p>
                        <h3>Objectives</h3>
                        <p>• Create an easy viewer for the projects hosted on my Github.</p>
                        <p>• Allow the user to see screenshot and a brief explanation of the project.</p>
                        <p>• This project was started to discover Next JS and provide a more friendly lookup on my tests projects.</p>
                        <h3>Hosting</h3>
                        <p>Github Pages</p>
                        <div className={parentStyle.linkWrapper}>
                            <div className={parentStyle.link} onClick={() => window.location = 'https://edouardlacroix.github.io/'}>
                                <ImGithub />
                                <a >This</a>
                            </div>
                            <div className={parentStyle.link} onClick={() => window.location = 'https://github.com/edouardlacroix/edouardlacroix.github.io'}
                                onMouseDown={(event) => event.button === 1 ? window.open('https://github.com/edouardlacroix/edouardlacroix.github.io') : null}>
                                <ImGithub />
                                <a >edouardlacroix/edouardlacroix.github.io</a>
                            </div>
                        </div>

                        <div className={parentStyle.keywords}>
                            Keyword : React, NextJs, GithubPages, WowMeta
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}
