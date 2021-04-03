import type {TopTen, TopTensRepo} from './Repo'

export class InMemoryRepo implements TopTensRepo {
  #topTens: TopTen[]

  constructor(topTens: TopTen[]) {
    this.#topTens = topTens
  }

  latest = async () => this.#topTens
}

export const topTensRepo = new InMemoryRepo([])
