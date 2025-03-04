import { Tabs } from "./Tabs"
import { useContext } from "react"
import { EditorContext } from "../../context/EditorContext"

export default  () => {
    const {activeFile,setActiveFile}=useContext(EditorContext)
    return <div className="bg-heroBlack font-Montserrat text-customWhite  h-screen w-[84vw]">
        <div className="h-[10vh] w-full flex bg-gray-500 ">
            {activeFile.map((index)=>{
                return <Tabs tabName={index} />
            })}
        </div>
        <div></div>
    </div>
}