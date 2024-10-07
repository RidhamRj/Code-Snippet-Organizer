import { createContext } from "react";

export const FolderContext=createContext({
    folders:null,
    setFolders:null,
    folderCount:null,
    setFolderCount:null,
    files:null,
    setFiles:null,
    fileCount:null,
    setFileCount:null,
})