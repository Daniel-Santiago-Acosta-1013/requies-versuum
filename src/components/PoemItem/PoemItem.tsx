import './PoemItem.scss'
import { deletePoem } from '../../utils/poemManager';

function PoemItem({ poem }) {
  const handleDelete = () => {
    deletePoem(poem.id);
    // Actualizar UI o redireccionar
  };

  return (
    <div>
      <h2>{poem.title}</h2>
      <p>{poem.content.slice(0, 100)}...</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default PoemItem;