<template>
  <LoaderComponent v-if="loading" />
  <div v-else class="mt-[-120px] p-4">
  <div class="flex justify-start items-center my-5 px-5">
  <p class="text-center font-semibold text-zinc-500">Qual filme você esta procurando?</p>
    <input
      v-model="searchTerm"
      @input="searchFilms"
      placeholder="Digite o nome do filme..."
      class="px-3 py-2 bg-white border-2 text-black font-bold mx-4 "
    />
  </div>
  
    <div class="grid lg:grid-cols-2">
      <div class="p-4" v-for="film in filteredFilms" :key="film.id">
        <div
          class="w-full mx-auto bg-white rounded-xl shadow-xl sm:flex space-x-6 "
        >
          <img
            class="object-cover w-full h-32 lg:rounded-l-xl lg:w-48 lg:h-52 "
            src="../assets/icons/cover.jpg"
            alt="Cover Film"
          />
          <div class="text-left py-5">
            <div class="">
              <p class="text-xl text-zinc-600 font-bold flex justify-start item-center">
                {{ film.title }}   <span
                  className="bg-gray-200 rounded-full px-4 py-1 mx-4 text-sm text-gray-600 font-bold"
                  >{{ film.episode_id }}</span
                >
             </p>
              <p className="font-semibold text-zinc-500 text-sm">Diretor: {{ film.director }}</p>
               <p className="font-semibold text-zinc-500 text-sm">Produtor: {{ film.producer }}</p>

              <p class="text-zinc-500 leading-5 tracking-tight mt-2 pr-10">
                {{ truncateText(film.opening_crawl, 120) }}
              </p>
             <div class="flex justify-start items-center mt-4">
             <p className="font-bold text-sm">Data de lançamento:  <span
                  className="bg-yellow-200 rounded-full px-4 py-1 mx-4 text-sm text-yellow-600 font-bold"
                  >{{ formatDateToBrazilian(film.release_date) }}</span
                > </p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import api from "../services/api.js";
import LoaderComponent from "./LoaderComponent.vue";

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const formatDateToBrazilian = (dateString) => dateString.split("-").reverse().join("/");

const films = ref([]);
const loading = ref(true);
const searchTerm = ref("");

const filteredFilms = computed(() => {
  return films.value.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const searchFilms = async () => {
  try {
    const response = await api.get("/films/");
    films.value = response.data.results;
  } catch (error) {
    console.error("Error fetching films:", error);
  } finally {
    loading.value = false;
  }
};

// Fetch films on component mount
onMounted(searchFilms);
</script>
