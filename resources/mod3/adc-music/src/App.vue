<template>
  <div id="app">
    <app-navbar />
    
    <!-- carga vistas dinamicamente basado en la ruta -->
    <router-view></router-view>

    <!-- kebab sintax -->
    <app-footer />
  </div>
</template>

<script>
import AppBanner from "@/layout/AppBanner";
import AppNavbar from "@/layout/AppNavbar";
import AppFooter from "@/layout/AppFooter";

export default {
  name: "app",
  components: {
    AppBanner,
    AppNavbar,
    AppFooter
  }
};
</script>
