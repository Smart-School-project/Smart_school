<template>
  <nav>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-app-bar color="rgba(3, 144, 164, 1)"  @click="drawer =!drawer" thin dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn text color="white">
          <span>Sign out</span>
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="rgba(3, 144, 164, 1)">
      <v-card height="auto" width="auto" >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase black--text">
              <span class="font-weight-light">Smart </span>
              <span class="orange--text">School</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-divider></v-divider>
            <v-list dense nav>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
      </v-card>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data(){
    return{
        drawer: true,
        items: [
          { title: 'home', icon: 'mdi-home' },
          { title: 'infomation', icon: 'mdi-image' },
          { title: 'score', icon: 'mdi-help-box' },
          { title: 'grade', icon: 'mdi-help-box' },
          { title: 'leave', icon: 'mdi-help-box' },
          { title: 'calendar', icon: 'mdi-help-box' },
          { title: 'homework', icon: 'mdi-help-box' },
        ],
        right: null,
    }
    }
}
</script>

<style scoped>
</style>