import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }
`;
