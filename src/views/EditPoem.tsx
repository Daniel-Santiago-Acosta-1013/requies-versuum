import { useParams, useNavigate } from 'react-router-dom';
import { getPoems, editPoem } from '../utils/poemManager';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';
import { useState } from 'react';
import '../styles/EditPoem.scss';

function EditPoem() {
    const { id } = useParams();
    const navigate = useNavigate();

    const poemToEdit = getPoems().find(poem => poem.id === id);

    const [title, setTitle] = useState(poemToEdit?.title || '');
    const [content, setContent] = useState(poemToEdit?.content || '');

    if (!id || !poemToEdit) {
        console.error("No se proporcionó un ID válido o el poema no existe.");
        return null;
    }

    const handleUpdate = () => {
        const updatedPoem = {
            id,
            title,
            content
        };
        editPoem(updatedPoem);
        navigate('/');
    };

    return (
        <div className="edit-container">
            <h1>Editar Poema</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
            <RichTextEditor content={content} setContent={setContent} />
            <button onClick={handleUpdate}>Actualizar</button>
        </div>
    );
}

export default EditPoem;
