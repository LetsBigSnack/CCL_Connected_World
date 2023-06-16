<template>
  <h2 class="text-3xl mb-4 font-display text-primary_bcc">Friend Request</h2>
  <ul v-if="requests" class="w-full h-[200px] overflow-y-scroll no-scrollbar">
    <RequestElement v-for="request in requests" :userName="request.requestName" :userID="request.requestID" :userFriendID="request.userFriendID"></RequestElement>
  </ul>
</template>
<script setup>
const props = defineProps(['userID']);
import {onMounted, ref} from "vue";
import RequestElement from "./RequestElement.vue";

const requests = ref();


onMounted(() => {
  getRequests();
})


async function getRequests(){
  let test = await fetch(`http://127.0.0.1:3000/api/friends/${props.userID}/open`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    requests.value = data.data;
  }
}

</script>