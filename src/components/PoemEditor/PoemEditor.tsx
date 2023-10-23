import RichTextEditor from '../RichTextEditor/RichTextEditor';
import './PoemEditor.scss'

function PoemEditor() {
  return (
    <div className='poem-editor-container'>
      <h1>Editor</h1>
      <RichTextEditor />
    </div>
  );
}

export default PoemEditor;