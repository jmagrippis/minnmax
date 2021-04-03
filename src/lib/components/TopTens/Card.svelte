<script lang="ts">
  import type {TopTen} from '$lib/repositories/topTens/Repo'

  export let topTen: TopTen
  $: link = `/top-ten/${topTen.slug}`
</script>

<li class="shadow rounded">
  <div class="flex flex-col lg:flex-row items-center space-y-6 lg:space-x-4">
    <a href={link}>
      <img
        src={topTen.heroImage.url}
        width={topTen.heroImage.width}
        height={topTen.heroImage.height}
        alt={`Top Ten ${topTen.name}!`}
        title={`Top Ten ${topTen.name}!`}
      />
    </a>
    <article class="max-w-prose text-xl py-2 px-4">
      <h2 class="text-2xl mb-4">
        <a class="block" href={link}>
          {topTen.name}
        </a>
      </h2>
      <p>{topTen.description}</p>
    </article>
    <a
      href={link}
      aria-label={`go read the top ten ${topTen.name}`}
      class="hidden 2xl:block text-2xl text-minnmax-prime flex-grow text-center"
    >
      >
    </a>
  </div>
</li>
