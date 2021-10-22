import Goals from "../../Components/Goals";
import NewGoal from "../../Components/NewGoal";
import Activities from "../../Components/Activities";
import NewActivity from "../../Components/NewActivity";
import Header from "../../Components/Header";
import { CardActivity } from "./style";

const InfoGroup = () => {
  return (
    <>
      <Header showD />
      <NewGoal />
      <Goals />

      {/* <CardActivity> */}
        <NewActivity />
        <Activities />
      {/* </CardActivity> */}
    </>
  );
};

export default InfoGroup;
