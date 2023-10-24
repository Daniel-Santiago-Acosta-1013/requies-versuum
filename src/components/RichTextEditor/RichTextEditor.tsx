import ReactQuill from 'react-quill';
import { RichTextEditorProps } from '../../models/Poem'
import 'react-quill/dist/quill.snow.css'; // import styles
import './RichTextEditor.scss';

function RichTextEditor({ content, setContent }: RichTextEditorProps) {
  return (
    <div className='richTextEditor-container'>
      <ReactQuill value={content} onChange={setContent} />
    </div>
  );
}

export default RichTextEditor;
