import { Link } from 'react-router-dom';
import { deletePoem } from '../../utils/poemManager';
import { PoemItemProps } from '../../models/Poem';
import './PoemItem.scss';

function PoemItem({ poem }: PoemItemProps) {
  const handleDelete = () => {
    deletePoem(poem.id);
    window.location.reload();
  };

  return (
    <div>
      <h2>{poem.title}</h2>
      <p>{poem.content.slice(0, 100)}...</p>
      <Link to={`/edit/${poem.id}`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default PoemItem;
