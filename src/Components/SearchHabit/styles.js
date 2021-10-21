import styled from "styled-components";

export const SearchHabitsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 365px;
    div {
      width: 100%;
      label {
        color: var(--color-text-primary);
      }
    }
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
