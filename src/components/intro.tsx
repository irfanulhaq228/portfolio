const Intro = () => {
  return (
    <div className="intro min-h-[100vh] flex flex-col gap-[30px] justify-center items-center relative pb-[50px]">
      <div>
        <div className="profile-box"></div>
        <div className="intro-skill">UI/UX Designer</div>
      </div>
      <div className="max-w-[600px] flex flex-col justify-center items-center px-[20px]">
        <p className="name text-white text-[50px] sm:text-[75px] font-[700] text-center">John Wick</p>
        <p className="text-center text-gray-400 text-[15px] font-[500]">
          As a graphic designer with 2 years of experience, I specialize in
          creating visually designs that effectively communicate
          brand messages and captivate audiences. My work spans a range of
          design areas, including logo and identity design, marketing materials,
          social media graphics, and web design.
        </p>
      </div>
      <div className="hidden lg:block absolute vertical-line-left"></div>
      <div className="hidden lg:block absolute vertical-line-right"></div>
    </div>
  );
};

export default Intro;
