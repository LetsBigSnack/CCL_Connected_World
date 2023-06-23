/**
* Vue component for the Home page.
* @component
*/
<template>
  <div v-if="news">
    <CarouselView :news="news"></CarouselView>
  </div>


  <div class="max-w-6xl mx-auto px-4 py-8">
    <PatchView ></PatchView>
    <br>
    <div>
      <div class="border-t-2 border-component_secondary_bcc p-4 font-main_content">
        <h2 class="text-5xl mb-4 font-display text-primary_bcc">Game Description</h2>
        <p>BattleChamp is a simple 2D arena brawler you can play in your browser. It is thrilling and engaging*. You can participate in exciting multiplayer battles, taking control of one of many characters to battle the enemy. You can choose/purchase multiple characters in the in-game store, each with their own different stats and skills, letting you tailor your gameplay experience to your liking.</p>
        <br>
        <p>BattleChamp offers vast Community and Social features. You can make/add friends, monitor their progress, and even compete against them in fights. A global leaderboard lets you compare your performance to other players and see where you stand. </p>
      </div>
    </div>
    <br>
    <!-- Download Game Section -->
    <div class="mb-8">
      <div class="border-t-2 border-component_secondary_bcc  p-4 font-main_content flex flex-col">
        <h2 class="text-5xl mb-4 font-display text-primary_bcc">Play the Game</h2>
        <p class="mb-4">Prepare yourself for adrenaline-pumping battles and endless excitement in BattleChamp! Enter the arena, choose your champion, and prove your worth as the ultimate brawler. Are you ready to become the BattleChamp? Play now and find out!</p>
        <router-link to="/game" class="flex mr-3 text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc text-center justify-center font-display text-5xl">
          Play now
        </router-link>
      </div>
    </div>


  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import CarouselView from "../components/CarouselView.vue";
import PatchView from "../components/PatchView.vue";

const news = ref();
const website = import.meta.env.VITE_API_BASE_URL

onMounted(()=>{
  getNews();
});

/**
 * Retrieves the news data.
 * @returns {Promise<void>}
 */
async function getNews(){
  const API = website+"/api/news";
  const data = await fetch(API).then(res => res.json())
  if(data.success){
    news.value = data.data;
  }
}

</script>