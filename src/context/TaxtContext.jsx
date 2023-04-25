import { createContext, useState } from "react";
export const MissionProvider = createContext();
export const MissionContext = ({ children }) => {
    const [mission, setMission] = useState([])
    const [storeMission, setStoreMission] = useState([])

    const [textInput, setTextInput] = useState("")
    const [isDataChange, setIsDataChange] = useState(false)
    return (
        <MissionProvider.Provider value={{
            isDataChange, setIsDataChange,
            storeMission, setStoreMission,
            mission, setMission,
            textInput, setTextInput
        }}>
            {children}
        </MissionProvider.Provider>
    )
}