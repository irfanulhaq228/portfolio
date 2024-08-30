import { BsPersonWorkspace } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed w-full bottom-[25px] flex justify-center items-center z-[9999]">
      <div className="navbar">
        <div className="section selected" title="Intro">
          <GrHomeRounded className="w-[21px] h-[21px]" />
        </div>
        <div className="section" title="Work Done">
          <BsPersonWorkspace className="w-[22px] h-[22px]" />
        </div>
        <div className="section" title="Portfolio">
          <MdOutlineScreenSearchDesktop className="w-[23px] h-[23px]" />
        </div>
        <div className="section" title="Experience">
          <GiBackwardTime className="w-[22px] h-[22px]" />
        </div>
        <div className="section" title="Contact">
          <HiOutlinePhoneIncoming className="w-[22px] h-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
