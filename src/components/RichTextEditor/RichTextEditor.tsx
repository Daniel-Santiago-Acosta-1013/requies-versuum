import ReactQuill from 'react-quill';
import { RichTextEditorProps } from '../../models/Poem'
import 'react-quill/dist/quill.snow.css'; 
import './RichTextEditor.scss';

function RichTextEditor({ content, setContent }: RichTextEditorProps) {
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']                                            
    ],
  };

  return (
    <div className='richTextEditor-container'>
      <ReactQuill value={content} onChange={setContent} modules={modules} />
    </div>
  );
}

export default RichTextEditor;
