import styled from "styled-components";
import img from "../../assets/images/config.png";
import add from "../../assets/images/hospital-category.png";

export const DivCard = styled.div`
  height: 180px;
  width: 90%;
  margin: 20px auto;
  background-color: var(--color-purple-card);
  border-radius: 5px;
  color: var(--color-text-primary);

  .divContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .add {
    background-image: url(${add});
    width: 50px;
  }

  .title {
    width: 100px;
  }

  button {
    width: 50px;
    height: 20px;
    background-image: url(${img});
    background-color: transparent;
    border: none;
    margin-top: 10px;
  }

  li {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    h3 {
      padding-left: 10px;
      width: 175px;
    }

    p {
      min-width: 150px;
      height: 10px;
    }
  }
`;

export const Container = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
`;

export const Background = styled(BaseBox)`
  background: #fff;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background-image: linear-gradient(
    to right,
    #a40ff2 0%,
    #6d95fb 51%,
    #0bd6f7 100%
  );
  width: ${({ percent }) => (percent * 100) / 30}%;
`;
