export interface tag {
  name: string,
  versions: []
}

export interface item {
  rendered_body: string,
  body: string,
  coediting: boolean,
  comments_count: number,
  created_at: string,
  group: any,
  id: string,
  likes_count: number,
  private: boolean
  reactions_count: number,
  tags: Array<tag>,
  title: string,
  updated_at: string,
  url: string,
  user: { [index: string]: any },
  page_views_count: any
}