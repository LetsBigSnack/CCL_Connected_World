/**
* Vue component for TransactionElement
* @component
*/
<template>
  <li v-if="transactionType" class="bg-component_primary_bcc rounded-lg p-4 shadow-lg shadow-black mb-2">
    <div class="flex justify-between items-center">
      <p class="text-2xl text-primary_bcc">{{transactionDescription}}</p>
      <p v-if="transactionAmount > 0" class="text-lg text-primary_bcc">+{{ transactionAmount }} BP</p>
      <p v-else class="text-lg text-primary_bcc">{{ transactionAmount }} BP</p>
    </div>
    <p class="text-lg">{{ transactionDate }}</p>
    <p class="text-sm text-secondary_bcc ">Transaction ID: {{transactionID}}</p>
  </li>
</template>
<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['transactionID','transactionAmount','transactionDescription','transactionDate']);
const transactionType = ref();

onMounted(()=>{
  let amount = props.transactionAmount;
  if(parseInt(amount) > 0){
    transactionType.value = "Payment received";
  }else{
    transactionType.value = "Payment send";
  }
})

</script>