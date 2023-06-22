/**
* Vue component for the main user dashboard.
* @component
*/
<template>
  <div class="flex font-main_content justify-center flex-col md:flex-row">

    <div v-if="loggedInUser" class="order-2 md:order-1 md:w-1/4 h-auto p-8 border-t-2 border-component_secondary_bcc m-6 font-main_content" style="align-self: start;">
        <FriendsView :userID="loggedInUser.id"></FriendsView>
      <br>
      <div>
        <RequestView :userID="loggedInUser.id"></RequestView>
      </div>
    </div>
    <UsersView class="order-1 md:order-2 border-component_secondary_bcc border-t-2"></UsersView>
  </div>
</template>
<script setup>
import FriendsView from "../components/FriendsView.vue";
import RequestView from "../components/RequestView.vue";
import UsersView from "../components/UsersView.vue";
import {onMounted, ref} from "vue";


/**
 * The currently logged-in user data.
 * @type {import("vue").Ref<Object>}
 */
const loggedInUser = ref();

/**
 * The user data.
 * @type {import("vue").Ref<Object>}
 */
const users = ref();

onMounted(() => {
  login();
})

/**
 * Performs the login operation.
 * @returns {Promise<void>}
 */
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