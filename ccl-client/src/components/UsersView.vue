/**
* Vue component for UserView
* @component
*/
<template>
  <div class="w-3/4 p-8 h-screen m-6">
    <h2 class="text-4xl mb-4 font-display text-primary_bcc">User List</h2>
    <div class="flex items-center mb-8">
      <input  tabindex="10"  v-model="userInput" @input="filterUsers" type="text" class="w-full text-3xl rounded-md px-3 py-2 bg-component_primary_bcc  font-navbar border-0 focus:border-primary_bcc focus:border-2" placeholder="Search users...">
    </div>
    <ul class="w-full h-[80%] overflow-y-scroll no-scrollbar" v-if="users">
      <UserElement v-for="(user,index) in filteredUsers" :userName="user.userName" :userID="user.userID" :userImagePath="user.userPicturePath" class="shadow-lg shadow-black"></UserElement>
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

/**
 * Filters the list of users based on the user input.
 */
function filterUsers(){
  if(userInput.value){
    filteredUsers.value = users.value.filter(users => users.userName.includes(userInput.value));
  }else{
    filteredUsers.value = users.value;
  }

}

/**
 * Retrieves the list of users from the API.
 */
async function getUsers(){
  let test = await fetch('https://cc221019-10110.node.fhstp.io/api/users', {
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