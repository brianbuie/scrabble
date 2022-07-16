import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tile Party</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img className="Logo" src="/Logo.svg" />
      </main>
    </>
  );
}
