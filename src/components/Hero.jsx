import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/community_animation_lottie.json';
import Typed from 'react-typed'

function Hero() {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };



  return (
    <div className='w-full py-16 px-5'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <Lottie
            className = 'w-[500px] mx-auto my-4'
            options = {defaultOptions}
            height = {500}
            width = {500}
            />
            <div className=' text-white grow'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='font-bold p-4'>Growing With the Community</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-8 text-[#00df9a] '>Welcome to FOSSCU</h1>
            <div className='flex justify-center items-center '>
                {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold'>We Do </p> */}
                <Typed
                    className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                    strings={["We do Open-Source 💚", "We do Community Work 🤝", "We do Annual Conferences 🎤", "We Host Events 🎪"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__kzFzfFUNFdWMTVWTjhSU1UyMDZTN0YzSkhMWVE5Vi4u" target="_blank" rel="noopener noreferrer">
            <button className='bg-[#0DFF1C] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Join Us 🤝</button>
            </a>
        </div>
    </div>
        </div>
    </div>
  );
}

export default Hero

