import styled from 'styled-components';
import theme from 'theme';


export const CounterText = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.secondary};
  margin-bottom: 16px;
  
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;


