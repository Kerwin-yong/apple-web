import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animation';
import { exploreVideo, explore1Img, explore2Img } from '../utils';
import gsap from 'gsap';

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.fromTo('#features_title', {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#features_title',
                toggleActions: 'play none restart reverse',
                start: 'top 90%'
            }
            }
        )


        gsap.to(`#exploreVideo`, {
            scrollTrigger: {
                trigger: `#exploreVideo`,
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        animateWithGsap('#features_title', { y: 0, opacity:1 })
        animateWithGsap(
            '.g_grow',
            { scale: 1, opacity: 1, ease: 'power1' },
            { scrub: 5.5 }
        );
        animateWithGsap(
            '.g_text',
            { y:0 , opacity: 1, ease: 'power2.inOut', duration: 1 }
        )
    }, []);

  return (
    <section className= "common-padding bg-zinc">
        <div className="screen-max-width flex flex-col items-center">

            <div className="mb-12 w-full">
                <h1 id="features_title" className="section-heading">Explore the full story.</h1>
            </div>

            <span className="text-[#E8732A] text-lg font-medium mb-5">
                DESIGN
            </span>
            
            
            <h2 className="text-5xl lg: text-7xl font-semibold text-white text-center leading tight mb-8">
                Unibody enclosure.<br />
                Makes a strong case for itself.
            </h2>

            <p className="text-gray-100 text-xl md: text-2xl text-center font-light max-w-3xl leading-relaxed mb-12">
                Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful
                iPhone models ever made. At the core of the new design is a heat-forged aluminium unibody enclosure that
                maximises performance, battery capacity and durability.
            </p>

            <div className="flex-center flex-col sm: px-10">
                <div className="relative h-[50vh] w-full flex items-center">
                    <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                        <source src={exploreVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="flex flex-col w-full relative">
                    <div className="feature-video-container">
                        <div className="overflow-hidden flex-1 h-[50vh]">
                            <img src={explore1Img} alt="aluminium" className="feature-video g_grow" />
                        </div>

                        <div className="overflow-hidden flex-1 h-[50vh]">
                             <img src={explore2Img} alt="aluminium 2" className="feature-video g_grow" />
                        </div>
                    </div>

                    <div className="feature-text-container">
                        <div className="flex-1 flex-center">
                            <p className="feature-text g_text">
                                iPhone 17 Pro features a {''}
                                <span className="text-white">
                                    high-performance aerospace-grade aluminium exoskeleton
                                </span>,
                                    using a specialized alloy engineered for high-velocity jet turbines to deliver our best-ever strength-to-weight ratio.
                            </p>
                        </div>

                        <div className="flex-1 flex-center">
                            <p className="feature-text g_text">
                                Designed with a specialized aerospace-grade aluminium, these Pro models achieve a perfect balance of {''}
                                <span className="text-white">
                                    featherlight portability and superior thermal cooling.
                                </span>
                                Protected by
                                <span className="text-white">
                                    Ceramic Shield on both sides,
                                </span>
                                it is a fortress in your palm. It’s not just our lightest Pro ever—it’s our most resilient, front to back.
                            </p>
                        </div>

                    </div>

                </div>

                </div>
            </div>
        
    </section>
  )
}

export default Features