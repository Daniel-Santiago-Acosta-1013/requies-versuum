import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPoem } from '../utils/poemManager';
import { v4 as uuidv4 } from 'uuid';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';

function CreatePoem() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPoem = {
      id: uuidv4(),
      title,
      content
    };
    addPoem(newPoem);
    navigate('/');
  };

  return (
    <div>
      <h1>Crear Nuevo Poema</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
      <RichTextEditor content={content} setContent={setContent} />
      <button onClick={handleSubmit}>Guardar</button>
    </div>
  );
}

export default CreatePoem;