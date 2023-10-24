import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PoemList from '../components/PoemList/PoemList';
import { getPoems } from '../utils/poemManager'
import '../styles/Home.scss';

function Home() {
    const [hasPoems, setHasPoems] = useState(true);

    useEffect(() => {
        const poems = getPoems();
        if(poems.length === 0) {
            setHasPoems(false);
        }
    }, []);

    return (
        <div className="home-container">
            <h1>Listado de Poemas</h1>
            { hasPoems ? (
                <PoemList />
            ) : (
                <Link to="/create" className="create-poem-card">
                    <h2>Crear Nuevo Poema</h2>
                    <p>Haz click aquí para empezar</p>
                </Link>
            )}
        </div>
    );
}

export default Home;
