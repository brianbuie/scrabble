import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import Box from "./Box";

const Logo = styled.img`
  height: 4rem;
`;

const NavSpot = styled.div`
  width: 3rem;
  height: 3rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 9999px;
`;

const ProfilePic = () => {
  const { data } = useSession();
  if (!data || !data.user) return <NavSpot />;

  const onClick = (e) => {
    e.preventDefault();
    signOut({ redirect: false });
  };

  return (
    <NavSpot>
      <a href="" onClick={onClick}>
        <ProfileImg src={data.user.image} title="Log Out" />
      </a>
    </NavSpot>
  );
};

const Layout = ({ children }) => (
  <Box direction="column" height="100vh">
    <Box as="nav" padding="1rem" width="100%">
      <NavSpot />
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
