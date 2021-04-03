<script>
  import PageHeading from '$lib/components/PageHeading.svelte'
  import Link from '$lib/components/Link.svelte'
</script>

<section class="container flex-grow text-xl">
  <PageHeading>About</PageHeading>

  <div class="space-y-2">
    <p>
      This is an unofficial community project, to learn more about
      <Link
        href="https://svelte.dev"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="github"
      >
        SvelteKit
      </Link>.
    </p>

    <p>
      I’ve been a fan of <strong class="font-normal">MinnMax</strong> ever since
      Ben announced he’s doing it 😄 Checkout <Link
        href="https://www.patreon.com/minnmax"
        target="_blank"
        rel="noopener noreferrer"
      >
        the Patreon
      </Link>!
    </p>

    <p>
      Illustrations courtsey of <Link
        href="https://undraw.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        unDraw
      </Link>
    </p>
  </div>
</section>
