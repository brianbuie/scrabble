import styled from "styled-components";
import Box from "@/ui/Box";

const state = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, "P", 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, "U", 0, 0, 0, 0, 0],
  [0, 0, 0, "V", "A", "N", "D", "A", "L", "S", 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, "H", 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const TileShape = styled(Box)`
  border-radius: ${({ rounded }) => rounded.map((r) => (r ? "1.5vw" : "0")).join(" ")};
  box-shadow: ${({ shadow }) => (shadow ? "inset 0 -3px 0 rgba(107, 12, 86, 0.4)" : "none")};
  z-index: 30;
  background-color: rgba(66, 214, 214, 0.8);
`;

const Letter = styled.span`
  z-index: 40;
  position: absolute;
  left: 45%;
  top: 55%;
  transform: translate(-55%, -55%);
  font-size: 4.3vw;
  font-weight: 600;
`;

const Value = styled.span`
  z-index: 40;
  position: absolute;
  right: 10%;
  top: 10%;
  font-size: 1.5vw;
`;

export default function Tile({ row, col }) {
  if (!state[row][col]) return null;
  const t = state[row - 1] && state[row - 1][col];
  const r = state[row][col + 1];
  const b = state[row + 1] && state[row + 1][col];
  const l = state[row][col - 1];
  const rounded = [!t && !l, !t && !r, !r && !b, !b && !l];
  return (
    <TileShape absoluteFill rounded={rounded} shadow={!b}>
      <Letter>{state[row][col]}</Letter>
      <Value>1</Value>
    </TileShape>
  );
}
