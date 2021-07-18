<template>
    <div style="background-color: #ECEFF1;height: 100vh;">
    <Toolbar />
    <v-layout row  align-top>
      <!-- tab ตารางสอน -->
      <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item class="ma-2">
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-calendar-month-outline</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>ตารางเรียน</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>เทอม 1 ปีการศึกษา 2564</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
      </v-flex >
    
      <!-- ตารางสอน -->
      <v-flex xs11 sm11 md11 lg11 xl11 class="my-1 ma-10">
       <SCstudent />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Toolbar from "../layout/index.vue";
import SCstudent from "../components/schedule-student.vue";

export default {
  components: {
    Toolbar,
    SCstudent,
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