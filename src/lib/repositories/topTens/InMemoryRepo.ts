import type {TopTensRepo} from './Repo'

export class InMemoryRepo implements TopTensRepo {
  latest = async () => []
}

export const topTensRepo = new InMemoryRepo()
