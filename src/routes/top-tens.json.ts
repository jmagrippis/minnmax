import type {RequestHandler} from '@sveltejs/kit'

import {topTensRepo} from '$lib/repositories/topTens/AirtableRepo'

export const get: RequestHandler = async () => {
  const topTens = await topTensRepo.latest()

  return {
    body: topTens,
  }
}
