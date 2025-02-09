import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  width: 100%;
  max-width: 550px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 18px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);  

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }

  button {
    margin-top: 20px;
    align-self: flex-end;
  }
`;