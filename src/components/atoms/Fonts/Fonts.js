import styled from 'styled-components';

const Fonts = styled.h1`
  font-family: ${({ theme, Playfair }) => (Playfair ? theme.font1 : theme.font2)};
  color: ${({ theme, black }) => (black ? theme.black : theme.white)};
`;

export default Fonts;
