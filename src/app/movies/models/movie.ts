export interface Movie {
  id: number;
  title:string;
  episode_id:number;
  opening_crawl:string;
  director:string;
  producer:string;
  realease_date:string;
  characters:[];
  planets:[];
  starships:[];
  vehicles:[];
  species:[];
  created: string;
  edited: string;
  url:string
}

export interface MoviesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Movie[];
}
