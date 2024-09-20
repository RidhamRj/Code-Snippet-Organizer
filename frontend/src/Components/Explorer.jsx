import React, { useState } from "react";

function Explorer() {
  const [folders, setFolders] = useState([]);
  const [folderCount, setFolderCount] = useState(1);
  const [editingFolderIndex, setEditingFolderIndex] = useState(null);
  const [newFolderName, setNewFolderName] = useState("");

  const createNewFolder = () => {
    setFolders([...folders, `New Folder ${folderCount}`]);
    setFolderCount(folderCount + 1);
  };

  const removeFolder = (index) => {
    setFolders(folders.filter((_, i) => i !== index));
  };

  const editFolder = (index) => {
    setEditingFolderIndex(index);
    setNewFolderName(folders[index]);
  };

  const saveFolder = (index) => {
    const updatedFolders = [...folders];
    updatedFolders[index] = newFolderName;
    setFolders(updatedFolders);
    setEditingFolderIndex(null);
  };

  return (
    <div className="w-full  mt-3">
      <ul className="gap-3 flex flex-col">
        <li className="menuitems flex gap-3 px-3 py-2  rounded-lg cursor-pointer bg-customGray2 hover:bg-customBlue active:bg-customGray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>Home</span>
        </li>

        <li className="menuitems flex gap-3 px-3 py-2 hover rounded-lg cursor-pointer bg-customGray2 hover:bg-customBlue active:bg-customGray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
            />
          </svg>
          <span>Current Snippets</span>
        </li>
        <div className="mt-4 max-h-48 overflow-y-auto px-2 scrollbar cursor-pointer">
          {folders.length > 0 && (
            <div className="text-customWhite">
              <h4 className="mb-2">Folders:</h4>
              <ul>
                {folders.map((folder, index) => (
                  <li
                    key={index}
                    className="relative py-1 px-3 bg-customGray2 mb-2 rounded-lg flex justify-between"
                  >
                    {editingFolderIndex === index ? (
                      <input
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                        className="text-customWhite bg-customGray2 rounded-lg px-2"
                      />
                    ) : (
                      <span>{folder}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <li
          onClick={createNewFolder}
          className="menuitems flex gap-3 space-x-16 px-3 py-2 hover rounded-lg cursor-pointer bg-customGray2 hover:bg-customBlue active:bg-customGray"
        >
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            <span>Create New</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default Explorer;
