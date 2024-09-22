import HeroSec from "../components/hero/HeroSec";
import Sidebar from "../components/sidebar/Sidebar";

function Workspace() {
  return (
    <div className="flex">
      <Sidebar />
      <HeroSec />
    </div>
  );
}

export default Workspace;
