import './Satelite.css'
import Image from "../../assets/satelite.webp"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Satelite({ position }) { 
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: -20,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
  }, [])

  return (
    <figure ref={ref} style={{ position: 'absolute', ...position }} className="satellite-figure">
      <img src={Image} alt="satellite" height={200} width={200} />
    </figure>
  )
}

export default Satelite