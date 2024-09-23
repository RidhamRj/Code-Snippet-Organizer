import React, { useState } from "react";

function Explorer() {
  const [folders, setFolders] = useState([]);
  const [folderCount, setFolderCount] = useState(1);
  const [editingFolderIndex, setEditingFolderIndex] = useState(null);
  const [newFolderName, setNewFolderName] = useState("");
  const [dropdown, setDropdown] = useState(null);

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
    setDropdown(null);
  };

  const saveFolder = (index) => {
    const updatedFolders = [...folders];
    updatedFolders[index] = newFolderName;
    setFolders(updatedFolders);
    setEditingFolderIndex(null);
  };

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
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
              <ul>
                {folders.map((folder, index) => (
                  <li
                    key={index}
                    className="relative py-1 px-3  mb-2 flex justify-between"
                  >
                    {editingFolderIndex === index ? (
                      <div className="flex gap-2">
                        <input
                          value={newFolderName}
                          onChange={(e) => setNewFolderName(e.target.value)}
                          className="text-customWhite bg-customGray2 px-2 w-3/4"
                        />
                        <button
                          onClick={() => saveFolder(index)}
                          className="bg-customGray2 text-customWhite px-2 py-1 w-1/4 rounded-lg hover:bg-customBlue"
                        >
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
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <span>{folder}</span>
                    )}
                    <div>
                      <svg
                        onClick={() => toggleDropdown(index)}
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
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                      {dropdown === index && (
                        <div className="absolute right-0 mt-1 w-32 bg-customBlack rounded-lg shadow-lg z-10">
                          <ul>
                            <li
                              onClick={() => editFolder(index)}
                              className="cursor-pointer rounded-lg py-2 px-3 hover:bg-customBlue"
                            >
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
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                />
                              </svg>
                            </li>
                            <li
                              onClick={() => removeFolder(index)}
                              className="cursor-pointer rounded-lg py-2 px-3 hover:bg-customBlue"
                            >
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
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <li
          onClick={createNewFolder}
          className="menuitems flex gap-3 space-x-13 w-full px-3 py-2 hover rounded-lg cursor-pointer bg-customGray2 hover:bg-customBlue active:bg-customGray"
        >
          <div className="flex gap-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            <span  className="">Create New</span>
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
