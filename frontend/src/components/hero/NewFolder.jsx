import React, { useContext } from "react";
import HeaderButton from "./HeaderButton";
import PopUpModal from "./popup/NewFolderModel";
import { FolderContext } from "../../context/AddFolderContext";

function NewFolder() {
  const {folders,setFolders,folderCount,setFolderCount}=useContext(FolderContext)
  const createNewFolder = () => {
    setFolders([...folders, `New Folder ${folderCount}`]);
    setFolderCount(folderCount + 1);
  };
  const [popUpModal, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  return (
    <div className="static">
      <PopUpModal onContinue={createNewFolder} onClose={handleClose} visible={popUpModal} />
      <div
        onClick={() => {
          setShow(true);
        }}
      >
        <HeaderButton
          svg={
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="38" height="38" rx="6" fill="#E3E5F8" />
              <path
                d="M27.8333 12.25H11.1667C10.5914 12.25 10.125 12.7164 10.125 13.2917V26.8333C10.125 27.4086 10.5914 27.875 11.1667 27.875H27.8333C28.4086 27.875 28.875 27.4086 28.875 26.8333V13.2917C28.875 12.7164 28.4086 12.25 27.8333 12.25Z"
                stroke="black"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M16.349 18.5042H22.599M10.125 12.7708L13.7708 8.60416H25.2292L28.875 12.7708"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title={"New Folder"}
        />
      </div>
    </div>
  );
}

export default NewFolder;
