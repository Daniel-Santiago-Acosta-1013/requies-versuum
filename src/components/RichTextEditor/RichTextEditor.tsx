import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import './RichTextEditor.scss';

type RichTextEditorProps = {
  content?: string;
  setContent?: (content: string) => void;
};

function RichTextEditor({ content, setContent }: RichTextEditorProps) {
  return (
    <div className='richTextEditor-container'>
      <ReactQuill value={content} onChange={setContent} />
    </div>
  );
}

export default RichTextEditor;
