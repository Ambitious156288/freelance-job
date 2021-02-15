import styled, { css } from 'styled-components';

const Input = styled.input`
  /* padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 50px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-size: 15px;
      background-position: 20px 50%;
      background-repeat: no-repeat;
    `} */
`;

export default Input;
