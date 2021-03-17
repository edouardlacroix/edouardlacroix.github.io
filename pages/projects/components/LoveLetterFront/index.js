import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'




export default function LoveLetterFront() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'loveLetterFront_div'}>
            <h1>LoveLetterFront</h1>
        </div>

    )
}
