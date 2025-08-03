import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-body'>
      <div>
        <img src="/images/logo.png" alt="Logo Avipedia" style={{ float: 'left' }} />
      </div>
      <div>
        <Link className="fcc-btn" to="/aves">Catálogo de aves</Link>
      </div>
    </div>
  );
}

export default Home;
