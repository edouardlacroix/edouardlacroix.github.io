import styles from './index.module.scss'
import { IoLogoLinkedin } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { useRouter } from 'next/router'



export default function TopBar() {
    const router = useRouter()
    return (
        <div className={styles.wrapper}>
            <IoLogoLinkedin onClick={() => window.location = 'https://fr.linkedin.com/in/edouard-lacroix-69a173165'} /> <h1>{('Hosted projects').toUpperCase()}</h1><ImGithub onClick={() => window.location = 'https://github.com/edouardlacroix'} />
        </div>
    )
}
