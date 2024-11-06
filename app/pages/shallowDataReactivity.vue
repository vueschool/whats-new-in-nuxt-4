<script setup lang="ts">
const { data } = useFetch("/api/user")
</script>
<template>
    <pre>{{ data }}</pre>
    <div v-if="data">
        <h1>Shallow Data Reactivity</h1>
        <p>Name: {{ data.name }}</p>
        <p>Email: {{ data.email }}</p>
        <button @click="data.name = 'Dustin Nickerson'">Change Name</button>
        <button @click="data.email = 'test@test.com'">Change Email</button>
    </div>
</template>