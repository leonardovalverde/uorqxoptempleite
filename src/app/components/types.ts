// types.ts

export interface MangaTitle {
  en?: string;
  jp?: string;
}

export interface MangaAttributes {
  title: MangaTitle;
}

export interface Manga {
  title: string;
  id: string;
  type: string;
  attributes: MangaAttributes;
}

export interface MangadexResponse {
  result: string;
  response: string;
  data: Manga[];
}
