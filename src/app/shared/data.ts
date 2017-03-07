export interface Album {
  id: number,
  title: string,
  artist: string,
  category: string,
  year: string
}

export interface Track {
  title: string,
  number: number,
  duration: string,
  albumId: number
}
