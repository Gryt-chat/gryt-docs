import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Home() {
  const description =
    "Documentation for Gryt - The open source chat platform";
  const imagePreview = '/img/meta/Gryt.chat.og.banner.png';
  const site = 'https://gryt-docs.vercel.app/';
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <meta name="title" content="Gryt" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#252732" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:title" content="Gryt" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePreview} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={site} />
        <meta property="twitter:title" content="Gryt" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imagePreview} />
      </Head>
      <main>
        <SecondSection />
      </main>
    </Layout>
  );
}

function SecondSection() {
  return (
    <div
      id="anotherCopy?"
      className="hero bg-base-200 text-neutral-content heroHeight z-10"
    >
      <div className="grid z-0 place-items-center container mx-auto text-center gap-6">
        <h2 className="text-4xl font-extrabold md:text-6xl">
          Ready to <span className="text-gradient bg-gradient-to-t from-pink-300 to-purple-500">learn?</span>
        </h2>
        <div className='flex flex-row gap-12'>
          <Link className='daisy-btn' href='/docs/client/intro'>Client</Link>

          <Link className='daisy-btn' href='/docs/server/intro'>Server</Link>
        </div>
      </div>
    </div>
  );
}