/**
* Vue component for the User Profile page.
* @component
*/
<template>
  <div v-if="user" class="w-full mx-auto mt-10 px-4 max-w-4xl">
    <div class="bg-background_bcc rounded-lg p-6">
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img v-if="user"  :src="user.picture?`https://cc221019-10110.node.fhstp.io/${ user.picture}`:'/assets/logo.svg'" :alt="`User ${user.name} Avatar Profile Picture`" class="w-32 h-32 rounded-full border-2 border-component_secondary_bcc mb-4 md:mb-0">
        <div class="md:ml-4">
          <h1 v-if="user" class="text-4xl">{{user.name}}</h1>
          <p  v-if="user" class="text-content_text">{{user.email}}</p>
        </div>
      </div>
      <div class="mt-8 mb-8">
        <h2 class="text-3xl mb-4 border-b-2 border-primary_bcc">Profile Image</h2>
        <div class="flex flex-col gap-2">
          <label class="block mb-2 text-xl font-medium" for="file_input">Upload file</label>
          <input class="block w-full text-md text-gray-300 border border-component_primary_bcc rounded-lg cursor-pointer bg-component_primary_bcc focus:outline-none" id="file_input" type="file" @change="handleFileChange" accept="image/*">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF</p>
          <button @click="updateProfilePicture" class="text-1xl mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
            Upload
          </button>
        </div>
      </div>
      <div class="mt-8 mb-8">
        <h2 class="text-3xl mb-4 border-b-2 border-primary_bcc">General Settings</h2>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-base font-medium text-content_text">Display Name</h3>
            <input v-model="newName" type="text" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0">
          </div>
          <div>
            <h3 class="text-base font-medium text-content_text">Email Address</h3>
            <input v-model="newEmail" type="email" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0">
          </div>
        </div>
      </div>
      <div class="mt-8 mb-8">
        <h2 class="text-3xl mb-4 border-b-2 border-primary_bcc">Account Settings</h2>
        <div class="flex flex-col gap-4">
          <div>
            <h3 class="text-base font-medium text-content_text">New Password</h3>
            <input v-model="newPassword"  type="password" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0">
          </div>
          <div>
            <h3 class="text-base font-medium text-content_text">Re-enter New Password</h3>
            <input  v-model="confNewPassword"  type="password" class="w-full rounded-md px-3 py-2 bg-component_primary_bcc border-0">
          </div>
        </div>
      </div>
      <div v-if="errors" >
        <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Error</span> {{ errors}}
          </div>
        </div>
      </div>
      <button @click="checkForm" class="w-full text-2xl mr-3 text-white text-md bg-secondary_bcc rounded-[0.5rem] p-2 md:mr-0 hover:bg-tertiary_bcc">
        Update
      </button>
      <div class="mt-8 mb-8 w-full flex flex-col gap-2">
        <h2 class="text-3xl mb-4 border-b-2 border-primary_bcc">Delete Account</h2>
        <p class="text-content_text"><span class="text-[#ff5555]">Warning</span>: This action is irreversible. Deleting your account will permanently remove all your data.</p>
        <button @click="showDialogBox = true" class="text-2xl mr-3 text-white text-md bg-[#ff5555] rounded-[0.5rem] p-2 md:mr-0 hover:bg-[#f83b3b]">
          Delete
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <NotLoggedIn></NotLoggedIn>
  </div>
  <div v-if="showDialogBox" class="fixed inset-0 flex items-center justify-center w-screen h-screen backdrop-blur">
    <div class="bg-component_primary_bcc rounded-lg shadow-lg p-4 border-4 border-component_secondary_bcc">
      <h2 class="text-xl font-bold mb-4">Are you sure?</h2>
      <p>Do you really want to delete your account?</p>
      <div class="flex gap-2">
        <button @click="deleteUserProfile" class="bg-[#ff5555] text-white px-4 py-2 rounded-md mt-4  hover:bg-[#f83b3b]">
          Yes
        </button>
        <button  @click="showDialogBox = false" class="bg-secondary_bcc text-white px-4 py-2 rounded-md mt-4  hover:bg-tertiary_bcc">
          No
        </button>
      </div>

    </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
import NotLoggedIn from "../components/NotLoggedIn.vue";

const route = useRoute()
const router = useRouter()
const errors = ref();
const user = ref();
const newName = ref();
const newEmail = ref();
const newPassword = ref();
const confNewPassword = ref();
const profileImageFile = ref(null);
const showDialogBox = ref(false);

onMounted(() => {
  login();
})


/**
 * Event handler for the file input change event.
 * @param {Event} event - The file input change event.
 */
function handleFileChange(event){
  profileImageFile.value = event.target.files[0];
  if(!profileImageFile.value.type.includes("image")){
    ;
    profileImageFile.value = null;
  }

}

/**
 * Performs the login request and sets the user data.
 */
async function login(){
  let test = await fetch('https://cc221019-10110.node.fhstp.io/api/login', {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    user.value = data.data;
    errors.value = undefined;
    newName.value = user.value.name;
    newEmail.value = user.value.email;
  }else{
    errors.value = data.error;
    user.value = undefined;
  }
}

/**
 * Checks the form inputs and performs the profile update.
 */
async function checkForm(){
  if(newPassword.value){
    if(newPassword.value !== confNewPassword.value){
      errors.value = "Both Passwords should be the same";
      return;
    }
  }
  await updateProfile();
}

/**
 * Checks the form inputs and performs the profile update.
 */
async function updateProfile(){
  let test = await fetch(`https://cc221019-10110.node.fhstp.io/api/users/${user.value.id}`, {
    method: 'PUT',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userName: newName.value,
      userEmail: newEmail.value,
      userPassword:newPassword.value
    })
  });
  console.log({
    userName: newName.value,
    userEmail: newEmail.value,
    userPassword:newPassword.value
  })
  let data = await test.json();

  if(data.success){
    errors.value = undefined;
    router.go();
  }else{
    errors.value = data.error;
  }
}

/**
 * Performs the profile picture update.
 */
async function updateProfilePicture(){

  if (!profileImageFile.value) {
    errors.value = "No Image selected!";
    return;
  }

  const formData = new FormData();
  formData.append('image', profileImageFile.value);

  let test = await fetch(`https://cc221019-10110.node.fhstp.io/api/users/${user.value.id}/picture`, {
    method: 'POST',
    redirect: 'follow',
    credentials: 'include',
    body: formData
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    await router.go();
  }else{
    ;
    errors.value = data.error;
  }
}

/**
 * Performs the user profile deletion.
 */
async function deleteUserProfile(){

  showDialogBox.value = false;
  let test = await fetch(`https://cc221019-10110.node.fhstp.io/api/users/${user.value.id}`, {
    method: 'DELETE',
    redirect: 'follow',
    credentials: 'include',
    body: {}
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    await logout();
  }else{
    errors.value = data.error;
  }
}

/**
 * Performs the user logout.
 */
async function logout(){
  let test = await fetch('https://cc221019-10110.node.fhstp.io/api/logout', {
    method: 'GET',
    redirect: 'follow',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
  });
  let data = await test.json();
  if(data.success){
    errors.value = undefined;
    user.value = undefined;
    await router.replace({path: '/'});
  }else{
    errors.value = data.error;
  }
}



</script>
