import React from 'react'
import img1 from '../images/desktop/image-deep-earth.jpg'
import img1m from '../images/mobile/image-deep-earth.jpg'
import img2 from '../images/desktop/image-night-arcade.jpg'
import img2m from '../images/mobile/image-night-arcade.jpg'
import img3 from '../images/desktop/image-soccer-team.jpg'
import img3m from '../images/mobile/image-soccer-team.jpg'
import img4 from '../images/desktop/image-grid.jpg'
import img4m from '../images/mobile/image-grid.jpg'
import img5 from '../images/desktop/image-from-above.jpg'
import img5m from '../images/mobile/image-from-above.jpg'
import img6 from '../images/desktop/image-pocket-borealis.jpg'
import img6m from '../images/mobile/image-pocket-borealis.jpg'
import img7 from '../images/desktop/image-curiosity.jpg'
import img7m from '../images/mobile/image-curiosity.jpg'
import img8 from '../images/desktop/image-fisheye.jpg'
import img8m from '../images/mobile/image-fisheye.jpg'
import './Section.css'
const Section = () => {
    return (
        <>
            <div className=" gap-above mx-10">

                {/* heading and button */}
                <div className="sm:flex sm:flex-row">
                    <p className="text-center sm:text-left text-2xl sm:text-4xl">OUR CREATIONS</p>
                    <div className="sm:flex sm:flex-1 sm:justify-end">
                        <button className=" px-4 py-2 border-2 border-gray-500 text-gray-500  duration-500
                       font-semibold hover:bg-black hover:text-white hover:border-0 hover:border-black hidden sm:block">
                            SEE ALL
                        </button>
                    </div>
                </div>

                {/* pictures */}
                <div className=" sm:mt-10 grid grid-cols-1 sm:grid-cols-4 sm:gap-2">

                    <div className="relative">
                        <img src={img1} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img1m} alt="" className="sm:hidden mt-7" />
                        <p className=" bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">DEEP EARTH</p>
                    </div>

                    <div className="relative">
                        <img src={img2} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img2m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">NIGHT ARCADE</p>
                    </div>

                    <div className="relative">
                        <img src={img3} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img3m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">SOCCER TEAM</p>
                    </div>


                    <div className="relative">
                        <img src={img4} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img4m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">THE GRID</p>
                    </div>

                    <div className="relative">
                        <img src={img5} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img5m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">FROM UP ABOVE</p>
                    </div>

                    <div className="relative">
                        <img src={img6} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img6m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">POCKET BOREALIS</p>
                    </div>

                    <div className="relative">
                        <img src={img7} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img7m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">THE CURIOSITY</p>
                    </div>

                    <div className="relative">
                        <img src={img8} alt="" className="hidden sm:block lg:w-full lg:h-full" />
                        <img src={img8m} alt="" className="sm:hidden mt-4" />
                        <p className="bottom-3 sm:bottom-8 text-xl md:2xl lg:text-4xl left-4 w-10 absolute text-white">MAKE IT FISHEYE</p>
                    </div>
                </div>



            </div>

            {/* button for small screens */}
            <div className=" mt-7 flex flex-1 justify-center sm:hidden">
                <button className=" px-4 py-2 border-2 border-gray-500 text-gray-500  duration-500
                       font-semibold hover:bg-black hover:text-white hover:border-0 hover:border-black 
                       ">
                    SEE ALL
                </button>
            </div>

        </>

    )
}

export default Section
