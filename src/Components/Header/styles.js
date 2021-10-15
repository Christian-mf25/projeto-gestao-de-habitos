import styled from "styled-components";

export const Toolbar = styled.header`
  background-color: var(--color-black-background);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 1rem;
    width: 50px;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    color: var(--color-text-primary);
  }

  .div_button {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .button_span {
    display: flex;
    flex-direction: column;
  }

  span {
    width: 55px;
    height: 4px;
    background-color: var(--color-text-primary);
    border-radius: 17% 83% 83% 17% / 45% 50% 50% 55%;
  }
`;
