import { FilterProps } from '../../models/Poem'
import './Filter.scss'

function Filter({ filter, setFilter }: FilterProps) {
  return (
    <div className='filter'>
      <input className="filter-input" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Buscar..." />
    </div>
  );
}

export default Filter;
