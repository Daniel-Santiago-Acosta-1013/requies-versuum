import { useState } from 'react';
import PoemItem from '../PoemItem/PoemItem';
import './PoemList.scss'

function PoemList() {
  const [poems, setPoems] = useState([
    { title: 'Poema 1', content: 'Contenido del poema 1' },
    { title: 'Poema 1', content: 'Contenido del poema 1' },
    { title: 'Poema 1', content: 'Contenido del poema 1' },
    { title: 'Poema 1', content: 'Contenido del poema 1' },
    { title: 'Poema 1', content: 'Contenido del poema 1' },
    // ...otros poemas
  ]);

  return (
    <>
      {poems.map(poem => (
        <PoemItem key={poem.title} poem={poem} />
      ))}
    
    </>
  );
}

export default PoemList;
