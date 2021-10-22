import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  p {
    font-size: 12px;
  }
`;

export const ContainerInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;
  }

  span {
    padding: 5px;
    margin: 17px 15px 0 15px;
    border-radius: 5px;
    font-size: 3rem;
    color: #7580f9;
    background-color: #8183e72b;
    height: 47px;
    display: flex;
  }

  .info {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    p {
      margin-top: 30px;
    }
  }

  .groupHeader {
    display: flex;
    height: 45px;
    width: 195px;
    h3 {
      margin: 15px 0 0 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .buttonX {
    float: right;
    z-index: 2;
  }
`;
