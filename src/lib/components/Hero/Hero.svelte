<script lang="ts">
  import VR from './VR.svelte'
</script>

<section
  class="container py-4 px-2 md:px-0 md:grid md:grid-cols-7 md:gap-x-8 lg:gap-x-16"
>
  <div
    class="mb-8 md:mb-0 text-xl md:text-2xl md:col-span-3 text-center md:text-left md:self-center"
  >
    <div class="text-5xl lg:text-6xl mb-2 text-minnmax-prime font-normal">
      MinnMax
    </div>
    <p class="text-gray-400 mb-6">
      A patreon about games, friends and getting better!
    </p>
    <a
      href="/top-tens"
      class="text-2xl md:text-3xl px-4 py-2 bg-minnmax-prime text-white rounded shadow"
      >Explore Top Tens</a
    >
  </div>
  <aside class="md:col-span-4"><VR className="w-full" /></aside>
</section>
