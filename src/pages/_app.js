import { SessionProvider } from "next-auth/react";
import { IconContext } from "react-icons";
import Theme from "@/ui/Theme";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Theme>
        <IconContext.Provider value={{ className: "icon" }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </Theme>
    </SessionProvider>
  );
}
