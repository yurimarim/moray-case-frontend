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
  max-width: 700px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 18px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
    padding-bottom: 15px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .neighborhood-table-title {
    color: #999;
  }
`;

export const NeighborhoodTableContainer = styled.table`
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  margin-bottom: 30px;

  td, th {
    text-align: center;
  }

  @media (width <= 410px) {
    width: 350px;
  }

  @media (width <= 350px) {
    width: 300px;
  }
`;

export const TableHead = styled.thead`
  td, th {
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
`;

export const ChartContainer = styled.div`
  width: 500px;

  @media (width <= 510px) {
    width: 400px;
  }

  @media (width <= 410px) {
    width: 350px;
  }

  @media (width <= 350px) {
    width: 300px;
  }
`;

export const ChartLegendContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ChartLegendHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 10px;
  padding-bottom: 5px;
`;

export const ChartLegendContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const LegendColor = styled.img`
  width: 50px;
  height: 20px;
  background-color: ${({ color }) => color ? color : '#292df1'};
`;