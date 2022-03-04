<template id="d2">
  <div style="background-color: #eceff1; height: 100%">
    <Toolbar />
    <!-- ในส่วนของ bar ด้านบน -->

    <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
      <v-card width="350" color="blue-grey lighten-4" flat>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#3F91A4" size="50"
              >mdi-clipboard-list-outline</v-icon
            >
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #3f91a4"
              ><h3>คะเเนน</h3></v-list-item-title
            >
            <hr style="border-top: 1px solid #3f91a4" />
            <v-list-item-title style="color: #3f91a4"
              ><h4>คะเนนระหว่างเรียน</h4></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>

    <v-row>
        <v-col sm="3" id="d16">
          <v-select
            style="width: 5000"
            v-model="subject_select"
            :items="subject"
            color="primary"
            label="วิชา"
            background-color="white"
            outlined
          ></v-select>
        </v-col>
        <v-col id="d15">
          <v-btn  color="blue lighten-1" dark Reset Validation @click="fnShowClass()">
            แสดงข้อมูล
          </v-btn>
        </v-col>
      </v-row>
      
    <div id="d6">
      <table id="customers" class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th rowspan="3" align="center">ที่</th>
            <th rowspan="3" align="center">รหัสวิชา</th>
            <th rowspan="3" align="center">ชื่อวิชา</th>
            <th nowrap="" rowspan="3" align="center">
              หน่วย<br />
              การเรียน
            </th>

            <th nowrap="" colspan="5" align="center" class="text-center">
              เช็คชื่อเวลาเรียน
            </th>

            <th
              :colspan="itemScore.length"
              rowspan="2"
              align="center"
              class="text-center"
            >
              ตัวชี้วัด/คะแนนเต็ม
              
            </th>
            <th nowrap="" colspan="2" align="center" class="text-center">
              รวมคะแนน
            </th>
          </tr>
          <tr>
            <th rowspan="2" nowrap="" align="center" width="2%">เต็ม</th>
            <th rowspan="2" nowrap="" align="center" width="2%">ที่ได้</th>
            <th rowspan="2" nowrap="" align="center" width="2%">ขาด</th>
            <th rowspan="2" nowrap="" align="center" width="2%">ป่วย</th>
            <th rowspan="2" nowrap="" align="center" width="2%">กิจ</th>
            <th rowspan="2" nowrap="" align="center" width="2%">เต็ม</th>
            <th rowspan="2" nowrap="" align="center" width="2%">ที่ได้</th>
          </tr>
          <tr >
            <td id="h0" v-for="(item, y) in itemScore" :key="y" >
                {{ item.title }}
              / (
              {{ item.score }}
              )
            </td>
            
          </tr>
        </thead>
        <!-- ในส่วนของตารางคะแนนนักเรียน -->
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td nowrap="" align="center">{{ i+1 }}</td>
            <td nowrap="" align="center">{{ item.course_id }}</td>
            <td nowrap="">{{ item.subject_name }}<br /></td>
            <td align="center">{{ item.credit }}</td>
            <td align="center">{{ item.full }}</td>
            <td align="center">{{ item.have }}</td>
            <td align="center">{{ item.miss }}</td>
            <td align="center">{{ item.sick }}</td>
            <td align="center">{{ item.affiar }}</td>
            <td
              v-for="(Sc, i) in item.indicators"
              :key="i"
              align="center"
              style="padding: 0px"
            >
                {{Sc.get}}
            </td>
            
            <td align="center">{{ fullScore }}</td>
            <td align="center">{{ item.have_score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";
export default {
  data() {
    return {
      subject_select : "",
      selectedItem: 1,
      subject: ["ภาษาไทย", "อังกฤษ", "คณิตศาสตร์", "ศิลปะ" , "พลศึกษา"],
      items: [],
      itemScore: [],
      fullScore: 0,
    }
  },

  components: {
    Toolbar,
  },

  computed: {
    colspan: {
      get() {
        return this.itemScore.length;
      },
    },
  },
  watch: {
    items: {
        handler: function(newValue) {
            for(var i=0; i < newValue.length; i++) {
                var newScore = 0
                for(var y=0; y < (newValue[i].indicators).length; y++) {
                    newScore = newScore + parseInt(newValue[i].indicators[y].get)
                }
                newValue[i].have_score = newScore
            }
            console.log(newValue);
        },
        deep: true
    },
    itemScore: {
        handler: function(newValue) {
            this.fullScore = 0
            for(var i=0; i < newValue.length; i++) {
                this.fullScore = this.fullScore + parseInt(newValue[i].score)
            }
        },
        deep: true
    },
  },

  methods: {
      fnShowClass() {
        var payload = {
            subject_name : this.subject_select,
            id_std: localStorage.std_id
        };
        const vm = this;
        this.axios
          .post("http://localhost:3000/score", payload)
          .then(function (response) {
              if(response.data.status == "OK") {
                  vm.itemScore = response.data.item_score[0]
                  vm.items = response.data.result
              }
          });
      }
  },
}


</script>

<style scoped>
#h0 {
  background-color: #04adc4;
  color: white;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 0.8px solid #ddd;
  padding: 8px;
}


#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04adc4;
  color: white;
}
#d16{
    padding-bottom: 0%;
    padding-left: 30px;
}
 #d15{
    padding-bottom: 0%;
    padding-left: 0%;
    padding-right: 0%;
    padding-top: 20px;
}
#d5 {
  padding-left: 0%;
  padding-right: 0%;
}
#d6 {
  background-color: rgb(255, 255, 255);
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  overflow-x: auto;
}
#d7 {
  background-color: aqua;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  padding-left: 7px;
  padding-right: 7px;
}
#d1 {
  text-align: left;
}
#contain1 {
  width: 100%;
}
#img1 {
  align-items: center;
}
#avatar1 {
  margin-top: 15px;
  margin-bottom: 15px;
}
#col1 {
  padding-top: 0%;
  padding-bottom: 0%;
}
#d10 {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
}
</style>