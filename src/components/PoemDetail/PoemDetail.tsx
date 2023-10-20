import { exportPoemAsTxt } from '../../utils/poemManager';
import { PoemItemProps } from '../../models/Poem'
import './PoemDetail.scss'

function PoemDetail({ poem }: PoemItemProps) {
  const handleExport = () => {
    exportPoemAsTxt(poem);
  };

  return (
    <div>
      <h1>{poem.title}</h1>
      <p>{poem.content}</p>
      <button onClick={handleExport}>Exportar como TXT</button>
    </div>
  );
}

export default PoemDetail