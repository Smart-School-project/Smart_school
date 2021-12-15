<template >
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <!-- ในส่วนของ bar ด้านบน -->
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-clipboard-list-outline</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>คะเเนน</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>คะเนนระหว่างเรียน</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex>
        <!-- ในส่วนของ table grade  -->
        <div id="d2">
            <div id="d3" align="center" class="box-body table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="bg-gray-light">
                        <tr>
                            <td rowspan="2" align="center">ที่</td>
                            <td rowspan="2" align="center">รหัส</td>
                            <td rowspan="2" align="center">กลุ่มสาระ</td>
                            <td rowspan="2" align="center">หน่วย<br>
                            การเรียน</td>
                            <td colspan="2" align="center">ผลการเรียนปกติ</td>
                            <td colspan="2" align="center">ผลการเรียนแก้</td>
                            <td align="center">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">คะแนน<br>
                                ที่ได้
                            </td>
                            <td align="center">ผลการเรียน</td>
                            <td align="center">คะแนน<br>
                            ที่ได้</td>
                            <td align="center">ผลการเรียน</td>
                            <td align="center">หมายเหตุ</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray">
                            <td colspan="2">&nbsp;</td>
                            <td>สาระการเรียนรู้พื้นฐาน</td>
                            <td colspan="6">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">1</td>
                            <td align="center">ท31102</td>
                            <td>ภาษาไทย 2</td>
                            <td align="center">1.0</td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">2</td>
                            <td align="center">ค31102</td>
                            <td>คณิตศาสตร์ 2</td>
                            <td align="center">1.0</td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">3</td>
                            <td align="center">ว31111</td>
                            <td>โลกดาราศาสตร์และอวกาศ 2</td>
                            <td align="center">0.5</td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center">&nbsp;</td>
                        </tr>
                    </tbody>
                    <tfoot class="bg-green">
                        <tr>
                            <td colspan="9" align="center">รวม นก/นน 14.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผลการเรียนเฉลี่ย 0.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <!-- เริ่มของ Chart -->
        <div id="d4">
            <apexchart id="d5" align="center"  type="line" :options="chartOptions" :series="series"></apexchart>
            <apexchart id="d5" align="center"  type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>

import Toolbar from "../layout/index.vue";
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

export default {
    components: {
        Toolbar
    },
    data: function() {
      return{
        // สำหรับ char ที่เป็น line
        // chartOptions: {
        //   chart: {
        //   height: 350,
        //   type: 'line',
        //   zoom: {
        //     enabled: false
        //   }
        // },
        // dataLabels: {
        //   enabled: false
        // },
        // stroke: {
        //   curve: 'straight'
        // },
        // title: {
        //   text: 'Product Trends by Month',
        //   align: 'left'
        // },
        // grid: {
        //   row: {
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        // },
        // xaxis: {
        //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        // }
        // },
        // series: [{
        //     name: "Desktops",
        //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        // }],
        // <----------------------------------->
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
        }]
      } 
    },
    mounted() {
    },
};
</script>

<style scoped>
    #d2{
        background-color: rgb(255, 255, 255);
        padding-left: 1.5%;
        padding-right: 1.5%;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
        align-items: center;
        overflow-x: auto;
    }
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      text-align: center;
      padding-left: 7px;
      padding-right: 7px;
      align-items: center;
      width: auto;
    }
    #d3{}
    #d4{
        background-color: white;
        width: auto;
        height: auto;
    }
    #d5{
        width: auto;
    }
</style>

        
      