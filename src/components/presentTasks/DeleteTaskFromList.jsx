import { useContext } from "react";
import { MissionProvider } from "../../context/TaxtContext";

const DeleteTaskFromList = ({ deleteMission }) => {
    const { mission, setMission ,storeMission, setStoreMission} = useContext(MissionProvider);

    const DeleteTask = () => {
        let filterTask = mission.filter(item => item.missionName != deleteMission.missionName)
        setMission(filterTask)
        setStoreMission(filterTask)
    }
    return (
        <button onClick={DeleteTask}>x</button>
    )
}
export default DeleteTaskFromList;