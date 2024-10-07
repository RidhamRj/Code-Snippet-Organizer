import { useState } from "react";
import HeroSec from "../components/hero/HeroSec";
import Sidebar from "../components/sidebar/Sidebar";
import { FolderContext } from "../context/AddFolderContext";

function Workspace() {
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(1);
  const [folderCount, setFolderCount] = useState(1);
  return (
    <div className="flex">
      <FolderContext.Provider
        value={{ folders,files,setFiles,fileCount,setFileCount, setFolders, folderCount, setFolderCount }}
      >
        <Sidebar />
        <HeroSec />
        
      </FolderContext.Provider>
    </div>
  );
}

export default Workspace;
