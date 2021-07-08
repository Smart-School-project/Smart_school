<template>
  <div>
    <v-layout row>
      <v-flex
        md8
        xl8
        lg8
        v-if="$vuetify.breakpoint.mdAndUp"
        class="background-flex1"
      >
        <img class="Ellipse" src="../assets/login/Ellipse.png" />
        <img class="user-blue" src="../assets/login/user-blue.png" />
      </v-flex>
      <v-flex xs12 md4 xl4 lg4 class="background-flex2">
        <img class="book" src="../assets/login/1.png" />
        <img class="tab" src="../assets/login/2.png" />
        <h2 class="tab-text">Welcom back</h2>
        <v-layout row>
          <v-flex xs8 md8 xl8 lg8>
            <h3 class="text1">Smart School</h3>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.background-flex1 {
  background-color: #0390a4;
  width: 100vw;
  height: 100vh;
}
.Ellipse {
  position: absolute;
  width: 530px;
  height: 530px;
  left: 150px;
  top: 100px;
}
.user-blue {
  position: absolute;
  width: 520px;
  height: 450px;
  left: 140px;
  top: 220px;
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
  font-size: 2rem;
  margin-top: 10%;
  margin-left: 1rem;
}
</style>
