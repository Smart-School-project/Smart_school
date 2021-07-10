<template>
  <v-app>
    <v-layout row>
      <v-flex md8 xl8 lg8 v-if="$vuetify.breakpoint.mdAndUp" class="background-flex1"
      >
        <img class="Ellipse" src="../assets/login/Ellipse.png" />
        <img class="user-blue" src="../assets/login/user-blue.png" />
      </v-flex>
      <v-flex xs12 md4 xl4 lg4 class="background-flex2">
        <img class="book" src="../assets/login/1.png" />
        <img class="tab" src="../assets/login/2.png" />
        <h2 class="tab-text">Welcome back</h2>
        <v-layout row>
          <v-flex xs12 md12 xl12 lg12>
            <h2 class="text1">Smart</h2>
            <h2 class="text2">School</h2>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center align-center>
          <v-flex xs8 md8 xl8 lg8 class="input">
            <v-text-field
              label="Username"
              outlined
              prepend-inner-icon="mdi-account-circle"
            ></v-text-field>
            <v-text-field
              label="Password"
              outlined
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs8 md8 xl8 lg8 class="login">
            <v-btn color="cyan darken-3" class="white--text" @click="fnLogin"> Login </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    fnLogin() {
      this.$router.push("/index")
    }
  }
};
</script>

<style scoped>
.background-flex1 {
  background-color: #0390a4;
  width: 100vw;
  height: 100vh;
}
.Ellipse {
  width: 530px;
  height: 530px;
  margin-top: 100px;
  margin-left: -17px;
}
.user-blue {
  width: 520px;
  height: 450px;
  margin-top: -400px;
  margin-left: -17px;
}
.background-flex2 {
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
}
.book {
  width: 1rem;
  height: 100%;
  float: left;
}
.tab {
  width: 349px;
  height: 74px;
  float: left;
  margin-top: 2rem;
  margin-left: -17px;
  z-index: 1;
}
.tab-text {
  z-index: 2;
  position: absolute;
  margin-top: 3rem;
  margin-left: 3rem;
  font-size: 2rem;
  color: white;
}
.text1 {
  color: #f5a82a;
  font-size: 3rem;
  margin-top: 250px;
  margin-left: -500px;
}
.text2 {
  color: #030303;
  font-size: 3rem;
  margin-top: -72px;
  margin-left: -180px;
}
.input {
  margin-left: 5px;
  margin-top: 30px;
}
.login {
  margin-left: 80px;
  
}
</style>