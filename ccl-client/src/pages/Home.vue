<template>
  <div v-if="news">
    <CarouselView :news="news"></CarouselView>
  </div>


  <div class="max-w-6xl mx-auto px-4 py-8">
    <PatchView class="shadow-lg shadow-black"></PatchView>
    <!-- Game Description -->
    <br>
    <div>
      <div class="bg-component_secondary_bcc rounded-lg p-4 shadow-lg shadow-black font-main_content">
        <h2 class="text-5xl mb-4 font-display text-primary_bcc">Game Description</h2>
        <p>BattleChamp is a simple 2D arena brawler you can play in your browser. It is thrilling and engaging*. You can participate in exciting multiplayer battles, taking control of one of many characters to battle the enemy. You can choose/purchase multiple characters in the in-game store, each with their own different stats and skills, letting you tailor your gameplay experience to your liking.</p>
        <br>
        <p>BattleChamp offers vast Community and Social features. You can make/add friends, monitor their progress, and even compete against them in fights. A global leaderboard lets you compare your performance to other players and see where you stand. </p>
      </div>
    </div>
    <br>
    <!-- Download Game Section -->
    <div class="mb-8">
      <div class="bg-component_secondary_bcc rounded-lg p-4 font-main_content shadow-lg shadow-black flex flex-col">
        <h2 class="text-5xl mb-4 font-display text-primary_bcc">Play the Game</h2>
        <p class="mb-4">Prepare yourself for adrenaline-pumping battles and endless excitement in BattleChamp! Enter the arena, choose your champion, and prove your worth as the ultimate brawler. Are you ready to become the BattleChamp? Play now and find out!</p>
        <button class="flex mr-3 text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc text-center justify-center font-display text-5xl">
          Play now
        </button>
      </div>
    </div>


  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import CarouselView from "../components/CarouselView.vue";
import PatchView from "../components/PatchView.vue";

const news = ref();

onMounted(()=>{
  getNews();
});
async function getNews(){
  const API = "http://127.0.0.1:3000/api/news";
  const data = await fetch(API).then(res => res.json())
  if(data.success){
    news.value = data.data;
  }
}

</script>