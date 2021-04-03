import fetch from 'node-fetch'

const BASE_ID = 'appOt2N3jJJvVnRlC'
const endpoint = `https://api.airtable.com/v0/${BASE_ID}`
const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY

const isValidKey = (key: string | boolean | undefined): key is string =>
  key && typeof key === 'string'

if (!isValidKey(apiKey)) {
  throw new Error(
    'Could not initialise Airtable base: environment variable not set'
  )
}

const objectToSearchParams = (
  params: Record<string, string | string[]>
): string =>
  new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (typeof value === 'string') {
        acc.push([key, value])
      } else {
        acc.push(...value.map((v) => [`${key}[]`, v]))
      }
      return acc
    }, [])
  ).toString()

export enum Table {
  TopTens = 'Top Tens',
}

export interface AirtableRecord {
  id: string
  createdTime: string
  fields: Record<string, any>
}

export const airtableClient = {
  async get<QueryResult = object>(
    table: Table,
    query: Record<string, string | string[]>
  ): Promise<QueryResult> {
    try {
      const url = new URL(`${endpoint}/${table}`)
      const search = objectToSearchParams(query)
      url.search = search
      const response = await fetch(url.href, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      })
      if (!response || !response.ok) {
        throw new Error()
      }

      return response.json().then(({records}) => {
        return records
      })
    } catch (err) {
      throw new Error('Could not fetch data from Airtable')
    }
  },
}
