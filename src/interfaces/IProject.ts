export default interface Project {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    thumbnail: string;
    contentType: string; // You might want to use a union type here if there are specific valid values
  }