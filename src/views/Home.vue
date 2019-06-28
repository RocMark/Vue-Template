<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <span v-for="(users) in users" :key="users.id">
      {{ users.name }}
    </span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      users: [],
    }
  },
  components: {
    HelloWorld,
  },
  created() {
    this.$store.dispatch('getUsers')
      .then((result) => { 
        this.users = result.data
        console.table(result.data) 
      })
      .catch((err) => { console.error(err) })
  },
}
</script>
