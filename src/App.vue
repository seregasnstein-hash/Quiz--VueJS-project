<script setup>
import Header from "./components/Header.vue"
</script>

<template>
  <div class="app">
    <Header/>
    <main class="main_content">
      <RouterView/>
    </main>
  </div>

</template>

<style scoped></style>
