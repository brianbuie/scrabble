import styled from "styled-components";

const Box = styled.div`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ col }) => col ? 'column' : "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  height: ${({ height, square }) => height || square || "auto"};
  width: ${({ width, square }) => width || square || "auto"};
  padding: ${({ pad }) => pad || 0};
  flex-grow: ${({ grow }) => grow === true ? '1' : (grow || '0') };
  background: ${({ bkg, theme }) => theme.colors[bkg] || bkg || 'transparent'};
  position: ${({ absoluteFill }) => absoluteFill ? 'absolute' : 'static'};
  ${({ absoluteFill }) => absoluteFill && `
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `}
`;

export default Box;
