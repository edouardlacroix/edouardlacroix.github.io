import Head from 'next/head'
import styles from './index.module.scss'
import TopBar from '../../components/TopBar'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <TopBar />

        </div>
    )
}
