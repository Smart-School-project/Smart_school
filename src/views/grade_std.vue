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

        <div id="d2">
            <div id="d3" align="center" class="box-body table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="bg-gray-light">
                        <tr>
                            <td rowspan="2" align="center">ที่</td>
                            <td rowspan="2" align="center">รหัสวิชา</td>
                            <td rowspan="2" align="center">ชื่อวิชา</td>
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
                    <!-- ในส่วนของตารางคะแนนนักเรียน -->
                    <tbody>
                        <tr class="bg-gray">
                            <td colspan="2">&nbsp;</td>
                            <td>สาระการเรียนรู้พื้นฐาน</td>
                            <td colspan="6">&nbsp;</td>
                        </tr>
                        <tr v-for="(item,i) in items" :key="i">
                            <!-- ลำดับ -->
                            <td align="center">{{i+1}}</td>
                            <!-- รหัส -->
                            <td align="center">{{item.course_id}}</td>
                            <!-- ชื่อ -->
                            <td>{{item.subject_name}}</td>
                            <!-- หน่วยกิจ -->
                            <td align="center">{{item.credit}}</td>
                            <!-- คะแนนที่ได้ -->
                            <td align="center"> {{item.have_score}} </td>
                            <!-- ผลการเรียน -->
                            <td align="center">{{item.grade}}</td>
                            <!-- ผลการเรียนเเก้ที่ได้ -->
                            <td align="center">{{ item.edit_have_score }}</td>
                            <!-- ผลการเรียนเเก้ -->
                            <td align="center">{{ item.edit_grade }}</td>
                            <!-- หมายเหตุ -->
                            <td align="center">{{ item.note }}</td>
                        </tr>
                    </tbody>
                    <tfoot class="bg-green">
                        <tr>
                            <td colspan="9" align="center">รวม นก/นน {{ sum_credit() }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผลการเรียนเฉลี่ย {{ Gpa() }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
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
    data: () => ({
      dialog: false,
      items: [],
    }),
    mounted() {
        this.fnShowClass();
    },
    methods: {
        Gpa(){
            let grade = 0;
            for(let item in this.items){
                grade = grade + ( (this.items[item].grade) * (this.items[item].credit) ) 
            }
            return (grade/this.sum_credit()).toFixed(2)
        },
        editModeP(items){
            this.editting = items;
        },
        sum_credit(){
            let total = 0;
            for(let item in this.items){
                total = total + (this.items[item].credit)
            }
            return total
        },
        fnShowClass() {
            var payload = {
                id_std : localStorage.std_id
            };
            const vm = this;
            this.axios
                .post("http://localhost:3000/grade", payload)
                .then(function (response) {
                    if(response.data.status == "OK") {
                    vm.items = response.data.result
                
                }
            });
        },
    }
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
    #d4{
        background-color: white;
    }
    
</style>