<template>
  <div class="container mx-auto py-8">
    <div class="bg-component_secondary_bcc text-content_text rounded-lg p-6">
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img src="user-avatar.png" alt="User Avatar" class="w-24 h-24 rounded-full border-2 border-component_secondary_bcc mb-4 md:mb-0">
        <div class="md:ml-4">
          <h1 class="text-3xl font-bold">John Doe</h1>
          <p class="text-content_text">Summoner Level 10</p>
        </div>
      </div>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Ranked Stats</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Ranked Wins</h3>
            <p class="text-3xl font-bold">48</p>
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Ranked Losses</h3>
            <p class="text-3xl font-bold">12</p>
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Ranked Points</h3>
            <p class="text-3xl font-bold">2150</p>
          </div>
          <div class="p-4 bg-component_primary_bcc rounded-lg">
            <h3 class="text-base font-medium">Win Rate</h3>
            <p class="text-3xl font-bold">80%</p>
          </div>
        </div>
      </div>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Champions</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="champion1.png" alt="Champion 1" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 1</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="champion2.png" alt="Champion 2" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 2</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="champion3.png" alt="Champion 3" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 3</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <img src="champion4.png" alt="Champion 4" class="w-16 h-16 mx-auto mb-2">
            <p class="text-center">Champion 4</p>
          </div>
        </div>
      </div>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Achievements</h2>
        <ul class="list-disc pl-6">
          <li>First Blood Master - Achieved 100 First Blood kills</li>
          <li>Triple Kill Streak - Achieved 10 Triple Kills</li>
          <li>Legendary Champion - Reached Level 20 with a champion</li>
          <!-- Add more achievements as needed -->
        </ul>
      </div>
      <div class="border-t border-component_secondary_bcc mt-8 mb-8">
        <h2 class="text-lg font-semibold mb-4">Recent Matches</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <h3 class="text-base font-medium">Match 1</h3>
            <p class="text-sm">Victory - 15/3/7</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <h3 class="text-base font-medium">Match 2</h3>
            <p class="text-sm">Defeat - 5/9/10</p>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-4">
            <h3 class="text-base font-medium">Match 3</h3>
            <p class="text-sm">Victory - 10/2/8</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
</script>