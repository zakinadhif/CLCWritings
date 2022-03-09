import Layout from '../../components/layout'
import Head from 'next/head';
import Date from '../../components/date';

import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={`${utilStyles.headingXl} ${utilStyles.centerText}`}>{postData.title}</h1>
        <div className={`${utilStyles.lightText} ${utilStyles.centerText}`}>
          <span>{postData.author}</span> &#8226; <Date dateString={postData.date} />
        </div>
        <div className={`${utilStyles.centerText}`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
}
