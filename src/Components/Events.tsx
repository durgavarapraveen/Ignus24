import { useEffect, useRef, useState } from 'react'
import Menu from '../Navbar/Menu'
import Logo from '../Navbar/Logo'
import './Events.css'
import Image1 from '../assets/Frame 5.png'
import '../Fonts/Helvetica-Font/Helvetica-Bold.ttf'
import InformalsImg from '../assets/Frame 8.png'
import FlagshipImg from '../assets/Frame 10.png'
import PronightImg from '../assets/Frame 9.png'
import OnlineImg from '../assets/Frame 11.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from 'gsap';
import LetterAnimation from './LetterAnimation'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


function Events() {

    const [isAnimating, setIsAnimating] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const CultRef = useRef(null)
    const InformRef= useRef(null)
    const pronightRef = useRef(null)
    const flagshipRef = useRef(null)
    const onlineRef = useRef(null)

    const CultCircleRef = useRef(null)
    const InfoCircleRef = useRef(null)
    const ProCircleRef = useRef(null)
    const FlagCircleRef = useRef(null)
    const OnlineCircleRef = useRef(null)

    const CultEventsRef = useRef<HTMLDivElement>(null);
    const proEventsRef = useRef(null)
    const informEventsRef = useRef(null)
    const flagshipEventsRef = useRef(null)
    const onlineEventsRef = useRef(null)

    const culturals = 'Culturals';
    const Informals = 'Informals';
    const Pronight = 'Pronight';
    const Flagship = 'Flagship';
    const Online = 'Online';

    const showDiv = (ref: React.RefObject<HTMLDivElement>) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
        );
    };

    const showCircleDiv = (ref: React.RefObject<HTMLDivElement>) => {
        gsap.fromTo (
            ref.current, 
            {backgroundColor: 'transparent', y: 0},
            {backgroundColor: '#FFFFFF' , y: 0, duration: 0.5, ease: 'power2.inOut'}
        )
    }

    const showEventsDiv = (ref: React.RefObject<HTMLDivElement>) => {
        gsap.fromTo (
            ref.current, 
            { opacity: 0},
            {opacity: 1}
        )
    }

    const hideDiv = (ref: React.RefObject<HTMLDivElement>) => {
        gsap.to(ref.current, { opacity: 0, y: 0, duration: 0.5, ease: 'power2.inOut' });
    };

    const hideCircleDiv = (ref: React.RefObject<HTMLDivElement>) => {
        gsap.to(ref.current, {backgroundColor: 'transparent', y: 0, duration: 0.5, ease: 'power2.inOut'} );
    }

    const hideEventsDiv = (ref: React.RefObject<HTMLDivElement>) => {
        gsap.to(ref.current, { opacity: 0, duration: 0.5, ease: 'power2.inOut'})
    }

    const handleAnimationComplete = () => {
        setIsAnimating(false);
    };

    useEffect(() => {
        console.log(CultEventsRef)
    }, [])

    const handleDivChange = (refArray: React.RefObject<HTMLDivElement>[]) => {
        hideDiv(CultRef);
        hideDiv(InformRef);
        hideDiv(pronightRef);
        hideDiv(flagshipRef);
        hideDiv(onlineRef);

        hideCircleDiv(CultCircleRef);
        hideCircleDiv(InfoCircleRef)
        hideCircleDiv(ProCircleRef)
        hideCircleDiv(FlagCircleRef)
        hideCircleDiv(OnlineCircleRef)

        hideEventsDiv(CultEventsRef)
        hideEventsDiv(informEventsRef)
        console.log(informEventsRef)
        hideEventsDiv(proEventsRef)
        hideEventsDiv(flagshipEventsRef)
        hideEventsDiv(onlineEventsRef)

        setIsAnimating(true);
    
        setTimeout(() => {
            showDiv(refArray[0]);
            showCircleDiv(refArray[1]);
            showEventsDiv(refArray[2]);
        }, 10); 
    };

  return (
    <div className='m-0 p-0 h-screen'>

        <div className='sticky top-0 w-full h-[calc(140px)] z-10 bg-black'>
            <div className='absolute'>
                <Logo />
            </div>
            <div className='absolute right-0 top-0'>
                <Menu />
            </div>
        </div>

        <div className='relative' >

            <div className='h-400px fixed flex flex-col h-full md:w-10% sm:block none '>
                <a href='#culturals' onClick={() => handleDivChange([CultRef, CultCircleRef, CultEventsRef])}>
                    <div  ref={CultCircleRef} className='circle-incircle bg-#FFFFFF' >
                        <div className='circle-innercircle'>
                            <div className='circle-dot'></div>
                        </div>
                    </div>
                </a>

                <a href='#Informals' onClick={() => handleDivChange([InformRef, InfoCircleRef, informEventsRef])}>
                    <div ref={InfoCircleRef} className='circle-incircle'>
                        <div className='circle-innercircle'>
                            <div className='circle-dot'></div>
                        </div>
                    </div>
                </a>

                <a href='#Pronight' onClick={() => handleDivChange([pronightRef, ProCircleRef, proEventsRef])}>
                    <div ref={ProCircleRef} className='circle-incircle'>
                        <div className='circle-innercircle'>
                            <div className='circle-dot'></div>
                        </div>
                    </div>
                </a>

                <a href='#Flagship' onClick={() => handleDivChange([flagshipRef, FlagCircleRef, flagshipEventsRef])}>
                    <div ref={FlagCircleRef} className='circle-incircle'>
                        <div className='circle-innercircle'>
                            <div className='circle-dot'></div>
                        </div>
                    </div>
                </a>

                <a href='#Online' onClick={() => handleDivChange([onlineRef, OnlineCircleRef, onlineEventsRef])}>
                    <div ref={OnlineCircleRef} className='circle-incircle'>
                        <div className='circle-innercircle'>
                            <div className='circle-dot'></div>
                        </div>
                    </div>
                </a>
            </div>

            <div className='md:ml-10% ml-0 w-90% relative'>

                <div className='absolute '>
                    <div id='culturals' ref={CultRef} className='relative h-[calc(100vh-135px)] flex items-center '>
                        <img src={Image1} alt='Image1' className='h-[calc(100vh-220px)]' />
                        <LetterAnimation text={culturals} isAnimating={isAnimating} onAnimationComplete={handleAnimationComplete} />
                    </div>
                </div>

                <div className='absolute'>
                    <div id='Informals' ref={InformRef} className='relative h-[calc(100vh-135px)] flex items-center opacity-0'>
                        <img src={InformalsImg} alt='Image1' className='h-[calc(100vh-200px)]' />
                        <LetterAnimation text={Informals} isAnimating={isAnimating} onAnimationComplete={handleAnimationComplete} />
                    </div>
                </div>

                <div className='absolute'>
                    <div id='Pronight' ref={pronightRef} className='relative h-[calc(100vh-135px)] flex items-center opacity-0'>
                        <img src={PronightImg} alt='Image1' className='h-[calc(100vh-200px)]' />
                        <LetterAnimation text={Pronight} isAnimating={isAnimating} onAnimationComplete={handleAnimationComplete} />
                    </div>
                </div>

                <div className='absolute'>
                    <div id='Flagship' ref={flagshipRef} className='relative h-[calc(100vh-135px)] flex items-center opacity-0'>
                        <img src={FlagshipImg} alt='Image1' className='h-[calc(100vh-200px)]' />
                        <LetterAnimation text={Flagship} isAnimating={isAnimating} onAnimationComplete={handleAnimationComplete} />
                    </div>
                </div>

                <div className='absolute'>
                    <div id='Online' ref={onlineRef} className='relative h-[calc(100vh-135px)] flex items-center opacity-0'>
                        <img src={OnlineImg} alt='Image1' className='h-[calc(100vh-200px)]' />
                        <LetterAnimation text={Online} isAnimating={isAnimating} onAnimationComplete={handleAnimationComplete} />
                    </div>
                </div>

            </div>

            <div ref={informEventsRef}>
                pra
            </div>

            <Drawer direction="right" open={isOpen} onClose={toggleDrawer}>
                <div className='relative w-250px'>
                    <div className='w-250px absolute' ref={CultEventsRef} >
                        <p>Dance</p>
                        <p>Quiz</p>
                        <p>Arts</p>
                        <p>Film Making</p>
                        <p>Music</p>
                        <p>Drama</p>
                        <p>Life Style</p>
                        <p>Literature</p>
                    </div>

                    <div ref={informEventsRef} className='w-250px absolute opacity-0'>
                        <p>Informal-1</p>
                        <p>Informal-2</p>
                        <p>Informal-3</p>
                        <p>Informal-4</p>
                        <p>Informal-5</p>
                        <p>Informal-6</p>
                        <p>Informal-7</p>
                    </div>

                    <div ref={proEventsRef} className='w-250px absolute opacity-0'>
                        <p>Assem Sharma</p>
                        <p>Tracer x Swattrex</p>
                        <p>Salim - Sukaiman</p>
                    </div>

                    <div ref={flagshipEventsRef} className='w-250px absolute opacity-0'>
                        <p>Antarang</p>
                        <p>Nrotyansh</p>
                        <p>Aayam</p>
                        <p>Clash of Bands</p>
                    </div>

                    <div ref={onlineEventsRef} className='w-250px absolute opacity-0'>
                        <p>Mr. Miss Ignus</p>
                        <p>Dubsmash</p>
                    </div>
                </div>
            </Drawer>

            <div className='fixed top-3/4 left-3/5 w-100px h-100px flex justify-center items-center cursor-pointer'>
                <div onClick={toggleDrawer} className='Events-right-icon'>
                    <IoIosArrowRoundForward  />
                </div>
                <div className='arrow-circle'></div>
            </div>
            

        </div>

    </div>
  )
}

export default Events