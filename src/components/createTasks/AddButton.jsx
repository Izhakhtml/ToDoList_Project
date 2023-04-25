import { useContext } from "react";
import { MissionProvider } from "../../context/TaxtContext"
const AddButton = ({ sendInputInfo }) => {
    const { textInput, setTextInput } = useContext(MissionProvider);
    const sendData = () => {
        // mission[mission.length - 1] != sendInputInfo ?
        //     setMission([...mission, sendInputInfo]) : console.log("")
         setTextInput(sendInputInfo)
    }
    return (
        <button onClick={sendData}>SEND</button>
    )
}
export default AddButton;