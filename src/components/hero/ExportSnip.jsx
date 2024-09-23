import React from "react";
import HeaderButton from "./HeaderButton";

function ExportSnip() {
  return (
    <>
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.9337 17.2911C24.7316 17.0892 24.4576 16.9758 24.1719 16.9758C23.8862 16.9758 23.6121 17.0892 23.41 17.2911L20.5781 20.1229V9.51562C20.5781 9.22969 20.4645 8.95546 20.2623 8.75328C20.0602 8.55109 19.7859 8.4375 19.5 8.4375C19.2141 8.4375 18.9398 8.55109 18.7376 8.75328C18.5355 8.95546 18.4219 9.22969 18.4219 9.51562V20.1229L15.59 17.2911C15.3856 17.1006 15.1153 16.9969 14.836 17.0019C14.5567 17.0068 14.2902 17.12 14.0927 17.3175C13.8951 17.515 13.782 17.7815 13.7771 18.0608C13.7721 18.3401 13.8758 18.6104 14.0662 18.8148L18.7381 23.4867L19.5 24.25L20.2619 23.4881L24.9337 18.8163C25.0339 18.7161 25.1134 18.5972 25.1676 18.4664C25.2219 18.3355 25.2498 18.1953 25.2498 18.0537C25.2498 17.912 25.2219 17.7718 25.1676 17.6409C25.1134 17.5101 25.0339 17.3912 24.9337 17.2911ZM11.5938 21.0156C11.5938 20.874 11.5659 20.7338 11.5117 20.603C11.4575 20.4722 11.3781 20.3534 11.278 20.2533C11.1779 20.1532 11.059 20.0737 10.9282 20.0196C10.7974 19.9654 10.6572 19.9375 10.5156 19.9375C10.374 19.9375 10.2338 19.9654 10.103 20.0196C9.97224 20.0737 9.85339 20.1532 9.75328 20.2533C9.65316 20.3534 9.57375 20.4722 9.51957 20.603C9.46539 20.7338 9.4375 20.874 9.4375 21.0156V25.6875C9.4375 26.45 9.7404 27.1813 10.2796 27.7204C10.8187 28.2596 11.55 28.5625 12.3125 28.5625H26.6875C27.45 28.5625 28.1813 28.2596 28.7204 27.7204C29.2596 27.1813 29.5625 26.45 29.5625 25.6875V21.0156C29.5625 20.7297 29.4489 20.4555 29.2467 20.2533C29.0445 20.0511 28.7703 19.9375 28.4844 19.9375C28.1984 19.9375 27.9242 20.0511 27.722 20.2533C27.5198 20.4555 27.4062 20.7297 27.4062 21.0156V25.6875C27.4062 25.8781 27.3305 26.0609 27.1957 26.1957C27.0609 26.3305 26.8781 26.4062 26.6875 26.4062H12.3125C12.1219 26.4062 11.9391 26.3305 11.8043 26.1957C11.6695 26.0609 11.5938 25.8781 11.5938 25.6875V21.0156Z"
              fill="black"
            />
          </svg>
        }
        title={"Export Snippets"}
      />
    </>
  );
}

export default ExportSnip;
