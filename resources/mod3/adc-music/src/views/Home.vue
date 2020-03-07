<template>
  <div>
    <!-- UpperCamelCase sintax -->
    <AppBanner>
      <h1 class="title">ADCMusic</h1>
      <h2 class="subtitle">Canciones que estan Vue-nísimas!!</h2>
    </AppBanner>
    <Search />
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import("@/components/Search"),
    AppBanner: () => import("@/layout/AppBanner")
  }
};
</script>
