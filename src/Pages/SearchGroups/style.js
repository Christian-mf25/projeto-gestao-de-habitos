import styled from "styled-components";

export const SectionFlex = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;

  width: 90%;

  margin: 0 auto;

  .css-4mzek5-MuiFormControl-root-MuiTextField-root {
    width: 100%;
		max-width: 403px;
  }
`;

export const Li = styled.li`
  background-color: var(--color-purple-card);
  height: 143px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
	margin: 18px 0;

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-evenly;
    align-items: stretch;
    height: 100%;
  }

  h3 {
    color: var(--color-title);
    margin: 0;
  }

  p {
    color: var(--color-text);
  }

  span {
    padding: 5px;
    margin: 17px 15px 0 15px;
    border-radius: 5px;
    font-size: 3rem;
    color: #7580f9;
    background-color: #8183e72b;

    display: flex;
  }

	button{
		border: 0;
		padding: 0;
		border: 0;

		border-radius: 5px;
		height: 19px;
    width: 80px;

		cursor: pointer;
		background-image: linear-gradient(90deg, #a40ff2, #6d95fb, #0bd6f7);
    color: var(--color-text-primary);
	}
`;
