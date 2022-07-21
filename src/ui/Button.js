import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 9999px;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: white;
  background-color: ${({ color }) => color || "transparent"};
  font-size: ${({ size }) => size || "1em"};
  padding: 0.75em 1.5em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  path {
    fill: white;
  }
  .icon {
    height: 1em;
    svg {
      width: 1em;
      height: 1em;
    }
  }
  span:nth-child(2) {
    margin-left: 0.5em;
  }
`;

export default StyledButton;
