<script lang="ts">
  import type {TopTen} from '$lib/repositories/topTens/Repo'
  import Card from './Card.svelte'

  export let topTens: TopTen[]
</script>

<ul>
  {#each topTens as topTen}
    <Card {topTen} />
  {/each}
</ul>
