import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'




export default function LoveLetterBack() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveLetterServer_div'}>
            <h1>LoveLetterServer</h1>
        </div>

    )
}
