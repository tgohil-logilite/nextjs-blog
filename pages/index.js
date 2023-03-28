import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import AdminNavbar from "../components/Navbars/AdminNavbar";


export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <>
  
    <div className="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />
    
    </div>
  </>
    // <div className={styles.container}>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <Header />
    //   <main className={styles.main}>
    //   <section className={utilStyles.headingMd}>
    //      <p>Prof. Tushar Gohil</p>
    //     <p>Assistant Professor, IT Department, SCET, Surat.</p>
       
    //   </section>
    //     <div className={styles.user}>
    //        {loading && <div className={styles.title}>Loading...</div>}
    //        {
    //         session &&
    //           <>
    //            <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
    //            <img src={session.user.image} alt="" className={styles.avatar} />
    //           </>
    //         }
    //        {
    //         !session &&
    //           <>
    //            <p className={styles.title}>Please Sign in</p>
    //           </>
    //        }
    //      </div>
    //   </main>
    // </div>
  )
}