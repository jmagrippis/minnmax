<script>
  import GithubMark from './GithubMark.svelte'
  import Link from './Link.svelte'
</script>

<nav class="container py-4 px-2 flex items-center text-lg text-minnmax-prime">
  <a href="/" class="text-2xl font-normal mr-4 md:mr-8">MinnMax</a>
  <ul class="space-x-4 md:space-x-8 flex items-center flex-grow mr-4">
    <li>
      <Link href="/top-tens">Top Tens</Link>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
  </ul>
  <Link
    href="https://github.com/jmagrippis/minnmax"
    target="_blank"
    rel="noopener noreferrer"
    ariaLabel="github repo"
  >
    <GithubMark className="w-6" />
  </Link>
</nav>
