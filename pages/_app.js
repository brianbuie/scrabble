import { SessionProvider } from "next-auth/react";
import Theme from "../ui/Theme";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </SessionProvider>
  );
}
