<template>
  <v-app id="inspire">
    <v-navigation-drawer
      width="200"
      class="accent no-border"
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action >
            <v-icon color="info">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="info--text">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="accent" fixed app flat>
      <v-toolbar-side-icon style="color: #3e2723" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="info--text">Inmuebles</v-toolbar-title>
    </v-toolbar>
    <v-content class="secondary">
      <router-view></router-view>
    </v-content>
    <v-footer style="background: white" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
<style>
.primary {
  background-color: #f2efe8
}
.secondary {
  background-color: #dbe9d8
}
.navigation-drawer__border {
  width: 0px
}
</style>
