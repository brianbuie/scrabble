import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    purple: "#502674",
    navy: "#131c3b",
    facebook: "#3378f2",
    white: "#ffffff",
  },
};

const GlobalStyle = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
			Helvetica Neue, sans-serif;
	}

	body {
		background: linear-gradient(${theme.colors.purple}, ${theme.colors.navy});
	}

	* {
		box-sizing: border-box;
	}
`;

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
