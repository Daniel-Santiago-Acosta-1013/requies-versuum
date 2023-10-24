import { useState, useEffect } from 'react';
import PoemItem from '../PoemItem/PoemItem';
import { getPoems } from '../../utils/poemManager';
import Filter from '../Filter/Filter';
import './PoemList.scss'

function PoemList() {
  const [poems, setPoems] = useState(getPoems());
  const [filter, setFilter] = useState('');

  const filteredPoems = poems.filter(poem => {
    return poem.title.toLowerCase().includes(filter.toLowerCase()) || poem.content.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    setPoems(getPoems());
  }, []);

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <div className='poemList-container'>
        {filteredPoems.map(poem => (
          <PoemItem key={poem.title} poem={poem} />
        ))}
      </div>
    </>
  );
}

export default PoemList;
