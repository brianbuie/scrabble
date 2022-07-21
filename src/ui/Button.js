import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 9999px;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: white;
  background-color: ${({ color, theme }) => {
    if (!color) return "transparent";
    return theme.colors[color] || color;
  }};
  box-shadow: ${({ shadow, theme }) => (shadow ? "inset 0 -0.2em 0 " + theme.colors.shadow : "none")};
  font-size: ${({ size }) => size || "1em"};
  padding: ${({ padding }) => padding || "0.75em 1.5em"};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  .icon {
    font-size: 1.5em;
  }
  span:nth-child(2) {
    margin-left: 0.5em;
  }
`;

export default StyledButton;
