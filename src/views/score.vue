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
          <v-btn color="blue lighten-1" dark Reset Validation @click="fnShowClass()">
            แสดงข้อมูล 
          </v-btn>
        </v-col>
      </v-row>
    </v-flex>    
    <v-layout row justify-center align-right>
        <!-- ในส่วนของปุ่มเเก้ไขและบันทึก -->
        
        <v-flex xs12 md12 lg11 xl12 >
        
        <v-btn @click="fnUpdateScore()" color="success" style="float: right">
          <v-icon left > mdi-clipboard-check </v-icon>
          บันทึกข้อมูล
        </v-btn>
        
        <v-btn @click="editModeHw(itemScore)" tile color="yellow" style="float: right">
          <v-icon left> mdi-pencil </v-icon>
          เเก้ไขชี้วัดและคะแนนเต็ม
        </v-btn>
        
        <v-btn @click="editModeP(items)" tile color="orange" style="float: right">
          <v-icon left> mdi-pencil </v-icon>
          เเก้ไขคะแนนนักเรียน
        </v-btn>
        
      </v-flex>
      
      <br>
      <br>
      <br>
    </v-layout>
    <!-- ในส่วนของ table  -->
    <div id="d6">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th rowspan="3" align="center">ที่</th>
            <th rowspan="3" align="center">รหัสนักเรียน</th>
            <th rowspan="3" align="center">ชื่อ-นามสกุล</th>
            <th nowrap="" rowspan="3" align="center">
              หน่วย<br />
              การเรียน
            </th>

            <th nowrap="" colspan="5" align="center" class="text-center">
              เช็คชื่อเวลาเรียน
            </th>

            <th
              :colspan="colspan"
              rowspan="2"
              align="center"
              class="text-center"
            >
              ตัวชี้วัด/คะแนนเต็ม
                <v-icon @click="fn_addCh()" color="success" right>
                    mdi-plus
                </v-icon>
             
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
          <tr>
              <!-- --------ในส่วนของตัวขี้วัดและคะแนนตัวชี้วัด-------- -->
              
            <td v-for="(item, y) in itemScore" :key="y" >
                <v-if v-if="editting === itemScore">
                    (<input type="text" size="10px" v-model="item.title" />
                    )/
                </v-if>
                <v-else v-else>
                    ({{item.title}}) &nbsp;/
                    
                </v-else>
                <v-if v-if="editting === itemScore">
                    (<input type="text" size="4px" v-model="item.score" />
                    )
                </v-if>
                <v-else v-else>
                    (
                    {{item.score}}
                    )
                </v-else>
              <v-icon @click="fn_removeCh(item)" color="error" right>
                mdi-delete
              </v-icon>
            </td>
          </tr>
        </thead>
        <tbody>
            <!-- ในส่วนของข้อมูลนักเรียนทั้งหมด -->
          <tr v-for="(item, i) in items" :key="i">
            <!-- ลำดับ -->
            <td nowrap="" align="center">{{ i + 1 }}</td>
            <!-- รหัส -->
            <td nowrap="" align="center">{{ item.id_std }}</td>
            <!-- ชื่อ -->
            <td nowrap="">{{ item.name }}<br /></td>
            <!-- หน่วยการเรียน -->
            <td align="center">
                <v-if v-if="editting === items">
                    <input type="text" size="4px" v-model="item.credit" />
                </v-if>            
                <v-else v-else>
                    {{item.credit}}
                </v-else>
            </td>
            <!-- เต็ม -->
            <td align="center">
                <v-if v-if="editting === items">
                    <input type="text" size="4px" v-model="item.full" />
                </v-if>
                <v-else v-else>
                    {{item.full}}
                </v-else>
            </td>
            <!-- ที่ได้ -->
            <td align="center">
                <v-if v-if="editting === items">
                    <input type="text" size="4px" v-model="item.have" />
                </v-if>
                <v-else v-else>
                    {{item.have}}
                </v-else>
            </td>
            <!-- ขาด -->
            <td align="center">
                <v-if v-if="editting === items">
                    <input type="text" size="4px" v-model="item.miss" />
                </v-if>
                <v-else v-else>
                    {{item.miss}}
                </v-else>
            </td>
            <!-- ป่วย -->
            <td align="center">
                <v-if v-if="editting === items">
                    <input type="text" size="4px" v-model="item.sick" />
                </v-if>
                <v-else v-else>
                    {{item.sick}}
                </v-else>
            </td>
            <!-- กิจ -->
            <td align="center">
                <v-if v-if="editting === items">
                    <input type="text" size="4px" v-model="item.affiar" />
                </v-if>
                <v-else v-else>
                    {{item.affiar}}
                </v-else>
            </td>
            <!-- ในส่วนของการเพิ่มคะเเนน -->
            <td
              v-for="(Sc, i) in item.indicators"
              :key="i"
              align="center"
              style="padding: 0px"
            >
              <v-if v-if="editting === items">
                  <input type="text" size="8px" v-model="Sc.get" style="width: 100%" />
              </v-if>
              <v-else v-else>
                {{Sc.get}}
              </v-else>
            </td>
            <td align="center">{{fullScore}}</td>
            <td align="center">{{item.have_score}}</td>
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
     editting: null,
     selectedItem: 1,
        room: ["ม.3/1", "ม.3/2", "ม.3/3", "ม.3/4"],
        room_select: "",
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
    editModeHw(itemScore) {
        this.editting = itemScore;
    },
    editModeP(items){
        this.editting = items;
    },
    fn_addCh() {
      for (var i = 0; i < this.items.length; i++) {
        var get = { get: 0 };
        this.items[i].indicators.push(get);
      }
      var item = { title: "ตัวชีวัด", score: 0 };
      this.itemScore.push(item);
    },
    fn_removeCh(item) {
      let index = this.itemScore.indexOf(item);
      this.itemScore.splice(index, 1);

      for (var i = 0; i < this.items.length; i++) {
        this.items[i].indicators.splice(index, 1);
      }
    },
    fnShowClass() {
      var payload = {
        course_id: "ท31101",
        room: this.room_select,
      };
      const vm = this;
      this.axios
        .post("http://0.0.0.0:3000/score", payload)
        .then(function (response) {
            if(response.data.status == "OK") {
                vm.itemScore = response.data.item_score[0]
                vm.items = response.data.result
                
            }
        });
    },

    async fnUpdateScore() {
            var payload = {
                    item_score: this.itemScore,
                    items: this.items,
             };
             this.axios
                .post("http://0.0.0.0:3000/update_score", payload)
                .then(function (response) { 
                    if(response.data.status == "OK") {
                        alert(response.data.result)    
                    }
                });

        },
}}
</script>

<style scoped>
#d17{
    padding-right: 20px;
    padding-left: 20px;
}
#d16{
    padding-bottom: 0%;
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