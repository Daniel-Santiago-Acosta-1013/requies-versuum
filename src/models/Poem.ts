export type Poem = {
    id: string;
    title: string;
    content: string;
};

export type FilterProps = {
    filter: string;
    setFilter: (filter: string) => void;
};

export type RichTextEditorProps = {
    content?: string;
    setContent?: (content: string) => void;
};

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export interface PoemItemProps {
    poem: Poem;
}
