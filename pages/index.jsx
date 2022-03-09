import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import Link from "next/link";

import { getSortedPostData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Poems</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title, author}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div className={`${utilStyles.lightText} ${utilStyles.smallText}`}>
                <span>{author}</span> &#8226; <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostData();

  return {
    props: {
      allPostsData
    }
  };
}
