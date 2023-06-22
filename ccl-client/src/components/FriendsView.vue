/**
* Vue component for FriendsView
* @component
*/
<template>
  <div>
    <h2 class="text-4xl h-full mb-4 font-display text-primary_bcc">Friend List</h2>

    <ul v-if="friends" class="w-full h-[400px] overflow-y-scroll no-scrollbar">
      <FriendsElement v-for="friend in friends" :userName="friend.friendName" :userID="friend.friendID" :userPicturePath="friend.friendPicturePath" class="shadow-lg shadow-black"></FriendsElement>
    </ul>
  </div>
</template>
<script setup>
import FriendsElement from "./FriendsElement.vue";
const props = defineProps(['userID']);
import {onMounted, ref} from "vue";

const friends = ref();


onMounted(() => {
  getFriends();
})


/**
 * Retrieves the friend data.
 * @returns {Promise<void>}
 */
async function getFriends(){
  let test = await fetch(`https://cc221019-10110.node.fhstp.io/api/friends/${props.userID}`, {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    friends.value = data.data;
  }
}

</script>