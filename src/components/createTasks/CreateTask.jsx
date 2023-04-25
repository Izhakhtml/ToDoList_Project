import React, { useContext, useState } from "react";
import { MissionProvider } from "../../context/TaxtContext";
import AddInput from "./AddInput";
const CreateTasks = () => {
    const { setTextInput, setIsDataChange } = useContext(MissionProvider);
    const TaskInfo = (e) => {
        setTextInput(e.target.value);
        setIsDataChange(true);
    }
    return (
        <div>
            <AddInput TaskInfo={TaskInfo} />
        </div>
    )
}
export default CreateTasks
