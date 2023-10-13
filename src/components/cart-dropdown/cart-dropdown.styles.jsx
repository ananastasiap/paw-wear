import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  top: 90px;
  right: 40px;
  z-index: 5;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 376px;
  background-color: #FFFFFF;
  border: 1px solid #0E0D0D;
  border-radius: 10px;
  overflow: hidden;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin: 25px 10px 10px;
  }
`;

export const EmptyMessage = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  padding: 20px;
  overflow: auto;
`;