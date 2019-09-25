<template>
  <div class="the-nav container-fluid p-0">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        {{ title }}
      </a>
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mr-auto">
          <li v-for="route in routeList" :key="route.id" class="nav-item active mr-2">
            <router-link class="nav-link btn btn-info" :to="route.to">{{ route.title }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'TheNav',
  data() {
    return {
      title: 'Vue-Template',
      routeList: [
        {
          id: 1,
          title: 'Home',
          to: { name: 'home', },
        },
        {
          id: 2,
          title: 'Example',
          to: { name: 'example', },
        },
        {
          id: 3,
          title: 'Test',
          to: { name: 'test', },
        }
      ],
    }
  },
}
</script>

<style scoped lang="scss">

</style>
