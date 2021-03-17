import styles from './index.module.scss'
import parentStyle from '../../index.module.scss'
import { IoLogoLinkedin } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { useRouter } from 'next/router'
import JSLogo from 'images/jsLogo.png'



export default function Technologies() {
    const router = useRouter()
    return (
        <div className={[parentStyle.horizontalBar, styles.wrapper].join(' ')}>
            <h1>Technologies</h1>
            <img src={JSLogo} />
            <h2>JavaScript</h2>
            <h2>Css/Scss</h2>
            <h2>TypeScript</h2>
            <h3>C#</h3>

        </div>

    )
}
