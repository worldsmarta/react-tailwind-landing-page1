import React from 'react'
import './Section1.css'
import img1 from '../images/desktop/image-interactive.jpg'
const Section1 = () => {
    return (
        <div className="">
            <div class=" parent mt-20">
                <div class="child ">
                    <div class=" flex flex-col  lg:relative ">
                        <img src={img1} alt="" class=" w-80 sm:w-96" />
                        <div class="  lg:w-auto lg:p-10 lg:absolute left-72 top-28 bg-white">
                            <div class="  lg:w-80  text-center lg:text-left">
                                <h1 class=" mt-4 lg:mt-0 uppercase text-2xl sm:text-4xl">The leader in interactive VR</h1> <br />
                                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some
                                    of
                                    the
                                    best companies
                                    around the globe.Our award-winning creations have transformed businesses through digital
                                    experiences that bind to their
                                    brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
