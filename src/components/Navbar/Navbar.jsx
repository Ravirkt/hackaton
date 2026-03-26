import './Navbar.css';

function Navbar({ onNavigate }) {
  return (
    <nav className='navigation-items'>
      <ul className='all-companies-container'>
        <li className='company-item'><button onClick={() => onNavigate(0)}>Cosine</button></li>
        <li className='company-item'><button onClick={() => onNavigate(1)}>Spherical</button></li>
        <li className='company-item'><button onClick={() => onNavigate(2)}>NLR</button></li>
        <li className='company-item'><button onClick={() => onNavigate(3)} >Dawn</button></li>
        <li className='company-item'><button onClick={() => onNavigate(4)}>Airbus</button></li>
        <li className='company-item'><button onClick={() => onNavigate(5)}>Technolution</button></li>
        <li className='company-item'><button onClick={() => onNavigate(6)}>Airborne</button></li>
        <li className='company-item'><button onClick={() => onNavigate(7)}>ISISpace</button></li>
        <li className='company-item'><button onClick={() => onNavigate(8)}>Starion</button></li>
        <li className='company-item'><button onClick={() => onNavigate(9)}>VDL</button></li>
        <li className='company-item'><button onClick={() => onNavigate(10)}>Celestia</button></li>
      </ul>
    </nav>
  )
}


export default Navbar;
