import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { HiServerStack, HiChatBubbleLeft } from 'react-icons/hi2';

export default function Home() {
  const description = "Documentation site for https://Gryt.chat";
  const imagePreview = '/img/meta/Gryt.chat.og.banner.png';
  const site = 'https://docs.gryt.chat';
  return (
    <Layout>
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
        <h2 className="text-4xl font-extrabold md:text-6xl text-gradient bg-gradient-to-t from-indigo-300 to-indigo-400">
          Get started
        </h2>
        <div className="flex flex-row gap-12">
          <Link
            style={{ textDecoration: "none" }}
            className="daisy-btn daisy-btn-ghost gap-2"
            href="/docs/category/client"
          >
            <HiChatBubbleLeft className="w-4 h-4" />
            Client
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="daisy-btn daisy-btn-ghost gap-2"
            href="/docs/category/server"
          >
            <HiServerStack className="w-4 h-4" />
            Server
          </Link>
        </div>
      </div>
    </div>
  );
}
