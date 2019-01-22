export interface Post {
  id: number,
  url: string,
  date: string,
  modified: string,
  title: string,
  lead: string,
  thumbnail: Thumbnail,
  thumbnail_square: Thumbnail,
  category: Array<Category>,
  tags: Array<Tag>
}

export interface Thumbnail {
  width: number,
  height: number,
  url: string
}

export interface Category {
  name: string,
  slug: string,
  id: number,
  count: number
}

export interface Tag {
  name: string,
  slug: string,
  id: number,
  count: number
}