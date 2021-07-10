<template>
  <div >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-app-bar color="rgba(3, 144, 164, 1)" dense dark> <!-- ตัว tab bar-->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

          <v-btn text color="white">
            <span>Sign out</span>
            <v-icon right>mdi-logout</v-icon>
          </v-btn>

    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data(){
    return{
        drawer: false
    }
    }
}
</script>
<style scoped>
</style>