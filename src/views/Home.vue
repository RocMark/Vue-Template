<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="(users) in users" :key="users.id">
        {{ users }}
      </li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    this.$store.dispatch('getUsers')
      .then((result) => { console.table(result.data) })
      .catch((err) => { console.error(err) })
  },
}
</script>
