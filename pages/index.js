import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tile Party</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center p-9 h-screen bg-gradient-to-b from-purple to-navy">
        <img className="h-32" src="/Logo.svg" />
      </main>
    </>
  );
}
