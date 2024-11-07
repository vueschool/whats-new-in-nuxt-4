<script setup lang="ts">
const show = ref(true);
console.log(capitalizeFirstLetter('hello from the app'))
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://example.com/avatar'
}
</script>
<template>
  <div>
    <KeepAlive :include="['UserProfile']">
      <UserProfile v-if="show" />
    </KeepAlive>
    <button @click="show = !show">Show/Hide</button>
  </div>
</template>