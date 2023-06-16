<template>
  <div class="flex font-main_content justify-center">
    <div v-if="loggedInUser" class="w-1/4 h-auto p-8 bg-component_secondary_bcc m-6 rounded-[10px] font-main_content" style="align-self: start;">
        <FriendsView :userID="loggedInUser.id"></FriendsView>
      <br>
      <div>
        <RequestView :userID="loggedInUser.id"></RequestView>
      </div>
    </div>
    <UsersView></UsersView>
  </div>
</template>
<script setup>
import FriendsView from "../components/FriendsView.vue";
import RequestView from "../components/RequestView.vue";
import UsersView from "../components/UsersView.vue";
import {onMounted, ref} from "vue";

const loggedInUser = ref();
const users = ref();

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
  }
}

</script>