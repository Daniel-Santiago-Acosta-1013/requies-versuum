export type Poem = {
    id: string;
    title: string;
    content: string;
};

export interface PoemItemProps {
    poem: Poem;
}

export type FilterProps = {
    filter: string;
    setFilter: (filter: string) => void;
};