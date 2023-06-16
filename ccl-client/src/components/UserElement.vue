<template>
  <li class="flex items-center justify-between pr-2 mb-4 cursor-pointer bg-component_primary_bcc hover:bg-primary_bcc hover:text-component_secondary_bcc p-2 rounded-lg">
    <div class="flex items-center">
      <img src="../assets/Medium.png" alt="User 1" class="w-16 h-16 rounded-full mr-6">
      <div>
        <h3 class="text-lg font-bold mb-1">{{ userName }}</h3>
      </div>
    </div>
    <button v-if="loggedInUser" @click="createRequest" class="bg-secondary_bcc hover:bg-tertiary_bcc text-white rounded-full w-10 h-10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>
  </li>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const props = defineProps(['userID', 'userName']);
const router = useRouter();
const loggedInUser = ref();

onMounted(() => {
  login();

})

async function login(){
  let test = await fetch('http://127.0.0.1:3000/api/login', {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    loggedInUser.value = data.data;
    console.log(loggedInUser.value);
    console.log(props.userID);
  }
}

async function createRequest(){
  let test = await fetch('http://127.0.0.1:3000/api/friends/add', {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userID_1: loggedInUser.value.id,
      userID_2: props.userID,
    })
  });
  let data = await test.json();
  console.log(data);
  if(data.success){
    await router.go();
  }
}

</script>