import 'animate.css'


function Home() {
  return (
    <div id='home'>
   
      <div className="relative z-1 overflow-hidden h-[100vh] w-[100vw] ">
        <img
          src="./Bg.png"
          className="object-cover object-center min-w-full w-full min-h-full"
          alt=""
        />

        <img
          src="./circle.svg"
          className=" animate__animated animate__zoomIn   absolute z-1 w-full  hidden md:block h-[75%] md:h-[50%] md-w-auto md:top-[100px] md:right-[40%] xl:top-[140px] top-[60%] left-0"
          alt=""
        />




        <div className="animate-slidein-left absolute top-[90px] left-10 ml-[0px] flex flex-col justify-center items-center xl:ml-[50px]">
          <div className="z-23 md:h-[100px] flex items-center justify-center w-[250px] xs:w-[300px] shadow-lg rounded-lg border bg-transparent">
            <span className="text-[40px] ">👋</span>
            <div className="md:ml-10px ml-1">
              <p className="font-xl text-gray-600 text-left leading-6 font-light">Hello, I am</p>
              <h1 className="text-lg md:text-3xl DMsans font-bold">Umar Waqar</h1>
            </div>
          </div>
          <div className="z-23 md:h-[70px] mt-10 flex-col items-center justify-left w-[250px] xs:w-[300px] shadow-lg rounded-lg border bg-transparent">
            <div className="text-center mt-[10px] ml-auto">
              <p className="text-gray-500 font-bold DMsans">FRONT END DEVELOPER</p>
              <p className="text-gray-500 font-bold DMsans">Internee at YoungDev Intern</p>
            </div>
            <div className="text-center mt-[10px] ml-auto z-44 shadow-lg rounded-lg border bg-transparent">
            </div>
          </div>
        </div>
     

       




        <div className=" xl:static absolute top-[60%]  w-full ">
          <div className="hidden xl:block absolute md:top-[24.5%] md:right-[30%]  sm:top-[10%] sm:right-[0%] transform translate-x-[50%]">
            <img src="./next.webp" className=" animate__animated animate__zoomIn rounded-full p-4   hidden xl:block bg-white shadow-lg h-[100px] w-auto z-44" alt="" />
          </div>
          <div className="absolute md:top-[48.5%] md:left-[20.75%] sm:top-[30px]  sm:right-[50%] transform translate-y-[50%]">
            <img src="./react.webp" className=" animate__animated animate__zoomIn rounded-full p-4   hidden xl:block bg-white shadow-lg h-[140px] w-auto z-44" alt="" />
          </div>
          <div className="absolute md:bottom-[39.25%] md:left-[25.5%]  sm:top-[60px] sm:right-[10%] transform translate-y-[50%]">
            <img src="./ts.webp" className=" animate__animated animate__zoomIn rounded-full p-4   hidden xl:block bg-white shadow-lg h-[100px] w-auto z-44" alt="" />
          </div>
          <div className="absolute md:bottom-[0.33%] md:right-[20.75%]  sm:top-[90px]  sm:right-[50%] transform translate-y-[50%]">
            <img src="./js.webp" className=" animate__animated animate__zoomIn rounded-full p-4   hidden xl:block bg-white shadow-lg h-[120px] w-auto z-44" alt="" />
          </div>
        </div>

      <img src="./next.webp" className="animate__animated animate__zoomIn absolute h-[60px]  top-[74%]  right-[30%] md:top-[80%] md:right-[36%] rounded-full xl:hidden block bg-white     p-4 sm:h-[100px] w-auto z-44" alt="" />
      <img src="./react.webp" className="animate__animated animate__zoomIn absolute h-[60px] top-[60%]  right-[25%] md:top-[60%] md:right-[30%]  rounded-full xl:hidden block bg-white p-4    sm:h-[80px] w-auto z-44" alt="" />
      <img src="./ts.webp" className="animate__animated animate__zoomIn absolute h-[60px] top-[60%]  left-[20%] md:top-[60%] md:left-[30%]  rounded-full xl:hidden block bg-white p-4    sm:h-[80px] w-auto z-44" alt="" />
      <img src="./js.webp" className="animate__animated animate__zoomIn absolute h-[60px] top-[74%]  left-[25%] md:top-[80%] md:left-[35%]  rounded-full  xl:hidden block bg-white p-4  sm:h-[100px] w-auto z-44" alt="" />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Home;
