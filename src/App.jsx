import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Satelite from './components/Satelite/Satelite.jsx'
import Textblock from './components/Textblock/Textblock.jsx'

const companies = [
  { name: 'Cosine', made: 'High energy optics', description: 'The cosine team is an international team of about 65 people, mostly physicists but also astronomers, chemists and aerospace engineers.' },
  { name: 'Spherical', made: 'Power systems', description: 'At SPHERICAL, we believe in pushing the boundaries of innovation. Our team develops advanced technologies that empower aerospace companies.' },
  { name: 'NLR', made: 'Computer systems + Testing', description: 'NLR is al meer dan 100 jaar een ambitieuze toegepast onderzoeksinstelling, gedreven om te blijven vernieuwen ten behoeve van de luchtvaart.' },
  { name: 'Dawn', made: 'Propulsion system', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'Airbus', made: 'Solar panels', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'Technolution', made: 'Computer systems', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'Airborne', made: 'Sandwich panels', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'ISISpace', made: 'Satellite systems', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'Starion', made: 'System engineering', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'VDL ETG', made: 'System integration', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
  { name: 'Celestia', made: 'Test equipment', description: 'Dawn Aerospace is building a scalable, sustainable space transportation network with the frequency and reliability of aviation.' },
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
      />
      <Satelite />
    </div>
  </>
)

}
export default App