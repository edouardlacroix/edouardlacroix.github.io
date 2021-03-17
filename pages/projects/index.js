import Head from 'next/head'
import styles from './index.module.scss'
import TopBar from '../../components/TopBar'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <TopBar />
            </Head>
            <div className={styles.horizontalBar}>
                <h1>Technologies</h1>
                <h2>JavaScript</h2>

            </div>

            <div className={styles.horizontalBar}>
                <h1>UnityLearning</h1>

            </div>
            <div className={styles.horizontalBar}>
                <h1>LoveLetterFront</h1>

            </div>
            <div className={styles.horizontalBar}>
                <h1>LoveLetterServer</h1>

            </div>
            <div className={styles.horizontalBar}>
                <h1>LovEat (React Native)</h1>

            </div> <div className={styles.horizontalBar}>
                <h1>SoundBox</h1>

            </div> <div className={styles.horizontalBar}>
                <h1>LovEat (PWA)</h1>

            </div>

            <div className={styles.horizontalBar}>
                <h1>LovEat (Strapi)</h1>

            </div>




        </div>
    )
}
