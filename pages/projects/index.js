import styles from './index.module.scss'
import TopBar from 'components/TopBar'
import ScrollToTop from 'components/ScrollToTop'
import Technologies from './components/Technologies'
import UnityLearning from './components/UnityLearning'
import LoveLetterFront from './components/LoveLetterFront'
import LoveLetterServer from './components/LoveLetterServer'
import LovEatRN from './components/LovEatRN'
import SoundBox from './components/SoundBox'
import LovEatPWA from './components/LovEatPWA'
import LovEatStrapi from './components/LovEatStrapi'
import GithubPages from './components/GithubPages'
import ToLearn from './components/ToLearn'
import ISSViewer from './components/ISSViewer'
import SubMenu from '../../components/SubMenu'




export default function Home() {


    return (
        <div className={styles.wrapper}>
            <TopBar />
            <ScrollToTop />
            <div className={styles.content_wrapper} id={'projects_div'}>
                <Technologies />
                <SubMenu />
                <LovEatPWA />
                <LovEatStrapi />
                <GithubPages />
                <LoveLetterFront />
                <LoveLetterServer />
                <LovEatRN />
                <UnityLearning />
                <ISSViewer />
                {/* <SoundBox /> */}
                {/* <ToLearn /> */}
            </div>
        </div>
    )
}
