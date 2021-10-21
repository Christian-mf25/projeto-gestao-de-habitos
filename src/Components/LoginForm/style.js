import styled from "styled-components";

export const DivColor = styled.div`
  display: flex;
	flex-direction: column;
    flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  background-color: var(--color-background);

  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  background-color: #261d2a;

  height: 50vh;
  width: 90vw;
	max-width: 400px;

  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;

  .forgot-password {
    text-align: right;
		color: var(--color-text-primary);
  }

	p{
		text-align: center;
		color: var(--color-text-primary);
	}
`;

export const IMG = styled.img`
	width: 133px;
	height: 123px;

	margin-bottom: 50px ;
`
