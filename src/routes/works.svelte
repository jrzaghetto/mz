<script>
  let title = "Works";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<p>{title}</p>

<style lang="postcss">
  p {
    @apply text-center my-0 mx-auto;
  }
</style>
