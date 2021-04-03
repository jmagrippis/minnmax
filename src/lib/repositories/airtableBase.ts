import Airtable from 'airtable/lib/airtable'

const BASE_ID = 'appOt2N3jJJvVnRlC'
const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY

const isValidKey = (key: string | boolean | undefined): key is string =>
  key && typeof key === 'string'

if (!isValidKey(apiKey)) {
  throw new Error(
    'Could not initialise Airtable base: environment variable not set'
  )
}

export const airtableBase = new Airtable({apiKey}).base(BASE_ID)
