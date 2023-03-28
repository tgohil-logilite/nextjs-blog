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

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (

    

    <div className={styles.container}>
      
      <AuthNavbar />
      
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <main className={styles.main}>
      <section className={utilStyles.headingMd}>
         <p>Prof. Tushar Gohil</p>
        <p>Assistant Professor, IT Department, SCET, Surat.</p>
       
      </section>
        <div className={styles.user}>
           {loading && <div className={styles.title}>Loading...</div>}
           {
            session &&
              <>
              <Sidebar />
               <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
               <img src={session.user.image} alt="" className={styles.avatar} />
              
              </>
            }
           {
            !session &&
              <>
               <p className={styles.title}>Please Sign in</p>
              
              </>
           }
         </div>
      </main>
    </div>
  )
}