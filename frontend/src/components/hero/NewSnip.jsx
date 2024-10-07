import React, { useContext } from "react";
import HeaderButton from "./HeaderButton";
import PopUpModal from "./popup/NewFileModel";
import { FolderContext } from "../../context/AddFolderContext";
function NewSnip() {
  const { files, setFiles, fileCount, setFileCount } =
    useContext(FolderContext);
  const createNewFile = () => {
    setFiles([...files, `New File ${fileCount}`]);
    setFileCount(fileCount + 1);
  };
  const [popUpModal, setShow] = React.useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <PopUpModal
        onContinue={createNewFile}
        onClose={handleClose}
        visible={popUpModal}
      />
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
                d="M20.2697 9.25H15.75C13.7068 9.25 12.6863 9.25 12.0515 9.88483C11.4167 10.5197 11.4167 11.5402 11.4167 13.5833V24.4167C11.4167 26.4598 11.4167 27.4803 12.0515 28.1152C12.6863 28.75 13.7068 28.75 15.75 28.75H22.25C24.2932 28.75 25.3137 28.75 25.9485 28.1152C26.5833 27.4803 26.5833 26.4598 26.5833 24.4167V15.5637C26.5833 15.1217 26.5833 14.8996 26.501 14.7013C26.4187 14.502 26.2627 14.3449 25.9485 14.0318L21.8015 9.88483C21.4873 9.57067 21.3313 9.41467 21.1331 9.33233C20.9337 9.25 20.7117 9.25 20.2697 9.25Z"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M20.0833 9.25V13.5833C20.0833 14.6049 20.0833 15.1152 20.4007 15.4326C20.7181 15.75 21.2284 15.75 22.25 15.75H26.5833"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          }
          title={"New Snippet"}
        />
      </div>
    </>
  );
}

export default NewSnip;
