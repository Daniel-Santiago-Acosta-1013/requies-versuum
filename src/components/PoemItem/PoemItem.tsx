import { Link } from 'react-router-dom';
import { deletePoem } from '../../utils/poemManager';
import { PoemItemProps } from '../../models/Poem';
import './PoemItem.scss';
import { useState } from 'react';

function PoemItem({ poem }: PoemItemProps) {
  const [showModal, setShowModal] = useState(false);

  const contentPreview = poem.content.slice(0, 100);

  const handleDelete = () => {
    deletePoem(poem.id);
    window.location.reload();
  };

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className='poemItem-container' onClick={handleOpenModal}>
      <h2>{poem.title}</h2>
      <div
        className="poem-content-preview"
        dangerouslySetInnerHTML={{ __html: contentPreview + "..." }}
      ></div>
      <Link to={`/edit/${poem.id}`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>

      {showModal && (
        <div className="modal visible" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleCloseModal}>&times;</span>
            <h2>{poem.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: poem.content }}
            ></div>
          </div>
        </div>
      )}

    </div>
  );
}

export default PoemItem;
