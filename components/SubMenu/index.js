import styles from './index.module.scss'
import { useRouter } from 'next/router'

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
        <div className={styles.wrapper} id={'subMenu_div'}>
            <div className={styles.anchorsWrapper}>
                {projectList.map((item, key) => {
                    return (
                        <p className={styles.anchor} onClick={() => scrollTo(item.idToScroll)} key={key}>{item.name}</p>)
                })}
            </div>
        </div >
    )
}
