import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { useRouter } from 'next/router'




export default function GithubPages() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')} id={'gitubPages_div'}>
            <h1>GithubPages</h1>
        </div>

    )
}
