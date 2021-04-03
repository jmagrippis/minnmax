import {airtableClient, AirtableRecord, Table} from '../airtableClient'
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

const mapRecordToTopTen = (record: AirtableRecord): TopTen => ({
  slug: record.fields['Slug'],
  name: record.fields['Name'],
  description: record.fields['Description'],
  heroImage: (record.fields['Hero Image'] as AirtableAttachment[])[0].thumbnails
    .large,
})

export class AirtableRepo implements TopTensRepo {
  #client = airtableClient

  latest = async () =>
    this.#client
      .get<any[]>(Table.TopTens, {
        view: 'Latest',
        fields: ['Slug', 'Name', 'Description', 'Hero Image'],
      })
      .then((records) => records.map(mapRecordToTopTen))
}

export const topTensRepo = new AirtableRepo()
