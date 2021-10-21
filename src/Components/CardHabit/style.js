import styled from "styled-components";
import img from "../../assets/images/config.png";
import add from "../../assets/images/hospital-category.png";

export const DivCard = styled.div`
  display: flex;
  height: 180px;
  width: 365px;
  margin: 20px auto;
  background-color: var(--color-purple-card);
  border-radius: 5px;
  color: var(--color-text-primary);

  .divContainer {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .add {
    background-image: url(${add});
    background-repeat: no-repeat;
    background-size: 90% 90%;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      padding: 0;
    }
  }

  .gear {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 90% 90%;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
  }

  .dificulty {
    padding-left: 10px;
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
