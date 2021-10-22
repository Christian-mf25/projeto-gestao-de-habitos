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

  .logout {
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
      position: relative;
      height: 20px;
    }
    img {
      position: absolute;
      left: 22px;
      top: 20px;
      width: 76px;
      margin: 0;
    }

    .div_button {
      margin-top: 85px;
    }
    button {
      font-size: 1.3rem;
    }

		.logout {
			position: absolute;
      right: 13px;
      top: 30px;
			font-size: 40px;
		}
  }
`;
