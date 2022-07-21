import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/react";
import Box from "@/ui/Box";
import Button from "@/ui/Button";
import { FacebookIcon, BackArrowIcon } from "@/ui/Icons";

const Logo = styled.img`
  height: 4rem;
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
`;

const ProfilePic = () => {
  const { data } = useSession();
  return data?.user ? (
    <Button padding="0" onClick={() => signOut({ redirect: false })}>
      <ProfileImg src={data.user.image} title="Log Out" />
    </Button>
  ) : (
    <Box square="3rem" />
  );
};

export default function ProtectedLayout({ title, back, children }) {
  const { data } = useSession();
  console.log(data);
  return (
    <Box direction="column" height="100vh">
      <Head>
        <title>{(title ? `${title} | ` : "") + "Tile Party"}</title>
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="nav" padding="1rem" width="100%">
        <Box square="3rem">
          {back && (
            <Link href={back}>
              <Button as="a" size="1.5rem">
                <BackArrowIcon />
              </Button>
            </Link>
          )}
        </Box>
        <Box direction="column" grow="1">
          <Logo src="/Logo.svg" />
        </Box>
        <ProfilePic />
      </Box>
      <Box direction="column" grow="1">
        {data?.user ? (
          children
        ) : (
          <Button color="facebookBlue" size="1.25rem" onClick={() => signIn("facebook")}>
            <FacebookIcon />
            <span>Continue with Facebook</span>
          </Button>
        )}
      </Box>
    </Box>
  );
}
