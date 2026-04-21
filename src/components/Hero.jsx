import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { heroVideo } from "../utils";
import { useState } from 'react';

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? heroVideo : heroVideo );
  

  /*const handleVideoSrcSet = () =>{
     if(window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)
     } else {
      setvideoSrc(heroVideo)
     }
  }
 
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])*/

  useGSAP(() =>{
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.5})
  },[])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* 1. 视频容器：去掉 mt-16，强制 h-full */}
      {/* 这里的 h-full 配合 flex flex-center 会让视频完美居中，不偏不倚 */}
      <div className="relative h-full w-full flex flex-center z-0">
        
        {/* 如果你想要文字，可以取消下面这行的注释，它会飘在视频上方 */}
        {/* <p id="hero" className="hero-title absolute top-32">iPhone 17 Pro</p> */}

        <div className="absolute inset-0 w-full h-full flex flex-center">
          <video 
            // 关键：去掉 h-auto，改用 h-full。
            // 使用 object-contain 保证视频比例原封不动，一丁点都不会被切掉。
            className="pointer-events-none w-full h-full object-contain"
            autoPlay 
            muted 
            playsInline={true} 
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* 2. 按钮区域：用 absolute 把它“钉”在屏幕最底部 */}
      {/* 这样无论视频比例如何，按钮永远在屏幕内，不会被挤到下面去 */}
      <div
        id="cta"
        className="absolute bottom-0.5 left-0 w-full flex flex-col items-center opacity-0 z-10"
      >
        <a href="#highlights" className="btn">Buy</a>
        {/* 修正了你的 front-normal 拼写错误 */}
        <p className="font-normal text-xl text-white-100 mt-2">
          From RM 5,499 or RM 229.13/mo. for 24 mo.
        </p>
      </div>
    </section>
  )
}

export default Hero