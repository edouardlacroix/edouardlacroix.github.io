import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'
import JSLogo from 'images/jsLogo.png'
import TSLogo from 'images/tsLogo.png'
import SCSSLogo from 'images/scssLogo.png'
import CSHARPLogo from 'images/cSharpLogo.png'
import REACTLogo from 'images/reactLogo.jpg'
import STRAPILogo from 'images/strapiLogo.jpg'
import REACTNATIVELogo from 'images/reactNativeLogo.png'
import NEXTJSLogo from 'images/nextJsLogo.png'
import REDUXLogo from 'images/reduxLogo.jpg'
import GITLABLogo from 'images/GitLabCICDLogo.jpg'




// Here we can controll the list of logo displayed
const techsList = [
    { id: 1, name: 'React', logo: REACTLogo, link: '' },
    { id: 2, name: 'Redux', logo: REDUXLogo, link: '' },
    { id: 3, name: 'Next Js', logo: NEXTJSLogo, link: '' },
    { id: 4, name: 'JavaScript', logo: JSLogo, link: '' },
    { id: 5, name: 'GitLab CI/CD', logo: GITLABLogo, link: '' },
    { id: 6, name: 'Scss', logo: SCSSLogo, link: '' },
    { id: 7, name: 'TypeScript', logo: TSLogo, link: '' },
    { id: 8, name: 'Strapi', logo: STRAPILogo, link: '' },
    { id: 9, name: 'React Native', logo: REACTNATIVELogo, link: '' },

    // { id: 9, name: 'C#', logo: CSHARPLogo, link: '' },


]

// List of available project
const projectList = [
    { id: 1, name: 'LovEat PWA ', idToScroll: "#loveat_pwa_div", link: '' },
    { id: 2, name: 'LovEat PWA - Strapi ', idToScroll: "#loveatBack_pwa_div", link: '' },
    { id: 3, name: 'Github Pages ', idToScroll: "#gitubPages_div", link: '' },
    { id: 4, name: 'LoveLetterFront ', idToScroll: "#loveLetterFront_div", link: '' },
    { id: 5, name: 'LoveLetterServer', idToScroll: "#loveLetterServer_div", link: '' },
    { id: 6, name: 'LovEat - RN ', idToScroll: "#loveat_rn_div", link: '' },
    { id: 7, name: 'UnityLearning ', idToScroll: "#unityLearning_div", link: '' },
//     { id: 8, name: 'SoundBox - RN ', idToScroll: "#soundbox_div", link: '' },
]

export default function Technologies() {
    const router = useRouter()

    const scrollTo = (hashId) => {
        // Check if window exist to avoid SSR error
        if (typeof window !== 'undefined') {
            if (hashId) {
                // Use the hash to find the first element with that id
                const element = document.querySelector(hashId);
                if (element) {
                    // Smooth scroll to that elment
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    });
                }
            }
        }
    }
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'technologies_div'}>
            <h1>Technologies</h1>
            <div className={styles.logosWrapper}>
                {techsList.map((item, key) => {
                    return (
                        <div className={styles.logoWrapper} key={key}>
                            <img src={item.logo} className={styles.logo} />
                            <p>{item.name}</p>
                        </div>
                    )

                })}
            </div>

            <div className={styles.anchorsWrapper}>
                {projectList.map((item, key) => {
                    return (
                        <p className={styles.anchor} onClick={() => scrollTo(item.idToScroll)} key={key}>{item.name}</p>)
                })}
            </div>
        </div >
    )
}
