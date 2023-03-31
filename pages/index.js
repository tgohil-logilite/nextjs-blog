import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Link from 'next/link';
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import AdminNavbar from "../components/Navbars/AdminNavbar"
import AuthNavbar from "../components/Navbars/AuthNavbar"
import Sidebar from '../components/Sidebar/Sidebar';
import FooterAdmin from '../components/Footers/Footer';

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (



    <div className={styles.container}>

     

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
      
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {
            session &&
            <>
              <Sidebar />

             
              
            </>
          }
          {
            !session &&
            <>
              <p className={styles.title}>Please Sign in</p>
              <Header />
            </>
          }
        </div>
       
      </main>
    </div>
  )
}