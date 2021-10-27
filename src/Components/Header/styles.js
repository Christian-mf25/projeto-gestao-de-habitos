import styled from "styled-components";

export const Toolbar = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  img {
    margin: 1rem;
    width: 50px;
    cursor: pointer;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
  }

  .div_button {
    width: 90%;
    display: flex;
    justify-content: space-between;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  svg {
    padding: 10px 25px;
    color: var(--color-title);
    font-size: 30px;
    cursor: pointer;
    span {
      width: 55px;
      height: 4px;
      background-color: transparent;
    }
  }

  @media (min-width: 700px) {
    .top_header {

    }
    img {
     
      width: 76px;
     
    }

    .div_button {
      margin-top: 85px;
    }
    button {
      font-size: 1.3rem;
    }

		svg {
			font-size: 40px; 
		}
  }
`;
