export interface ResultsEntity{
  results: ResultsEntity[];
  backdrop_path: string
  id: number
  original_language: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: boolean
  query: string
  popularity: number
}
export type Filmes = Array<ResultsEntity>
