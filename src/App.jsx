import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Satelite from './components/Satelite/Satelite.jsx'
import Textblock from './components/Textblock/Textblock.jsx'
import Footer from './components/Footer/Footer.jsx'

const companies = [
  { name: 'Cosine', made: 'High energy optics', description: 'cosine is a leading worldwide company in the development of space instrumentation, such as Silicon Pore Optics for astronomy and remote sensing solutions with onboard analytics for Earth Observation and planetary science.', link: 'https://www.cosine.eu/', },
  { name: 'Spherical', made: 'Power systems', description: 'At SPHERICAL, we believe in pushing the boundaries of innovation. Our team of experts is committed to developing advanced technologies that empower our clients to achieve new heights. Whether it’s through our state-of-the-art products or our unparalleled customer service, we strive to be the trusted partner that aerospace companies can rely on. ', link: 'https://www.spherical-systems.com/' },
  { name: 'NLR', made: 'Computer systems + Testing', description: 'NLR has been an ambitious applied research organisation for over 100 years, driven to make aerospace more sustainable, safer, efficient and effective through innovation. To that end, we offer specific, innovative solutions and technical expertise.', link: 'https://www.nlr.org/nl/' },
  { name: 'Dawn', made: 'Propulsion system', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network, with the frequency and reliability of aviation to seamlessly connect the Earth and space economies.​​​ We dont know what will be the breakthrough application, only that they will need to get to space, and maneuver around in it. ​​​', link: 'https://www.dawnaerospace.com/' },
  { name: 'Airbus', made: 'Solar panels', description: 'Airbus is the largest aeronautics and space company in Europe, providing products, services and solutions for the commercial aircraft, helicopter, defence and space sectors. Drawing on over half a century of aerospace engineering expertise, Airbus products are defined by innovation.', link: 'https://www.airbus.com/en' },
  { name: 'Technolution', made: 'Computer systems', description: 'Technolution is a resourceful company with a particular focus on research and development. Technolution continues to stand for enthusiasm and drive, and for reliable innovation. But above all, we stand for high-end solutions that really add value for their users.', link: 'https://www.technolution.com/nl/' },
  { name: 'Airborne', made: 'Sandwich panels', description: 'Ever since its founding in 1995, Airborne has showed it is able to create solutions and think beyond given restrictions of qualification rules and regulations. For instance, by developing industrialised manufacturing lines for thermoplastic composite pipes, used at 3000 meter depth.', link: 'https://www.airborne.com/' },
  { name: 'ISISpace', made: 'Satellite systems', description: 'ISISPACE offers customised solutions tailored to specific niches in the Small Satellite market. Our goal is to fully support our customers with a comprehensive, end-to-end managed space infrastructure.', link: 'https://www.isispace.nl/' },
  { name: 'Starion', made: 'System engineering', description: 'At Starion, our focus on space and system engineering positions us at the forefront of addressing the challenges of today and tomorrow. Every day, our teams of experts engage in world-leading projects, embodying our vision of ‘Shaping the future of what’s possible’.', link: 'https://www.stariongroup.eu/' },
  { name: 'VDL ETG', made: 'System integration', description: 'At VDL ETG, we are working every day to turn innovative ideas into reality: everything revolves around innovation and custom-built solutions. To achieve that, we aim to create long-term partnerships and only deliver products we are fully confident about.', link: 'https://www.vdlgroep.com/nl' },
  { name: 'Celestia', made: 'Test equipment', description: 'With over three decades of experience, Celestia STS (C-STS) is a trusted name in the European and international space industry. Since our founding in 1985, we have specialized in delivering ground-based solutions for satellite simulation, testing, communication, and data processing.', link: 'https://celestiaproject.space/' },
]

function App() {
  const [current, setCurrent] = useState(0)

  return (
    <>
      <Background />
      <Navbar onNavigate={setCurrent} />
      <div className='page'>
        <Textblock
          name={companies[current].name}
          made={companies[current].made}
          description={companies[current].description}
          link={companies[current].link}
        />
        <Satelite />
      </div>
      <Footer />
    </>
  )

}
export default App