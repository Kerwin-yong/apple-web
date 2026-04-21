import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animation';
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger);

const Chip = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
                toggleActions:'restart reverse restart reverse',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger:{
                trigger: '.g_fadeIn',
                start: 'top 85%',
                toggleActions: 'play reverse restart reversee'
            }
    
        }
    )

    }, []);


  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div id="chip" className="flex-center w-full my-20">
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>

            <div className="flex flex-col items-center">
                <h2 className="hiw-title">
                    A19 Pro chip.
                    <br /> Built for the age of AI.
                </h2>

                <p className="hiw-subtitle">
                    Graphics without limits. Power without equal.
                </p>
            </div>

            <div className="mt-10 md:mt-20 mb-14">
                <div className="relative h-full flex-center">
                    <div className="overflow-hidden">
                        <img
                         src={frameImg}
                         alt="frame"
                         className="bg-transparent relative z-10"
                        />
                    </div>

                    <div className="hiw-video">
                        <video 
                        className="pointer-events-none" 
                        playsInline={true}
                        preload="auto" 
                        muted 
                        autoPlay 
                        loop
                        ref={videoRef}
                        >
                            <source src={frameVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
            </div>

            <div className="hiw-text-container mt-20">

                <div className="flex-1 flex justify-start flex-col g_fadeIn">
                    <div className="border-b border-gray-300 pt-5 mb-5">
                        <p className="text-white text-xl md:text-2xl font-semibold mb-6">A19 Pro chip</p>
                    </div>
                    <p className="hiw-text">
                        The Apple silicon powering iPhone 17 pro delivers the { ' ' }
                        <span className="text-white">
                            highest iPhone performance ever
                        </span>,
                            ideal for advanced gaming and the most demanding tasks.
                    </p>
                </div>

                <div className="flex flex-1 justify-start flex-col g_fadeIn">
                    <div className="border-b border-gray-300 pt-5 mb-5">
                        <p className="text-white text-xl md:text-2xl font-semibold mb-6">Graphics and speed</p>
                    </div>
                    <p className="hiw-text g_fadeIn">
                        Paired with an innovative thermal design, the GPU and CPU deliver up to{ ' ' }
                        <span className="text-white">
                            40 per cent better { ' ' }
                        </span>
                            sustained performance.
                    </p>
                </div>

                <div className="flex-1 flex justify-start flex-col g_fadeIn">
                    <div className="border-b border-gray-300 pt-5 mb-5">
                        <p className="text-white text-xl md:text-2xl font-semibold mb-6">Neural Accelerators</p>
                    </div>
                    <p className="hiw-text">With</p>
                    <p className="hiw-bigtext">Neural Accelerators</p>
                    <p className="hiw-text">integrated into each GPU core, iPhone 17 Pro is more powerful than ever when working with local AI models. </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Chip