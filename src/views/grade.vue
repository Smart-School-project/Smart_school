<template >
  <div style="background-color: #eceff1; height: 100%">
    <Toolbar />
    <!-- ในส่วนของ bar ด้านบน -->
    <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
      <v-card width="350" color="blue-grey lighten-4" flat>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#3F91A4" size="50"
              >mdi-clipboard-text-search-outline</v-icon
            >
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #3f91a4"
              ><h3>เกรด</h3></v-list-item-title
            >
            <hr style="border-top: 1px solid #3f91a4" />
            <v-list-item-title style="color: #3f91a4"
              ><h4>เทอม 1 ปีการศึกษา 2564</h4></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <br />
      <v-row>
        <v-col id="d16">
          <v-select
            style="width: 10"
            v-model="room_select"
            :items="room"
            color="primary"
            label="ห้อง"
            background-color="white"
            outlined
          ></v-select>
        </v-col>
        <v-col id="d15">
          <v-btn color="blue lighten-1" dark Reset Validation @click="fnShow">
            แสดงข้อมูล
          </v-btn>
        </v-col>
      </v-row>
    </v-flex>
    <v-layout row justify-center align-right>
      <!-- ในส่วนของปุ่มเเก้ไขและบันทึก -->
      <v-flex xs12 md12 lg11 xl12>
        <v-btn tile color="success" style="float: right" @click="next()">
          <v-icon left> mdi-clipboard-check </v-icon>
          บันทึกข้อมูล
        </v-btn>
      </v-flex>
      <br />
      <br />
      <br />
    </v-layout>
    <div id="d2">
      <div id="d3" align="center" class="box-body table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="bg-gray-light">
            <tr>
              <td rowspan="2" align="center">ที่</td>
              <td rowspan="2" align="center">รหัส</td>
              <td rowspan="2" align="center">ชื่อ-นามสกุล</td>
              <td rowspan="2" align="center">
                หน่วย<br />
                การเรียน
              </td>
              <td colspan="2" align="center">ผลการเรียนปกติ</td>
              <td colspan="2" align="center">ผลการเรียนแก้</td>
              <td align="center">&nbsp;</td>
            </tr>
            <tr>
              <td align="center">
                คะแนน<br />
                ที่ได้
              </td>
              <td align="center">ผลการเรียน</td>
              <td align="center">
                คะแนน<br />
                ที่ได้
              </td>
              <td align="center">ผลการเรียน</td>
              <td align="center">หมายเหตุ</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <td align="center">{{ i + 1 }}</td>
              <td align="center">{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td align="center">{{ item.credit }}</td>
              <td align="center">{{ item.have_score }}</td>
              <td align="center">{{ item.grade }}</td>
              <td align="center">
                <input type="text" size="6px" v-model="item.edit_have_score" />
              </td>
              <td align="center">
                <input type="text" size="6px" v-model="item.edit_grade" />
              </td>
              <td align="center">
                <input type="text" size="6px" v-model="item.note" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <v-layout row justify-center align-top>
        <v-flex xs12 sm10 md6 lg4 align="center">
          <apexchart
            id="d5"
            align="center"
            type="bar"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  components: {
    Toolbar,
  },
  data: () => ({
    dialog: false,
    items: [
      {
        id: "6110107",
        name: "ซูลตอน แวกะจิ",
        credit: 3,
        have_score: 0,
        grade: 0,
        edit_have_score: "",
        edit_grade: "",
        note: "",
      },
      {
        id: "6110362",
        name: "มุสปานี อาแด",
        credit: 3,
        have_score: 0,
        grade: 0,
      },
      {
        id: "6110363",
        name: "มูฮัมหมัด แวเด็ง",
        credit: 3,
        have_score: 0,
        grade: 0,
      },
      {
        id: "6110500",
        name: "ฮากีมีน พิศพรรณ",
        credit: 3,
        have_score: 0,
        grade: 0,
      },
      {
        id: "6110495",
        name: "อาฟิฟ แวอาแซ",
        credit: 3,
        have_score: 0,
        grade: 0,
      },
    ],
    // สำหรับ char ที่เป็น line
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "ช่วงเกรดเฉลี่ยของนักเรียน",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["0", "1", "1.5", "2", "2.5", "3", "3.5", "4"],
      },
    },
    series: [
      {
        name: "จำนวน(คน)",
        data: [0, 1, 1, 5, 4, 4, 5, 3],
      },
    ],
  }),
  mounted() {},
  methods: {
    editModeP(items) {
      this.editting = items;
    },
    next() {
      alert("บันทึกข้อมูลสำเร็จ");
    },
    sum_credit() {
      let total = 0;
      for (let item in this.items) {
        total = total + this.items[item].credit;
      }
      return total;
    },
  },
};
</script>

<style scoped>
#d2 {
  background-color: rgb(255, 255, 255);
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  align-items: center;
  overflow-x: auto;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  padding-left: 7px;
  padding-right: 7px;
  align-items: center;
  width: auto;
}
#d4 {
  background-color: white;
}
</style>