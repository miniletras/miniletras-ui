<template>
  <footer class="footer">
    <p class="text-center">&copy; {{ new Date().getFullYear() }} MiniLetras Blog</p>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  @apply absolute bottom-0 bg-elucidator-50 text-elucidator-700 dark:text-dark-repulser-400 w-full p-7 dark:bg-gray-700;
  height: 7rem;
}
</style>
