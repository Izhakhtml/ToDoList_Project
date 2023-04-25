import './style.css'
import CreateTasks from "./createTasks/CreateTask"
import PresentTask from "./presentTasks/PresentTask"
import { MissionProvider } from "../context/TaxtContext"
import { useContext } from "react"
import MiddlewareComp from './middlewre component/MiddlewareComp'
const Tasks = () => {
    const { mission } = useContext(MissionProvider);
    return (
        <div className="warp_app">
            <div className="createTask">
                <CreateTasks />
                <MiddlewareComp/>
            </div>
            <div className="presentTask">
            {
                mission?
                <PresentTask />:""
            }
            </div>
        </div>
    )
}
export default Tasks