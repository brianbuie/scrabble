import styled from "styled-components";
import Box from "@/ui/Box";
import Spot from "./Spot";
import Tile from "./Tile";

const layout = [
  [0, 0, 0, 4, 0, 0, 3, 0, 3, 0, 0, 4, 0, 0, 0],
  [0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [4, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 4],
  [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 2, 0],
  [3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3],
  [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  [3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3],
  [0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 2, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
  [4, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 4],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0],
  [0, 0, 0, 4, 0, 0, 3, 0, 3, 0, 0, 4, 0, 0, 0],
];

const SpotContainer = styled(Box)`
  width: 6.6%;
  padding-bottom: 6.6%;
  position: relative;
`;

export default function Board() {
  return (
    <Box col width="100%" bkg="rgba(14,28,51,0.33)">
      {layout.map((row, rKey) => (
        <Box row key={rKey} width="100%">
          {row.map((type, sKey) => (
            <SpotContainer key={sKey}>
              <Spot type={type} />
              <Tile row={rKey} col={sKey} />
            </SpotContainer>
          ))}
        </Box>
      ))}
    </Box>
  );
}
