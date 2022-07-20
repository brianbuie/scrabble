import styled from "styled-components";

const Box = styled.div`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  padding: ${({ padding }) => padding || 0};
  flex-grow: ${({ grow }) => grow || 0};
`;

export default Box;
