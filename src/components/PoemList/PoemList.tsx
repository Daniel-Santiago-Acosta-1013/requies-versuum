import { useState } from 'react';
import PoemItem from '../PoemItem/PoemItem';
import { getPoems } from '../../utils/poemManager';

import './PoemList.scss'

function PoemList() {
  const [poems, setPoems] = useState(getPoems());
  console.table(setPoems)

  return (
    <>
      {poems.map(poem => (
        <PoemItem key={poem.title} poem={poem} />
      ))}
    
    </>
  );
}

export default PoemList;
