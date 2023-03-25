import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { useAuth } from '../../context/AuthUserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {

    const { authUser, loading, signOut } = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (!loading && !authUser)
        router.push('/login')
    }, [authUser, loading])

    return (
        <Layout>
            {/* Add this <Head> tag */}
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
        </Layout>
    );
}