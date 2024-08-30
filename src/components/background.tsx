import Image from "next/image";
import bg from "@/assets/background-img.jpg";

const Background = () => {
  return (
    <div>
        <Image alt="bg" src={bg} className="fixed w-full h-[100vh] object-cover z-[-1]" />
        <div className="fixed h-[100vh] w-full bg-[#00000049] z-[-1]"></div>
    </div>
  )
}

export default Background