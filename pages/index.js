import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <div className={styles.title} onClick={() => router.push('/welcome')}>
          <h1>Welcome</h1> <FaRegArrowAltCircleRight />
        </div>
      </div>

    </div >
  )
}
