import styled from "styled-components";

export const CardActivity = styled.div`
  position: relative;
  background-color: var(--color-purple-card);
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;

  @media (min-width: 400px) {
    max-width: 390px;
  }
`;

export const Li = styled.li`
	margin-top: 20px;
`

export const GroupInfo = styled.section`
  background-color: #53346a;
  width: 90%;
  max-width: 390px;
  border-radius: 5px;
  margin: 0 auto;
  padding: 15px 0;

  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    height: 35px;

    padding: 0px 17px;

    border-bottom: 2px solid var(--color-text-primary);

    h3 {
      margin: 0;
      color: var(--color-text-primary);
      color: var(--color-text-primary);
      padding-bottom: 5px;
    }

    button {
      border: none;
      background-color: transparent;
      color: var(--color-text-primary);
      font-size: 1.2rem;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    height: 65px;

    padding-top: 10px;
  }

  .participants,
  .target {
    display: flex;
    svg {
      margin-right: 3px;
    }
  }

  .div_infos_groups, .info > div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    height: 72px;
  }

  p {
    color: var(--color-text-primary);
    font-size: 1.2rem;
  }

  span {
    height: 20px;
    color: var(--color-text-primary);
    font-size: 1.5rem;
  }
`;

export const Allies = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  background-color: #53346a;
  width: 90%;
  max-width: 390px;
  border-radius: 5px;
  margin: 0 auto;
  color: var(--color-text-primary);
  font-size: 1rem;

  .name {
    border-bottom: 1px var(--color-text-primary) solid;
    padding: 6px 15px;
  }
  .title {
    border-bottom: 2px var(--color-text-primary) solid;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px 0;
    padding-left: 15px;
  }
`;

export const DescriptionGroup = styled.div`

  background-color: #53346a;
  width: 90%;
  max-width: 390px;
  border-radius: 5px;
  margin: 0 auto;
  color: var(--color-text-primary);
  font-size: 1rem;
  margin: 20px auto;

	.description_title{
		border-bottom: var(--color-text-primary) solid 2px;
		padding: 10px;
	}

	.description{
		color: #A788B5;
		padding: 10px;
	}

	h3, p{
		padding-left: 15px;
		margin: 0;

	}
`;
