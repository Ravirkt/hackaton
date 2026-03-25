import './Textblock.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Textblock({ name, description, made, link }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }
    )
  }, [name])

  return (
    <section className="textblock" ref={ref}>
      <h1 className='section-title'>NEBULA XPLORER</h1>
      <p className='company-text'>{description}</p>
      <p className='company-name'>{name}</p>
      <p className='company-made'>{made}</p>

      <div className='link-container'>
          <a className='website-link' href={link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>
            {name}
          </a>
      </div>

    </section>
  )
}

export default Textblock