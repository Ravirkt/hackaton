import './Satelite.css'
import Image from "../../assets/satelite.webp"
import { useEffect, useRef, forwardRef } from 'react'
import gsap from 'gsap'

const Satelite = forwardRef(function Satelite(props, ref) {
  const innerRef = useRef(null)

  useEffect(() => {
    gsap.to(innerRef.current, {
      y: -20,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <figure ref={ref} className="satellite-figure">
      <div ref={innerRef}>
        <img src={Image} alt="satellite" height={200} width={200} loading='lazy' />
      </div>
    </figure>
  )
})

export default Satelite