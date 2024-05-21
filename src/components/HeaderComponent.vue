<template>
  <header class="bg-zinc-900 h-72">
    <div class="container px-5 mx-auto flex justify-between items-center py-4">
      <img
        class="h-16 w-116"
        src="../assets/icons/star-wars-yellow.svg"
        alt="logo starwars"
      />
      <div>
        <p class="text-white text-sm tracking-tight">project created by <span class="text-xl font-bold text-yellow-400">Renato Khael</span></p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
