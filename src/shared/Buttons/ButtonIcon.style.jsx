import styled from 'styled-components';
import theme from 'theme';

export const ButtoIconStyled = styled.button`
    display: flex;
    align-items: center;
    background: ${ props => props.primary ? "lightgray" : "lightgray"};
    color: ${props => props.primary ? "{theme.colors.text}" : "grey" };
    padding: 6px;
    border-radius: ${theme.radii.normal};
    border: 1px solid darkgray;
    font-size: ${theme.fontSizes.s};
    cursor: pointer;
    &:hover {
        background-color: #1976d2;
        box-shadow: 0px 0px 20px -18px;
    }
    &:active {
    transform: scale(0.95);
    }
    @media (min-width: 420px) {
       font-size: ${theme.fontSizes.m};
      }
`;