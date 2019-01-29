<template>
  <v-app id="inspire">
    <v-toolbar color="cyan" dark fixed app>
      <v-toolbar-title>BOOKS MANAGEMENT</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Main",
  components: {
  }
};
</script>

<style scoped>
</style>
