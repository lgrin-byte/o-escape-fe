import { Button, Stack } from "@mui/material";
import { styled } from "styled-components";

export const SummaryStack = styled(Stack)`
  width: 100%;
  align-items: center;
`;

export const CodeProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  height: 30px;
`;

export const IconText = styled.div`
  display: flex;
  width: 168px;
  justify-content: baseline;
  align-items: center;
  color: #6750a4;

  svg {
    margin-right: 15px;
    fill: #6750a4;
  }
`;

export const SummaryText = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DetailIconText = styled.div`
  display: flex;
  flex: 30px auto;
  width: 100%;
  margin: 15px 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;

  svg {
    display: block;
    margin-right: 25px;
    fill: #aea9b1;
  }

  & + & {
    margin-top: 30px;
  }
`;

export const ButtonsStack = styled(Stack)`
  justify-content: end;
  align-items: center;
`;

export const CancelButton = styled(Button)`
  color: black !important;
`;