<template >
  <nav id="d1">
    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"
    />
    <v-app-bar color="rgba(3, 144, 164, 1)" @click="drawer = !drawer" thin dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="white" @click="fnLogout">
        <span>Sign out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="rgba(3, 144, 164, 1)">
      <v-card class="mx-auto" outlined flat>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase black--text">
              <span class="orange--text text">Smart </span>
              <span class=" text">School</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text"
              ><h3>{{ item.title }}</h3></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  methods: {
    fnLogout() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "หน้าหลัก", icon: "mdi-home", to: "/schedule" },
        { title: "ข้อมูลส่วนตัว", icon: "mdi-account", to: "/infomation" },
        { title: "คะแนน", icon: "mdi-clipboard-list-outline", to: "/score_std" },
        { title: "เกรด", icon: "mdi-clipboard-text-search-outline", to: "/grade_std" },
        { title: "ใบลา", icon: "mdi-email-newsletter", to: "/leave" },
        { title: "ปฏิทินกิจกรรม", icon: "mdi-calendar-month", to: "/calendar" },
        { title: "การบ้าน", icon: "mdi-book-open-variant", to: "/homework" },
      ],
      right: null,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Athiti&display=swap');
.text {
  font-size: 20px;
  font-weight:bold;
}
</style>