import { useContext } from "react";
import { MissionProvider } from "../../context/TaxtContext";
import DeleteTaskFromList from "./DeleteTaskFromList";
const PresentTask = () => {
    const { mission } = useContext(MissionProvider);
    return (
        <div className="displayTask">
            <h2>מטלות</h2>
            {
                <ol style={{
                    overflow: mission.length >= 6 ? "scroll" : "hidden",
                    overflowX: mission.length >= 6 ? "hidden" : ""
                }}>
                    {mission.length > 0 ?
                        mission.sort((a, b) => {
                            const nameA = a.urgency.toUpperCase(); // ignore upper and lowercase
                            const nameB = b.urgency.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        }).map((item, i) =>
                            item.missionName != undefined ?
                                <>
                                    <li style={{ width: mission.length >= 6 ? "" : "76%"}} key={i} className={item.color} ><span>{item.missionName}</span><DeleteTaskFromList deleteMission={item} /></li>
                                </>
                                : ""
                        ) : ""}
                </ol >
            }
        </div >
    )
}
export default PresentTask;