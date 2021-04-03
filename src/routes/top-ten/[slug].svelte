<script context="module" lang="ts">
  import type {Load} from '@sveltejs/kit'

  export const load: Load = async ({page}) => {
    const {slug} = page.params

    return {
      props: {
        slug,
      },
    }
  }
</script>

<script lang="ts">
  import PageHeading from '$lib/components/PageHeading.svelte'

  export let slug: string
</script>

<section class="container px-2 flex-grow">
  <PageHeading>{slug}</PageHeading>
</section>
