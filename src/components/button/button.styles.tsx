import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;
  font-family: 'Laila';
  font-size: 15px;
  font-weight: bolder;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 50px;
  background-color: #DA8383;
  border: none;
  border-radius: 15px;
  cursor: pointer;

    &:hover {
      color: #0E0D0D;
      background-color: #FFFFFF;
      border: 1px solid #0E0D0D;
    }

    @media screen and (max-width: 800px){
      font-size: 10px;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
  color: #FFFFFF;
  background-color: #5290F4;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
  color: #0E0D0D;
  background-color: #FFFFFF;
  border: 1px solid #0E0D0D;

    &:hover {
      color: #FFFFFF;
      background-color: #0E0D0D;
      border: none;
    }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
`;


