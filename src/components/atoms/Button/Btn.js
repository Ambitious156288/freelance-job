import styled, { css } from 'styled-components';

const Btn = styled.button`
  width: ${({ theme }) => theme.smallButtonWidth};
  height: ${({ theme }) => theme.smallButtonHeight};
  font-size: ${({ theme }) => theme.smallButtonFontSize};

  color: ${({ theme }) => theme.white};
  border-radius: 13px;
  background-color: ${({ theme }) => theme.red};
  border: none;
  font-weight: ${({ theme }) => theme.bold};
  font-family: 'Titillium Web', sans-serif;

  ${({ big }) =>
    big &&
    css`
      width: ${({ theme }) => theme.bigButtonWidth};
      height: ${({ theme }) => theme.bigButtonHeight};
      font-size: ${({ theme }) => theme.bigButtonSize};
      font-family: 'Playfair Display', serif;
      text-transform: uppercase;
    `};
`;

export default Btn;
