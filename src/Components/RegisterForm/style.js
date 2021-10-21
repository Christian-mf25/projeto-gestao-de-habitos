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

  height: 60vh;
  width: 90vw;
  max-width: 400px;

  border-radius: 10px;

  color: var(--color-text-primary);
	text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
	
	height: 90%;
	
	button{
		margin: 12px 0;
	}
`;
