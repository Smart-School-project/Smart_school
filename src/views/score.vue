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
      <br />
      <v-row>
        <v-col>
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
        <v-col>
          <v-btn color="success" dark Reset Validation @click="fnShow">
            แสดงข้อมูล
          </v-btn>
        </v-col>
      </v-row>
    </v-flex>
    <v-layout row justify-center align-right>
      <v-flex xs12 md12 lg11 xl12>
      <v-btn tile color="success" style="float: right" >
        <v-icon left> mdi-pencil </v-icon>
        บันทึก
      </v-btn>
      </v-flex>
    </v-layout>
    <br>
    <!-- ในส่วนของ table  -->
    <div></div>
    <div id="d10">
      <!-- <template>
                  <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
                      <template v-slot:top>
                      <v-toolbar flat>
                          <v-toolbar-title>My CRUD</v-toolbar-title>
                           <v-divider class="mx-4" inset vertical></v-divider> -->
      <!--<v-spacer></v-spacer>
                          <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                  New Item
                                </v-btn>
                            </template>
                              <v-card>
                                  <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                  </v-card-title>
                                  <v-card-text>
                                    <v-container> -->
      <!-- หัวข้อ table -->
      <!-- <v-row>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                                          </v-col>
                                        </v-row>
                                    </v-container>
                                  </v-card-text>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                      <v-btn color="blue darken-1" text @click="close">
                                          Cancel
                                      </v-btn>
                                      <v-btn color="blue darken-1" text @click="save">
                                          Save
                                      </v-btn>
                                  </v-card-actions>
                              </v-card>
                          </v-dialog>
                          <v-dialog v-model="dialogDelete" max-width="500px"> -->
      <!-- ต้วของถังขยะ -->
      <!-- </v-dialog>
                      </v-toolbar>
                        </template>
                          <template v-slot:item.actions="{ item }"> -->
      <!-- ในส่วนของการเเก้ไขในเเต่ละอัน -->
      <!-- <v-icon small class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon> -->
      <!-- ในส่วนของการลบ -->
      <!--<v-icon
                                small
                                @click="deleteItem(item)"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                      <template v-slot:no-data>
                      <v-btn
                          color="primary"
                          @click="initialize"
                      >
                          Reset
                      </v-btn>
                      </template>
                  </v-data-table>
                  </template> -->
    </div>
    <div id="d6">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th rowspan="2" align="center" width="1%">ที่</th>
            <th rowspan="2" align="center" width="3%">รหัสนักเรียน</th>
            <th rowspan="2" align="center">ชื่อ-นามสกุล</th>
            <th nowrap="" rowspan="2" align="center" width="2%">
              หน่วย<br />
              การเรียน
            </th>
            <th nowrap="" colspan="5" align="center" class="text-center">
              เช็คชื่อเวลาเรียน
            </th>
            <th rowspan="2" align="center" class="text-center">
              คะแนนรายมาตรฐาน/ตัวชี้วัด
            </th>
            <th nowrap="" colspan="2" align="center" class="text-center">
              รวมคะแนน
            </th>
          </tr>
          <tr>
            <th nowrap="" align="center" width="2%">เต็ม</th>
            <th nowrap="" align="center" width="2%">ที่ได้</th>
            <th nowrap="" align="center" width="2%">ขาด</th>
            <th nowrap="" align="center" width="2%">ป่วย</th>
            <th nowrap="" align="center" width="2%">กิจ</th>
            <th nowrap="" align="center" width="3%">เต็ม</th>
            <th nowrap="" align="center" width="3%">ที่ได้</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">&nbsp;</td>
            <td colspan="11" class="small2">สาระการเรียนรู้พื้นฐาน</td>
          </tr>
          <tr v-for="(item, i) in items" :key="i">
            <td nowrap="" align="center">{{ i + 1 }}</td>
            <td nowrap="" align="center">{{ item.id }}</td>
            <td nowrap="">{{ item.name }}<br /></td>
            <td align="center">3</td>
            <td align="center">0</td>
            <td align="center">0</td>
            <td align="center">0</td>
            <td align="center">0</td>
            <td align="center">0</td>
            <td align="left" style="padding: 0px">
              <table height="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      ตัวชี้วัด (เต็ม)
                    </td>

                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      ใบงานที่ 1(10)
                    </td>

                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      ใบงานที่ 2(10)
                    </td>

                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      ใบงานที่ 3(10)
                    </td>

                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      ใบงานที่ 4(10)
                    </td>
                  </tr>
                  <tr>
                    <td style="border-right: 1px #000 solid" class="small">
                      คะแนน
                    </td>
                    <!-- ช่องคะแนนที่ 1 -->
                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      <input type="text" size="12px" v-model="item.hw1"/>
                    </td>
                    <!-- ช่องคะแนนที่ 2 -->
                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      <input type="text" size="12px" v-model="item.hw2"/>
                    </td>
                    <!-- ช่องคะแนนที่ 3 -->
                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      <input type="text" size="12px" v-model="item.hw3"/>
                    </td>
                    <!-- ช่องคะแนนที่ 4 -->
                    <td
                      nowrap=""
                      align="left"
                      style="
                        border-right: 1px #000 solid;
                        border-bottom: 1px #000 solid;
                      "
                      class="small"
                    >
                      <input type="text" size="12px" v-model="item.hw4"/>
                    </td>

                  </tr>
                </tbody>
              </table>
            </td>
            <td align="center">100</td>
            <td align="center">{{item.hw1+item.hw2+item.hw3+item.hw4}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";
export default {
  data: () => ({
    selectedItem: 1,
    room: ["ม.3/1", "ม.3/2", "ม.3/3", "ม.3/4"],
    items: [
      { id: "6110107", name: "ซูลตอน แวกะจิ", hw1: 1, hw2: 7, hw3: 9, hw4: 10},
      { id: "6110362", name: "มุสปานี อาแด", hw1: 9, hw2: 10, hw3: 10, hw4: 7 },
      { id: "6110363", name: "มูฮัมหมัด แวเด็ง", hw1: 8, hw2: 9, hw3: 9, hw4: 7},
    ],
  }),

  components: {
    Toolbar,
  },
  Addchanel() {
    var chanel = document.createElement("tr");
    chanel.innerHTML =
      '<td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="12px"></td>';
  },
  // data: () => ({
  //   dialog: false,
  //   dialogDelete: false,
  //   headers: [
  //     { text: 'ลำดับ', value: 'calories' ,align: 'start'},
  //     { text: 'รหัส', value: 'name',},
  //     { text: 'วิชา', value: 'name',},
  //     { text: 'หน่วยกิจ', value: 'name',},
  //     { text: 'หน่วยกิจ', value: 'name',},
  //     { text: 'Calories', value: 'calories' },
  //     { text: 'Fat (g)', value: 'fat' },
  //     { text: 'Carbs (g)', value: 'carbs' },
  //     { text: 'Protein (g)', value: 'protein' },
  //     { text: '', value: 'protein' },
  //     { text: 'Actions', value: 'actions', sortable: false },
  //   ],
  //   desserts: [],
  //   editedIndex: -1,
  //   editedItem: {
  //     name: '',
  //     calories: 0,
  //     fat: 0,
  //     carbs: 0,
  //     protein: 0,
  //   },
  //   defaultItem: {
  //     name: '',
  //     calories: 0,
  //     fat: 0,
  //     carbs: 0,
  //     protein: 0,
  //   },
  // }),

  // computed: {
  //   formTitle () {
  //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //   },
  // },

  // watch: {
  //   dialog (val) {
  //     val || this.close()
  //   },
  //   dialogDelete (val) {
  //     val || this.closeDelete()
  //   },
  // },

  // created () {
  //   this.initialize()
  // },

  // methods: {
  //   initialize () {
  //     this.desserts = [
  //       {
  //         name: 'Frozen Yogurt',
  //         calories: 159,
  //         fat: 6.0,
  //         carbs: 24,
  //         protein: 4.0,
  //       },
  //       {
  //         name: 'Ice cream sandwich',
  //         calories: 237,
  //         fat: 9.0,
  //         carbs: 37,
  //         protein: 4.3,
  //       },
  //       {
  //         name: 'Eclair',
  //         calories: 262,
  //         fat: 16.0,
  //         carbs: 23,
  //         protein: 6.0,
  //       },
  //       {
  //         name: 'Cupcake',
  //         calories: 305,
  //         fat: 3.7,
  //         carbs: 67,
  //         protein: 4.3,
  //       },
  //       {
  //         name: 'Gingerbread',
  //         calories: 356,
  //         fat: 16.0,
  //         carbs: 49,
  //         protein: 3.9,
  //       },
  //       {
  //         name: 'Jelly bean',
  //         calories: 375,
  //         fat: 0.0,
  //         carbs: 94,
  //         protein: 0.0,
  //       },
  //       {
  //         name: 'Lollipop',
  //         calories: 392,
  //         fat: 0.2,
  //         carbs: 98,
  //         protein: 0,
  //       },
  //       {
  //         name: 'Honeycomb',
  //         calories: 408,
  //         fat: 3.2,
  //         carbs: 87,
  //         protein: 6.5,
  //       },
  //       {
  //         name: 'Donut',
  //         calories: 452,
  //         fat: 25.0,
  //         carbs: 51,
  //         protein: 4.9,
  //       },
  //       {
  //         name: 'KitKat',
  //         calories: 518,
  //         fat: 26.0,
  //         carbs: 65,
  //         protein: 7,
  //       },
  //     ]
  //   },

  //   editItem (item) {
  //     this.editedIndex = this.desserts.indexOf(item)
  //     this.editedItem = Object.assign({}, item)
  //     this.dialog = true
  //   },

  //   deleteItem (item) {
  //     this.editedIndex = this.desserts.indexOf(item)
  //     this.editedItem = Object.assign({}, item)
  //     this.dialogDelete = true
  //   },

  //   deleteItemConfirm () {
  //     this.desserts.splice(this.editedIndex, 1)
  //     this.closeDelete()
  //   },

  //   close () {
  //     this.dialog = false
  //     this.$nextTick(() => {
  //       this.editedItem = Object.assign({}, this.defaultItem)
  //       this.editedIndex = -1
  //     })
  //   },

  //   closeDelete () {
  //     this.dialogDelete = false
  //     this.$nextTick(() => {
  //       this.editedItem = Object.assign({}, this.defaultItem)
  //       this.editedIndex = -1
  //     })
  //   },

  //   save () {
  //     if (this.editedIndex > -1) {
  //       Object.assign(this.desserts[this.editedIndex], this.editedItem)
  //     } else {
  //       this.desserts.push(this.editedItem)
  //     }
  //     this.close()
  //   },
  // },
};
</script>

<style scoped>
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