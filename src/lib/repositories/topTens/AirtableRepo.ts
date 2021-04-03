import type Record from 'airtable/lib/record'
import type Table from 'airtable/lib/table'

import {airtableBase} from '../airtableBase'
import type {TopTen, TopTensRepo, Image} from './Repo'

type AirtableAttachment = {
  id: string
  url: string
  thumbnails: {
    small: Image
    large: Image
    full: Image
  }
}

const mapRecordToTopTen = (record: Record): TopTen => ({
  slug: record.get('Slug'),
  name: record.get('Name'),
  description: record.get('Description'),
  heroImage: (record.get('Hero Image') as AirtableAttachment[])[0].thumbnails
    .large,
})

export class AirtableRepo implements TopTensRepo {
  #table: Table

  constructor(base = airtableBase) {
    this.#table = base('Top Tens')
  }

  latest = async () =>
    new Promise<TopTen[]>((resolve, reject) => {
      this.#table
        .select({
          view: 'Latest',
          fields: ['Slug', 'Name', 'Description', 'Hero Image'],
        })
        .firstPage(function (err, records) {
          if (err) return reject(err)

          return resolve(records.map(mapRecordToTopTen))
        })
    })
}

export const topTensRepo = new AirtableRepo()
