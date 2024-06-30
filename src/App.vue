<script setup lang="ts">
// In this section, we use @vueuse/head. Check this for more detail
// https://github.com/vueuse/head
useHead({
  title: "Miniletras Blog",
  meta: [
    {
      name: "description",
      content: "Miniletras blog content",
    },
  ],
})
</script>
<template>
  <div class="min-h-100vh overflow-hidden block relative pb-30 mx-auto flex flex-col">
    <Navbar />
    <main class="mx-auto mt-4 w-full lg:max-w-screen-lg">
      <router-view :key="$route.path" />
      <ToTopBtn />
    </main>
    <Footer />
  </div>
</template>
<style lang="scss">
@use "~/styles/style.scss" as *;
</style>
