import styled from "styled-components";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  margin-left: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  cursor: pointer;
  box-shadow: 0px 4px 10px rgb(0, 59, 32);
  transition: 0.3s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;