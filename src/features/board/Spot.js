import styled from "styled-components";
import Box from "@/ui/Box";

const spaceContents = [" ", "DL", "DW", "TL", "TW"];

const spaceColors = ["#5b4086", "#4382cc", "#d05a8d", "#6fa02b", "#e5782e"];

const SpotBkg = styled(Box)`
  border-radius: 1.5vw;
  transform: scale(0.9);
  box-shadow: inset 0 4px 0 rgba(107, 12, 86, 0.35);
  opacity: 0.8;
  z-index: 10;
  &:after {
    content: "${({ content }) => content}";
    z-index: 20;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5vw;
  }
`;

export default function Spot({ type }) {
  return <SpotBkg absoluteFill bkg={spaceColors[type]} content={spaceContents[type]} />;
}
