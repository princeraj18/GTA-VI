import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  let [show,setshow]=useState(false)
useGSAP(()=>{
 const tl=gsap.timeline()
 tl.to(".vi-mask-group",{
rotate:10,
duration:2,
ease:"Power4.easeInOut",
transformOrigin:"50% 50%",
 }).to(".vi-mask-group",{
  scale:10,
  duration:2,
  delay:-1.8,
  ease:"Expo.easeInOut",
  transformOrigin:"50% 50%",
  opacity:0,
     onUpdate:function(){
     if(this.progress() >= 0.9){
       document.querySelector(".svg").remove()
       setshow(true)
       this.kill()
  }
 }
 })
})
useGSAP(() => {
  if (!show) return;

  gsap.to(".main", {
    scale: 1,
    rotate: 0,
    duration: 2,
    delay: "-1",
    ease: "Expo.easeInOut",
  });

  gsap.to(".sky", {
    scale: 1.1,
    rotate: 0,
    duration: 2,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });

  gsap.to(".bg", {
    scale: 1.1,
    rotate: 0,
    duration: 2,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });

  gsap.to(".character", {
    scale: 1,
    x: "-50%",
    bottom: "-25%",
    rotate: 0,
    duration: 2,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });

  gsap.to(".text", {
    scale: 1,
    rotate: 0,
    duration: 3,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });

  const main = document.querySelector(".main");

  main?.addEventListener("mousemove", function (e) {
    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
    console.log(e.clientX/window.innerWidth);
    gsap.to(".main .text", {
      x: `${xMove * 0.4}%`,
    });
    gsap.to(".sky", {
      x: xMove,
    });
    gsap.to(".bg", {
      x: xMove * 1.5,
    });
  });
}, [show]);


  return (

    <>
      <div className='svg flex justify-center items-center h-screen fixed top-0 left-0 w-full z-[100] overflow-hidden bg-[#000]'>
    <svg viewBox="0 0 800 600" preserveAspectRatio='xMidYMid slice'>
    <defs>
      <mask id="viMask">
      <rect width="100%" height="100%" fill="black"/>
      <g className='vi-mask-group'>
        <text x="50%" y="50%" textAnchor="middle" fontSize="250" fill="yellow" dominantBaseline="middle" fontFamily="Arial Black" >
          VI
        </text>
      </g>



      </mask>
    </defs>
    <image href="/bg.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" mask="url(#viMask)" />
    </svg>
      </div>
      {show &&
       <div className='main w-full rotate-[-30deg] scale-[2] '>
        <div className="landing overflow-hidden relative w-full h-screen bg-black">
          <div className="navbar w-full py-10 px-10 absolute  top-0 left-0 z-[10]">
            <div className="logo flex gap-6">
              <div className="lines flex flex-col gap-[5px] ">
                <div className="line bg-white w-15 h-2"></div>
                <div className="line bg-white w-8 h-2"></div>
                <div className="line bg-white w-5 h-2"></div>
              </div>
              <h3 className='text-4xl -mt-[8px] leading-none text-white'>Rockstar</h3>
            </div>
          </div>
          <div className="relative imagesdiv w-full h-screen overflow-hidden">
            <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
            <img className='absolute bg top-0 scale-[1.8] [-3deg] left-0 w-full h-full object-cover' src="./bg.png" alt="" />
            <div className='absolute scale-[1.4] rotate-[-10deg] text text-7xl flex flex-col gap-3 text-white top-10 left-1/2 -translate-x-1/2'>
              <h3 className='leading-none text-[9rem] -ml-40'>Grand</h3>
              <h3 className='leading-none text-[9rem] -ml-20'>Theft</h3>
              <h3 className='leading-none text-[9rem] -ml-40'>Auto</h3>
            </div>
            <img className='absolute top-[15%] left-1/2 -translate-x-1/2 bottom-[150%] object-cover scale-[3] rotate-[-20deg] character' src="./girlbg.png" alt="" />
            <div className="btmbar absolute text-white w-full px-10 py-15 bottom-0 left-0 absolute bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4">
            <i className=" text-4xl ri-arrow-down-line"></i>
            <h3 className='text-xl'>Scroll Down</h3>
            </div>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[45px]' src="./ps5.png" alt="" />
          </div>
          </div>
          
        </div>
        <div className="h-screen flex items-center justify-center w-full bg-black ">
          <div className='cntnr flex text-white w-full h-[80%]  '>
          <div className="lft relative w-1/2 h-full">
            <img className='scale-[0.8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
          </div>
          <div className="rg w-[40%]"> 
            <h3 className='text-6xl'>Still Running,</h3>
            <h3 className='text-6xl'>Not Hunting</h3>
            <p className='mt-10 text-md'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum hic officiis necessitatibus neque fugiat? Pariatur nostrum dolor assumenda quos repellendus.
            </p>
            <p className='mt-3 text-md '>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum hic officiis necessitatibus neque fugiat? Pariatur nostrum dolor assumenda quos repellendus.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias blanditiis nulla tempora numquam at, possimus praesentium libero non quibusdam.
            </p>
            <p className='mt-3 text-md '>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum hic officiis necessitatibus neque fugiat? Pariatur nostrum dolor assumenda quos repellendus.
            </p>
            <button className='px-5 py-5 bg-yellow-500 text-black text-2xl mt-10 cursor-pointer ' >Download</button>

          </div>
        </div>
        </div></div>}

      
    </>
  )
}

export default App
