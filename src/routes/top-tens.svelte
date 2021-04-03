<script context="module" lang="ts">
  import type {Load} from '@sveltejs/kit'

  const url = '/top-tens.json'

  export const load: Load = async ({fetch}) => {
    const res = await fetch(url)

    if (res.ok) {
      return {
        props: {
          topTens: await res.json(),
        },
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    }
  }
</script>

<script lang="ts">
  import PageHeading from '$lib/components/PageHeading.svelte'
  import TopTensList from '$lib/components/TopTens/TopTensList.svelte'
  import type {TopTen} from '$lib/repositories/topTens/Repo'

  export let topTens: TopTen[]
</script>

<section class="container px-2 flex-grow">
  <PageHeading>Top Tens</PageHeading>
  <TopTensList {topTens} />
</section>
