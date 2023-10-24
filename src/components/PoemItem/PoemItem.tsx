import { Link } from 'react-router-dom';
import { deletePoem } from '../../utils/poemManager';
import { PoemItemProps } from '../../models/Poem';
import './PoemItem.scss';

function PoemItem({ poem }: PoemItemProps) {

  const contentPreview = poem.content.slice(0, 100);

  const handleDelete = () => {
    deletePoem(poem.id);
    window.location.reload();
  };

  return (
    <div className='poemItem-container'>
      <h2>{poem.title}</h2>
      <div
        className="poem-content-preview"
        dangerouslySetInnerHTML={{ __html: contentPreview + "..." }}
      ></div>
      <Link to={`/edit/${poem.id}`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default PoemItem;
