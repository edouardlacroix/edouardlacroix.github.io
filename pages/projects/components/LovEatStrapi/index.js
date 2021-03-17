import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'




export default function LovEatStrapi() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveatBack_pwa_div'}>
            <h1>LovEatStrapi</h1>
            <h2>Content</h2>
        </div>

    )
}
