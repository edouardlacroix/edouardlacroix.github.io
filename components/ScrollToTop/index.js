import styles from './index.module.scss'
import { IoLogoLinkedin } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { useRouter } from 'next/router'
import { FaArrowAltCircleUp } from 'react-icons/fa';




export default function ScrollToTop() {

    const scrollTo = (hashId) => {
        // Check if window exist to avoid SSR error
        if (typeof window !== 'undefined') {
            if (hashId) {
                // Use the hash to find the first element with that id
                const element = document.querySelector(hashId);
                if (element) {
                    // Smooth scroll to that elment
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    });
                }
            }
        }
    }
    return (
        <div className={styles.wrapper}>
            <FaArrowAltCircleUp onClick={() => scrollTo('#technologies_div')} />
            <p>UP</p>
        </div>
    )
}
