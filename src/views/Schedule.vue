<template>
    <div style="background-color: #ECEFF1;height: 100vh;">
    <Toolbar />
    <v-layout row justify-center align-top>
      <!-- tab ตารางสอน -->
      <v-flex xs12 sm12 md4 lg4 xl4 class="mt-10 mb-10" v-if="$vuetify.breakpoint.mdAndUp" >
        <v-card width="350" color="blue-grey lighten-4" flat @click="selectTab = 'teacher'"> 
        <v-list-item>
          <v-list-item-icon>
              <v-icon color="#3F91A4" size="50">mdi-calendar-month-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #3F91A4"><h3>ตารางสอน</h3></v-list-item-title>
            <hr style="border-top: 1px solid #3F91A4">
            <v-list-item-title style="color: #3F91A4"><h4>เทอม 1 ปีการศึกษา 2564</h4></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-card>
      </v-flex>

      <!-- tab ตารางเรียน -->
      <v-flex xs12 sm12 md7 lg7 xl7 class="mt-10 mb-10" v-if="$vuetify.breakpoint.mdAndUp">
        <v-card width="350" color="blue-grey lighten-4" flat @click="selectTab = 'student'"> 
        <v-list-item>
          <v-list-item-icon>
              <v-icon color="#3F91A4" size="50">mdi-calendar-month-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #3F91A4"><h3>ตารางเรียนห้องที่ปรึกษา</h3></v-list-item-title>
            <hr style="border-top: 1px solid #3F91A4">
            <v-list-item-title style="color: #3F91A4"><h4>เทอม 1 ปีการศึกษา 2564</h4></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-card>
      </v-flex>

      <v-flex xs10 class="mt-10 mb-10" v-else>
        <v-select
          v-model="selectTab"
          :items="objectTab"
          item-text="text"
          item-value="value"
          menu-props="auto"
          label="Select"
          hide-details
          outlined
          prepend-icon="mdi-calendar-month"
        ></v-select>
        </v-flex>



      <!-- ตารางสอน -->
      <v-flex xs11 sm11 md11 lg11 xl11 v-if="selectTab == 'teacher'">
       <SCteacher />
      </v-flex>

      <!-- ตารางเรียน -->
      <v-flex xs11 sm11 md11 lg11 xl11 v-if="selectTab == 'student'">
       <SCstudent />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Toolbar from "../layout/index.vue";
import SCstudent from "../components/schedule-student.vue";
import SCteacher from "../components/schedule-teacher.vue";
export default {
  components: {
    Toolbar,
    SCstudent,
    SCteacher,
  },
  data() {
    return {
      selectTab: 'teacher',
      objectTab: [
         {text: "ตารางสอน", value: "teacher"},
         {text: "ตารางเรียนห้องที่ปรึกษา", value: "student"}
        ],
    };
  },
  methods: {
    fnEdit() {
      alert('ddddd')
    }
  }
};
</script>

<style scoped>
.chip {
  width: 70px;
  height: 100px;
  text-align: left !important;
}
.chip p {
  font-size: 2px;
}

</style>