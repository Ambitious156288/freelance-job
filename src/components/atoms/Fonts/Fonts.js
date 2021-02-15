import styled from 'styled-components';

const Fonts = styled.h1`
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : '')};
  font-family: ${({ theme, Playfair }) => (Playfair ? theme.font1 : theme.font2)};
`;

export default Fonts;
