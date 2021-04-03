export type Image = {
  url: string
  width: number
  height: number
}

export type TopTen = {
  name: string
  description: string
  slug: string
  heroImage: Image
}

export interface TopTensRepo {
  latest(): Promise<TopTen[]>
}
