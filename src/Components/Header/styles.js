import styled from "styled-components";

export const Toolbar = styled.header`
  width: 100%;
  background-color: rgba(24, 24, 24, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

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

  .top_header {
    display: flex;
    align-items: center;
  }

  .logout {
    padding: 10px 25px;
    position: absolute;
    right: 0;
    color: var(--color-title);
		font-size: 30px;
		cursor: pointer;
    span {
      width: 55px;
      height: 4px;
      background-color: transparent;
    }
  }
`;
