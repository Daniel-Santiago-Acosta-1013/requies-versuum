export interface Poem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  obra: string;  // Changed from category
  tags: string[];
  author: string;
}