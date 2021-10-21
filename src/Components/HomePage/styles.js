import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  flex: 1;
  background-color: var(--color-purple-card);
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 76px;
  }

  @media screen and (min-width: 720px) {
    flex: 1;
    padding: 24px 48px;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-weight: bolder;
    font-size: 16px;
    margin-left: 8px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    color: #fff;
    background-image: linear-gradient(90deg, #a40ff2, #6d95fb, #0bd6f7);
  }

  @media screen and (min-width: 720px) {
    button {
      font-size: inherit;
    }
  }
`;

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FirstSection = styled.section`
  flex: 1;
  padding-bottom: 20px;
  background-color: var(--color-purple-card);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 300px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 465px;
    padding: 0 40px;
    padding-bottom: 30px;

    img {
      width: 380px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 440px;
    }
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1,
  p {
    margin: 0;
    width: 100%;
  }

  p {
    padding-bottom: 10px;
  }

  h1 {
    font-weight: lighter;
    font-size: 35px;
    padding-bottom: 10px;
  }

  div {
    display: flex;
    width: 100%;

    img {
      width: 100px;
    }
  }

  @media screen and (min-width: 768px) {
    h1,
    p {
      padding: 0;
    }
    h1 {
      font-size: 42px;
      padding-bottom: 10px;
      padding-top: 0;
    }
    p {
      font-size: 20px;
    }
    div {
      img {
        width: 150px;
      }
    }
  }
`;

export const SecondSection = styled.section`
  padding: 20px 0;
  color: var(--color-purple-card);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
  }

  h1,
  p {
    margin: 0;
    width: 100%;
    text-align: left;
  }

  p {
    padding-bottom: 10px;
  }

  h1 {
    font-weight: lighter;
    font-size: 35px;
    padding: 10px 0;
  }

  @media (min-width: 375px) {
    img {
      width: 350px;
    }
  }
  @media (min-width: 425px) {
    img {
      width: 395px;
    }
  }

  @media (min-width: 768px) {
    padding: 80px 20px;

    flex-direction: row-reverse;
    img {
      width: 400px;
      padding: 0 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 470px;
    }
  }
`;

export const ThirdSection = styled.section`
  padding: 20px 0;
  color: var(--color-purple-card);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 140px;
  }

  h1,
  p {
    margin: 0;
    width: 100%;
    text-align: left;
  }

  p {
    padding-bottom: 10px;
  }

  h1 {
    font-size: 35px;
    padding: 10px 0;
  }

  @media (min-width: 768px) {
    height: 465px;
    flex-direction: row;
    img {
      width: 215px;
      padding: 0 70px;
    }
    div {
      padding-left: 80px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      padding: 0 150px;
    }
  }
`;

export const Footer = styled.footer`
  h2 {
    font-weight: lighter;
    color: var(--color-purple-card);
    text-align: center;
  }

  section {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    div {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      text-align: center;
    }
  }

  img {
    width: 65px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 100px;
    }
  }
`;
