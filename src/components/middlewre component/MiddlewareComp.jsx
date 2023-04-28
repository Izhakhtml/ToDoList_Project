import './middleStyle.css'
import { useContext, useEffect, useState } from "react";
import { MissionProvider } from "../../context/TaxtContext";
import UrgencyTask from "./UrgencyTask";
import TransferDataToList from './TransferDataToList';
const MiddlewareComp = () => {
    const { createTask, setCreateTask, isChooseUrgencyLevel, setIsChooseurgencyLevel, catchUrgency, setCatchUrgency, existTaskInList, setExistTaskInList, textInput, mission, setMission, storeMission, setStoreMission } = useList();
    const AddToList = () => {
        let bool = null;
        setStoreMission([...storeMission, createTask])
        for (let i = 0; i < storeMission.length; i++) {
            if (storeMission[i].missionName == createTask.missionName) {
                setExistTaskInList("קיימת משימה כזאת")
                return true
            } else {
                bool = false
            };
        }

        if (createTask.missionName == "") { createTask.missionName = textInput }
        if (bool != true && createTask.missionName != "" && isChooseUrgencyLevel != "בבשקה ציין רמת דחיפות") {
            if (createTask.urgency != undefined) { //! this statement to check if the user choose urgency level in the biggining.
                setMission([...mission, createTask])
                setIsChooseurgencyLevel("")
            } else {
                setIsChooseurgencyLevel("בבשקה ציין רמת דחיפות");
            }
        } else {
            console.log("true");
        }
    }
    const UrgencyFun = (e) => {
        switch (e.target.value) {
            case "רגילה":
                setIsChooseurgencyLevel("")
                setCreateTask({ urgency: "C", color: "green", missionName: textInput })
                setCatchUrgency("C")
                break;
            case "בנונית":
                setIsChooseurgencyLevel("")
                setCreateTask({ urgency: "B", color: "yellow", missionName: textInput })
                setCatchUrgency("B")
                break;
            case "גבוה":
                setIsChooseurgencyLevel("")
                setCreateTask({ urgency: "A", color: "red", missionName: textInput })
                setCatchUrgency("A")
                break;
            default:
                setIsChooseurgencyLevel("בבשקה ציין רמת דחיפות");
                break;
        }
    }
    return (
        <div className="middleWareComp">
            <h3>משימה</h3>
            <UrgencyTask funOnchangeEvent={UrgencyFun} />
            <span>: רמת דחיפות</span>
            <br />
            {isChooseUrgencyLevel != "" ?
                <div className="urgencyAlert">
                    {isChooseUrgencyLevel}
                </div> : ""}
            <TransferDataToList addToList={AddToList} existTask={existTaskInList} />
        </div>
    )
}
export default MiddlewareComp;

//! CUSTOM HOOK
function useList() {
    const [createTask, setCreateTask] = useState({});
    const [isChooseUrgencyLevel, setIsChooseurgencyLevel] = useState("");
    const [catchUrgency, setCatchUrgency] = useState("");
    const [existTaskInList, setExistTaskInList] = useState("");
    const { textInput, mission, setMission, storeMission, setStoreMission } = useContext(MissionProvider);
    useEffect(() => {
        if (mission.length > 0) {
            if (createTask.missionName != textInput) {
                setCreateTask({ urgency: catchUrgency, color: mission[mission.length - 1].color != createTask.color ? createTask.color : mission[mission.length - 1].color, missionName: textInput })
            }
        }
    })
    useEffect(() => {
        if (existTaskInList != "") {
            window.setTimeout(() => {
                setExistTaskInList("")
            }, 2000)
        }
    }, [existTaskInList])
    return { createTask, setCreateTask, isChooseUrgencyLevel, setIsChooseurgencyLevel, catchUrgency, setCatchUrgency, existTaskInList, setExistTaskInList, textInput, mission, setMission, storeMission, setStoreMission }
}