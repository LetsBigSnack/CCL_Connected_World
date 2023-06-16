<template>
  <div class="w-3/4 p-8 h-screen bg-component_secondary_bcc m-6 rounded-[10px]">
    <div class="flex items-center mb-4">
      <input v-model="userInput" @input="filterUsers" type="text" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0" placeholder="Search users...">
    </div>
    <h2 class="text-xl font-bold mb-4">User List</h2>
    <ul class="w-full h-[80%] overflow-y-scroll no-scrollbar" v-if="users">
      <UserElement v-for="(user,index) in filteredUsers" :username="user.userName"></UserElement>
    </ul>
  </div>
</template>
<script setup>
import UserElement from "./UserElement.vue";
import {onMounted, ref} from "vue";

const errors = ref();
const users = ref();
const filteredUsers = ref();
const userInput = ref("");


onMounted(() => {
  getUsers();
})

function filterUsers(){
  if(userInput.value){
    filteredUsers.value = users.value.filter(users => users.userName.includes(userInput.value));
  }else{
    filteredUsers.value = users.value;
  }

}

async function getUsers(){
  let test = await fetch('http://127.0.0.1:3000/api/users', {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    users.value = data.data;
    filteredUsers.value = users.value;
  }else{
    errors.value = data.error;
  }
}

</script>