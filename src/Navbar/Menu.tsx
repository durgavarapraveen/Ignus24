import './Menu.css'
import MenuIcon from '../assets/MenuIcon.png'
import CrossIcon from '../assets/CrossIcon.png'
import {useState} from 'react'

function Menu() {

   const [isHovered, setIsHovered] = useState(false)

   const handleMouseEnter = () => {
    setIsHovered(true)
    console.log('Hover')
   }

   const handleMouseLeave = () => {
    setIsHovered(false)
    console.log('Hoverd out')
   }

  return (
    <div className='py-5 px-10 flex flex-col z-999'>
        <div className='relative w-full h-10 w-200px flex justify-end'>
            <img className='icon absolute cursor-pointer opacity-100 hover:opacity-0 transition-opacity duration-1000 ease-ease-in-out'  alt='Menu' 
                src={MenuIcon}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <img className='icon absolute cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-ease-in-out  '  alt='Menu' 
                src={CrossIcon}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
        
        <div 
            className={`w-150px pt-5 transition-all duration-1000 ${
                isHovered
                  ? 'opacity-100 translate-y-0 pointerEvents-auto'
                  : 'opacity-0 pointerEvents-none translate-y-[-10px] visibility-hidden'
              } z-999`
            }  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className='Menu-Icon'>EVENT SCHEDULE</p>
            <p className='Menu-Icon'>WORKSHOPS</p>
            <p className='Menu-Icon'>PRAKRITI</p>
            <p className='Menu-Icon'>IGMUN</p>
            <p className='Menu-Icon'>SPONSORS</p>
            <p className='Menu-Icon'>CA</p>
            <p className='Menu-Login'>Login/Signup</p>
        </div>
                
     
    </div>
  )
}

export default Menu