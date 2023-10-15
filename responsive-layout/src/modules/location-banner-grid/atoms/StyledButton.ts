import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  font-family: Helvetica Neue;
  font-size: 11px;
  white-space: nowrap;
  text-align: center;
  color: white;
  &:hover {
    background-color: #990000;
    opacity: 1;
  },
`;

export { StyledButton };
