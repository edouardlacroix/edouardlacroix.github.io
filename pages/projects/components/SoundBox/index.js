import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'




export default function SoundBox() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'soundbox_div'}>
            <h1>SoundBox</h1>
        </div>

    )
}
