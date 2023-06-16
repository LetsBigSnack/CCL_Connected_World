<template>
  <div class="container mx-auto py-8">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/4">
        <div class="bg-background_bcc rounded-lg p-6 mb-8">
          <h2 class="text-2xl font-bold mb-4">Filter</h2>
          <div class="mb-4">
            <input type="text" placeholder="Search by name" class="input-primary w-full">
          </div>
          <div class="mb-4">
            <label for="category" class="text-lg font-medium mb-2">Category:</label>
            <select id="category" class="select-primary w-full">
              <option value="">All Categories</option>
              <option value="mage">Mage</option>
              <option value="assassin">Assassin</option>
              <option value="tank">Tank</option>
              <option value="marksman">Marksman</option>
              <option value="support">Support</option>
              <option value="fighter">Fighter</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="price" class="text-lg font-medium mb-2">Price:</label>
            <select id="price" class="select-primary w-full">
              <option value="">All Prices</option>
              <option value="0-1350">0 - 1350 RP</option>
              <option value="1350-3150">1350 - 3150 RP</option>
              <option value="3150-4800">3150 - 4800 RP</option>
              <option value="4800-6300">4800 - 6300 RP</option>
              <option value="6300">6300+ RP</option>
            </select>
          </div>
          <div>
            <button class="btn-primary w-full">Apply Filters</button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-3/4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div class="bg-component_primary_bcc rounded-lg p-6">
            <img src="champion1.png" alt="Champion 1" class="w-24 h-24 mx-auto mb-4">
            <h3 class="text-xl font-bold mb-2">Champion 1</h3>
            <p class="text-gray-500">Mage</p>
            <p class="text-sm mt-2">Price: 3150 RP</p>
            <a href="#" class="btn-primary mt-4 w-full">Show Details</a>
          </div>
          <div class="bg-component_primary_bcc rounded-lg p-6">
            <img src="champion2.png" alt="Champion 2" class="w-24 h-24 mx-auto mb-4">
            <h3 class="text-xl font-bold mb-2">Champion 2</h3>
            <p class="text-gray-500">Assassin</p>
            <p class="text-sm mt-2">Price: 4800 RP</p>
            <a href="#" class="btn-primary mt-4 w-full">Show Details</a>
          </div>
          <!-- Add more champion cards as needed -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>