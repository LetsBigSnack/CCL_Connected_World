<template>
  <div class="container mx-auto py-8">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
      <div class="col-span-1 md:col-span-2">
        <div class="bg-component_secondary_bcc rounded-lg p-8 h-full flex flex-col justify-between">
          <div>
            <img src="champion1.png" alt="Champion 1" class="w-full rounded-lg shadow-lg mb-8">
            <div>
              <h2 class="text-2xl font-bold mb-4">Champion 1</h2>
              <div class="mt-4">
                <h3 class="text-lg font-medium">Stats</h3>
                <ul class="mt-2 space-y-2">
                  <li>Health: 500</li>
                  <li>Attack Damage: 60</li>
                  <li>Armor: 30</li>
                  <li>Magic Resistance: 20</li>
                  <li>Movement Speed: 350</li>
                </ul>
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-medium">Role</h3>
                <p class="mt-2">Mage, Assassin</p>
              </div>
            </div>
          </div>
          <button class="btn-primary w-full">Buy Champion</button>
        </div>
      </div>
      <div class="col-span-4 md:col-span-4">
        <div class="bg-component_secondary_bcc rounded-lg p-8 h-full">
          <h3 class="text-lg font-medium mb-4">Description</h3>
          <p class="text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut odio ipsum. Curabitur eu dignissim elit. Sed tristique orci ut arcu ultrices, et hendrerit dolor malesuada. Nunc eu feugiat odio, ut ullamcorper tellus. Cras consequat, quam in efficitur dapibus, metus nulla eleifend est, vitae volutpat quam elit eu nisi. Duis convallis mi in metus consectetur varius. Curabitur interdum tincidunt mauris, non dictum nunc pulvinar at.
          </p>
          <div class="mt-6">
            <h3 class="text-lg font-medium mb-4">Abilities</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <img src="ability1.png" alt="Ability 1" class="w-full rounded-lg shadow-lg mb-4">
                <h4 class="text-md font-medium">Ability 1</h4>
                <p class="text-sm mt-2">Description of Ability 1</p>
              </div>
              <div>
                <img src="ability2.png" alt="Ability 2" class="w-full rounded-lg shadow-lg mb-4">
                <h4 class="text-md font-medium">Ability 2</h4>
                <p class="text-sm mt-2">Description of Ability 2</p>
              </div>
              <div>
                <img src="ability3.png" alt="Ability 3" class="w-full rounded-lg shadow-lg mb-4">
                <h4 class="text-md font-medium">Ability 3</h4>
                <p class="text-sm mt-2">Description of Ability 3</p>
              </div>
              <div>
                <img src="ability4.png" alt="Ability 4" class="w-full rounded-lg shadow-lg mb-4">
                <h4 class="text-md font-medium">Ability 4</h4>
                <p class="text-sm mt-2">Description of Ability 4</p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium mb-4">Tips</h3>
            <ul class="list-disc pl-6">
              <li>Tip 1: Lorem ipsum dolor sit amet</li>
              <li>Tip 2: Consectetur adipiscing elit</li>
              <li>Tip 3: Mauris ut odio ipsum</li>
              <li>Tip 4: Curabitur eu dignissim elit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>