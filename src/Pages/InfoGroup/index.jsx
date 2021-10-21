import Goals from "../../Components/Goals"
import NewGoal from "../../Components/NewGoal";
import Activities from "../../Components/Activities"
import NewActivity from "../../Components/NewActivity";

const InfoGroup = () => {
    return (
        <>
            <NewGoal/>
            <Goals/>
            <NewActivity/>
            <Activities/>
        </>
    );
}

export default InfoGroup;