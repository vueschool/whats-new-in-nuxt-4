<script setup lang="ts">
const show = ref(true);
</script>
<template>
  <div>
    <KeepAlive :include="['UserProfile']">
      <UserProfile v-if="show" />
    </KeepAlive>
    <button @click="show = !show">Show/Hide</button>
  </div>
</template>