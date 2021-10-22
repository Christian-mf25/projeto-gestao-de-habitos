import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 35px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
  }
`;

export const ContainerInfoCard = styled.div`
  display: flex;

  div {
    width: 100%;
  }

  div .groupHeader {
    display: flex;
    /* justify-content: space-between; */
  }

  .buttonX {
    float: right;
    z-index: 2;
  }
`;
