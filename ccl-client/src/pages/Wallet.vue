<template>
  <div class="container mx-auto mt-10 px-4 max-w-2xl">
    <div class="bg-component_secondary_bcc rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-4">Wallet</h2>

      <div class="mb-6">
        <h3 class="text-xl font-bold mb-2">Wallet Balance</h3>
        <div class="bg-component_primary_bcc rounded-lg p-4">
          <p class="text-2xl font-semibold text-content_text">500 BP</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold mb-4">Recent Transactions</h3>
        <ul class="space-y-4">
          <li class="bg-component_primary_bcc rounded-lg p-4">
            <div class="flex justify-between items-center">
              <p class="text-lg font-semibold text-content_text">Payment Received</p>
              <p class="text-lg text-content_text">+200 BP</p>
            </div>
            <p class="text-sm text-content_text">Transaction ID: 1234567890</p>
          </li>
          <li class="bg-component_primary_bcc rounded-lg p-4">
            <div class="flex justify-between items-center">
              <p class="text-lg font-semibold text-content_text">Payment Sent</p>
              <p class="text-lg text-content_text">-100 BP</p>
            </div>
            <p class="text-sm text-content_text">Transaction ID: 0987654321</p>
          </li>
          <!-- Add more recent transactions here -->
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold mb-4">Add Funds</h3>
        <div class="flex flex-wrap gap-4">
          <button class="bg-primary_bcc text-content_text px-4 py-2 rounded-md">Add 100 BP</button>
          <button class="bg-primary_bcc text-content_text px-4 py-2 rounded-md">Add 500 BP</button>
          <!-- Add more buttons for different amounts -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initTE } from "tw-elements";

onMounted(() => {
  initTE();
});
</script>
