import styled from 'styled-components';
import theme from 'theme';

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    background-color: lightgray;
    color: ${theme.colors.text};
    padding: 8px 20px;
    border-radius: ${theme.radii.normal};
    border: 1px solid darkgray;
    font-size: ${theme.fontSizes.s};
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.background};
        box-shadow: 0px 0px 20px -18px;
    }
    &:active {
    transform: scale(0.95);
    }
    @media (min-width: 420px) {
       font-size: ${theme.fontSizes.m};
      }
`;

export const ButtonText = styled.p`
  margin-left: ${p => (p.Icon ? theme.space[3] : theme.space[0])};
`;