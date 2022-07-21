import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import Box from "./Box";

const Logo = styled.img`
  height: 4rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 9999px;
`;

const ProfilePic = () => {
  const { data } = useSession();
  if (!data?.user) return <Box square="3rem" />;

  const onClick = (e) => {
    e.preventDefault();
    signOut({ redirect: false });
  };

  return (
    <Box square="3rem">
      <a href="" onClick={onClick}>
        <ProfileImg src={data.user.image} title="Log Out" />
      </a>
    </Box>
  );
};

const Layout = ({ children }) => (
  <Box direction="column" height="100vh">
    <Box as="nav" padding="1rem" width="100%">
      <Box square="3rem" />
      <Box direction="column" grow="1">
        <Logo src="/Logo.svg" />
      </Box>
      <ProfilePic />
    </Box>
    <Box as="main" direction="column" grow="1">
      {children}
    </Box>
  </Box>
);

export default Layout;
