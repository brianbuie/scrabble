import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    purple: "#502674",
    navy: "#131c3b",
    facebookBlue: "#3378f2",
    white: "#ffffff",
    limeGreen: "#59b62d",
    cream: "#fdf9c6",
    pink: "#fc90ad",
    aqua: "#58baba",
    shadow: "rgba(102,57,116,0.6)",
  },
};

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 15px;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
			Helvetica Neue, sans-serif;
	}

	body {
		padding: 0;
		margin: 0;
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
