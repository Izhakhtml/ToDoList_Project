import { useContext } from "react";
import { MissionProvider } from "../../context/TaxtContext";

const UrgencyTask = ({ funOnchangeEvent }) => {
    const { textInput } = useContext(MissionProvider);
    return (
        <>
            {textInput}<br />
            <select onChange={funOnchangeEvent} >
                <option value="">בחר</option>
                <option name="רגילה" value="רגילה">רגילה</option>
                <option name="בנונית" value="בנונית">בנונית</option>
                <option name="גבוה" value="גבוה">גבוה</option>
            </select>
        </>
    )
}
export default UrgencyTask;