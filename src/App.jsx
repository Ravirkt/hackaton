import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Satelite from './components/Satelite/Satelite.jsx'
import Textblock from './components/Textblock/Textblock.jsx'

const companies = [
  { name: 'Cosine', made: 'High energy optics', description: 'The cosine team is an international team of about 65 people, mostly physicists but also astronomers, chemists and aerospace engineers.', textPosition: { top: '40%', left: '5%' }, satelitePosition: { top: '10%', right: '10%' } },
  { name: 'Spherical', made: 'Power systems', description: 'At SPHERICAL, we believe in pushing the boundaries of innovation. Our team develops advanced technologies that empower aerospace companies.', textPosition: { top: '10%', left: '10%' }, satelitePosition: { top: '30%', right: '15%' } },
  { name: 'NLR', made: 'Computer systems + Testing', description: 'NLR is al meer dan 100 jaar een ambitieuze toegepast onderzoeksinstelling, gedreven om te blijven vernieuwen ten behoeve van de luchtvaart.', textPosition: { top: '25%', left: '50%' }, satelitePosition: { top: '10%', right: '60%' } },
  { name: 'Dawn', made: 'Propulsion system', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '15%', left: '6%' }, satelitePosition: { top: '25%', right: '8%' } },
  { name: 'Airbus', made: 'Solar panels', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '35%', left: '62%' }, satelitePosition: { top: '10%', right: '70%' } },
  { name: 'Technolution', made: 'Computer systems', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '20%', left: '3%' }, satelitePosition: { top: '30%', right: '5%' } },
  { name: 'Airborne', made: 'Sandwich panels', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '40%', left: '7%' }, satelitePosition: { top: '5%', right: '15%' } },
  { name: 'ISISpace', made: 'Satellite systems', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '10%', left: '15%' }, satelitePosition: { top: '35%', right: '10%' } },
  { name: 'Starion', made: 'System engineering', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '28%', left: '4%' }, satelitePosition: { top: '18%', right: '18%' } },
  { name: 'VDL ETG', made: 'System integration', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '22%', left: '9%' }, satelitePosition: { top: '12%', right: '7%' } },
  { name: 'Celestia', made: 'Test equipment', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.', textPosition: { top: '32%', left: '11%' }, satelitePosition: { top: '22%', right: '22%' } },
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
        position={companies[current].textPosition}
      />
      <Satelite position={companies[current].satelitePosition} />
    </div>
  </>
)

}
export default App