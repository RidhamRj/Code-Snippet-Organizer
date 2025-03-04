import { useState } from "react";
import HeroSec from "../components/hero/HeroSec";
import Editor from "../components/hero/Editor";
import Sidebar from "../components/sidebar/Sidebar";
import { FolderContext } from "../context/AddFolderContext";
import { EditorContext } from "../context/EditorContext";

function Workspace() {
  const [folders, setFolders] = useState([]);
  const [activeFile, setActiveFile] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(1);
  const [folderCount, setFolderCount] = useState(1);
  return (
    <div className="flex">
      <FolderContext.Provider
        value={{
          folders,
          files,
          setFiles,
          fileCount,
          setFileCount,
          setFolders,
          folderCount,
          setFolderCount,
        }}
      >
        <EditorContext.Provider value={{ activeFile, setActiveFile }}>
          <Sidebar />
          {activeFile.length > 0 ? (<Editor/>):(<HeroSec/>)}
        </EditorContext.Provider>
      </FolderContext.Provider>
    </div>
  );
}

export default Workspace;
