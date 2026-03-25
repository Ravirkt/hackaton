import './Navbar.css'

function Navbar({ onNavigate }) {
  return (
    <nav className='navigation-items'>
      <ul className='all-companies-container'>
        <li className='company-item'><a onClick={() => onNavigate(0)}>Cosine</a></li>
        <li className='company-item'><a onClick={() => onNavigate(1)}>Spherical</a></li>
        <li className='company-item'><a onClick={() => onNavigate(2)}>NLR</a></li>
        <li className='company-item'><a onClick={() => onNavigate(3)}>Airbus</a></li>
        <li className='company-item'><a onClick={() => onNavigate(4)}>Technolution</a></li>
        <li className='company-item'><a onClick={() => onNavigate(5)}>Dawn</a></li>
        <li className='company-item'><a onClick={() => onNavigate(6)}>Starion</a></li>
        <li className='company-item'><a onClick={() => onNavigate(7)}>VDL ETG</a></li>
        <li className='company-item'><a onClick={() => onNavigate(8)}>Airborne</a></li>
        <li className='company-item'><a onClick={() => onNavigate(9)}>ISISpace</a></li>
        <li className='company-item'><a onClick={() => onNavigate(10)}>Celestia</a></li>
      </ul>
    </nav>
  )
}

export default Navbar