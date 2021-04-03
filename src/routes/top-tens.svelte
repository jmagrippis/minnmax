<script context="module" lang="ts">
  import type {Load} from '@sveltejs/kit'

  export const load: Load = async ({fetch}) => {
    const url = '/top-tens.json'
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

  export let topTens: unknown[]
</script>

<section class="container flex-grow">
  <PageHeading>Top Tens</PageHeading>
  <p>This is where we’ll be listing our Top Tens!</p>
  <pre>{JSON.stringify(topTens)}</pre>
</section>
