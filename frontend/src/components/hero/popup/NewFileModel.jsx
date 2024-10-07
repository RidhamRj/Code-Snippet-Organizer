import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function NewFile({ visible, onClose,onContinue }) {
  if (!visible) return null;

  const handleClose = (e) => {
    const target = e.target;
    if (target.id === "Container" || target.id === "close") {
      onClose();
    }
  };
  const oncontinue=()=>{
    onContinue()
    handleClose()
  }
  return (
    <>
      <div className="absolute ">
        <div
          onClick={handleClose}
          id="Container"
          className="modal-body fixed bg-[#362f5a38] h-screen w-screen top-0 left-0 flex z-50 inset-0 transition-opacity justify-center items-center"
        >
          <div className="bg-heroBlack relative shadow-2xl	h-screen w-screen max-h-[40vh] max-w-[35vw] border-[1px] border-[#272727] rounded-2xl ">
            <div className="pop-up-head p-10 relative flex flex-col gap-10 w-full items-center  ">
              <div className="flex flex-col w-full gap-2">
                <h2 className="text-2xl font-bold">Create a New File</h2>
                <p className="text-xs text-[#abaaaa]">
                  Specify the framework or language you’ll be using{" "}
                </p>
                <input
                  type="text"
                  maxLength={20}
                  placeholder="Folder Name"
                  className="bg-transparent text-[#e2dede] mt-4 text-xs border-[#575757] border-[0.2px] rounded-sm p-2 w-full px-3 "
                />
              </div>
              {/* <span>
                <svg
                  width="43"
                  height="5"
                  viewBox="0 0 43 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.11961 4.21404C1.54361 4.21392 1.05765 4.02181 0.661733 3.63773C0.265815 3.25364 0.0679189 2.7676 0.0680447 2.1796C0.0681732 1.5796 0.260277 1.09364 0.644357 0.721725C1.04044 0.34981 1.53248 0.163915 2.12048 0.164041C2.72048 0.16417 3.21244 0.350275 3.59636 0.722357C3.98028 1.09444 4.17217 1.58048 4.17205 2.18048C4.17192 2.76848 3.97382 3.25444 3.57773 3.63835C3.19365 4.02227 2.70761 4.21417 2.11961 4.21404ZM21.4921 4.21819C20.9161 4.21807 20.4301 4.02596 20.0342 3.64188C19.6383 3.25779 19.4404 2.77175 19.4405 2.18375C19.4407 1.58375 19.6328 1.09779 20.0169 0.725872C20.4129 0.353957 20.905 0.168063 21.493 0.168188C22.093 0.168317 22.5849 0.354422 22.9689 0.726504C23.3528 1.09859 23.5447 1.58463 23.5445 2.18463C23.5444 2.77263 23.3463 3.25859 22.9502 3.6425C22.5661 4.02642 22.0801 4.21831 21.4921 4.21819ZM40.8646 4.22234C40.2886 4.22221 39.8027 4.03011 39.4067 3.64602C39.0108 3.26194 38.8129 2.7759 38.8131 2.1879C38.8132 1.5879 39.0053 1.10194 39.3894 0.73002C39.7854 0.358104 40.2775 0.17221 40.8655 0.172335C41.4655 0.172464 41.9574 0.358569 42.3414 0.730651C42.7253 1.10273 42.9172 1.58877 42.9171 2.18877C42.9169 2.77677 42.7188 3.26273 42.3227 3.64665C41.9387 4.03057 41.4526 4.22246 40.8646 4.22234Z"
                    fill="#8F8E8E"
                  />
                </svg>
              </span>
              <div className="flex flex-col w-full gap-2">
                <h2 className="text-xl font-semibold ">Add Tag</h2>
                <input
                  type="text"
                  maxLength={20}
                  placeholder="Ex: React JS"
                  className="bg-transparent text-[#e2dede] mt-4 text-xs border-[#575757] border-[0.2px] rounded-sm p-2 w-full px-3 "
                />
              </div> */}
              <div className="buttons flex gap-5">
                <button id="close" onClick={handleClose} className="bg-transparent cursor-pointer border-[1.3px] border-[#a5a4a4] px-16 py-2 rounded-lg ">
                  Cancel
                </button>
                <button id="close" onClick={oncontinue} className="bg-[#6a00c4] border-[1.3px] cursor-pointer border-[#9b9a9a] px-16 py-2 rounded-lg ">
                  Continue
                </button>
              </div>
              {/* <div id="close"
                onClick={handleClose}  className="cross bg-tansparent absolute right-10 mt-5  text-2xl cursor-pointer">
              <div id="close"
                onClick={handleClose}  className="cross bg-transparent z-40 h-10 w-5 absolute right-0 top-0 cursor-pointer"></div>
              <FontAwesomeIcon
              className="z-10"
                color="black"
                icon={faXmark}
              />
            </div> */}
            </div>
            <div className="popup-conetnt h-3/5 flex flex-col items-center w-full justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
