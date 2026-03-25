import './Textblock.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Textblock({ name, description, made, position }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }
    )
  }, [name])

  return (
    <div className="textblock" style={{ position: 'absolute', ...position }} ref={ref}>
      <h1 className='section-title'>NEBULA XPLORER</h1>
      <p className='company-text'>{description}</p>
      <p className='company-name'>{name}</p>
      <p className='company-made'>{made}</p>
    </div>
  )
}

export default Textblock