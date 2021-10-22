import styled from "styled-components";

export const DivCard = styled.div`
  height: 150px;
  min-width: 330px;
  margin: 20px auto;
  margin-bottom: 0;
  background-color: var(--color-purple-card);
  border-radius: 5px;
  color: var(--color-text-primary);

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ContainerEditGroupCard = styled.div`
  .hidden {
    display: none;
  }
`;
