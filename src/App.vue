<template>
  <HeaderComponent msg="Welcome" />
  <main class="bg-[#EBEEF1] container mx-auto rounded-2xl xl:min-h-[768px] mb-16">
    <FilmList />
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FilmList from "./components/FilmList.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Star+Wars&display=swap");

.font-starwars {
  font-family: "Star Wars", sans-serif;
}
</style>
