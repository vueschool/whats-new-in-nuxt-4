<script setup lang="ts">
const { data } = useFetch("/api/user")
onMounted(() => {
    console.log('Profile mounted')
})
</script>
<template>
    <pre>{{ data }}</pre>
</template>