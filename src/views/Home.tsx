import PoemList from '../components/PoemList/PoemList';
import '../styles/Home.scss'

function Home() {
  return (
    <div className="home-container">
      <h1>Listado de Poemas</h1>
      <PoemList />
    </div>
  );
}

export default Home;
