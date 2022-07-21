import Head from "next/head";
import styled from "styled-components";
import { getProviders, signIn, useSession } from "next-auth/react";
import Layout from "../ui/Layout";
import Box from "../ui/Box";
import Button from "../ui/Button";

const FacebookLogo = styled.img`
  transform: scale(1.5);
  transform-origin: center right;
`;

export default function Home({ providers }) {
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <Head>
        <title>Tile Party</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {!data || !data.user ? (
          <Box direction="column" height="100%">
            <Button color="#3378f2" size="1.25rem" onClick={() => signIn("facebook")}>
              <FacebookLogo src="/facebook.svg" />
              <span>Continue with Facebook</span>
            </Button>
          </Box>
        ) : null}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
