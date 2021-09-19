<template>
  <div style="background-color: #eceff1; height: 100vh">
    <Toolbar />
    <v-layout row justify-center align-top>
      <!-- tab ใบลา -->
      <v-flex xs12 sm12 md12 lg11 xl11 class="mt-10 mb-10 my-8 ma-7">
        <v-card width="350" color="blue-grey lighten-4" flat>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#3F91A4" size="50">mdi-email-newsletter</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: #3f91a4"
                ><h3>การบ้าน</h3></v-list-item-title
              >
              <hr style="border-top: 1px solid #3f91a4" />
              <v-list-item-title style="color: #3f91a4"
                ><h4>เทอม 1 ปีการศึกษา 2564</h4></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>

      
        
        <br />
        <v-data-table
          :headers="headers"
          :items="data"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:item.doc="{ item }">
            <!-- <v-list >
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-file-pdf</v-icon>
                  </v-list-item-icon>
                    <v-list-item-title>
                      {{item.doc}}
                    </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list> -->
            <!-- <div v-if="item.doc != ''">
              <v-icon color="red">mdi-file-pdf</v-icon>{{ item.doc }}
            </div> -->
            <v-btn tile v-if="item.doc != ''" text @click="fn_showPdf">
              <v-icon left color="red">mdi-file-pdf</v-icon>
              {{ item.doc }}
            </v-btn>
          </template>
        </v-data-table>
        </v-flex>
    </v-layout>

    <pdf 
        :show="showPdf"
        @close="showPdf = false"
    />
  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";
import Pdf from "../components/dialog-leave-pdf.vue"
export default {
  components: {
    Toolbar,
    Pdf,
  },
  data() {
    return {
      headers: [
        {
          text: "วัน/เดือน/ปี ที่ส่ง",
          align: "start",
          sortable: false,
          value: "day",
        },
        { text: "ชื่อวิชา", align: "center", sortable: false, value: "id" },
        { text: "ห้อง", align: "center", sortable: false, value: "room" },
        { text: "รายละเอียด", align: "center", sortable: false, value: "cause" },
        { text: "เอกสาร", align: "center", sortable: false, value: "doc" },
      ],
      data: [
        {
          day: "17/08/2564",
          id: "คนิตศาสตร์",
          name: "ซูลตอน แวกะจิ",
          room: "ม.3/1",
          cause: "มีไข้ ทำให้ไม่สามารถไปโรงเรียนได้",
          doc: "ใบงาน 2.pdf",
        },
        {
          day: "26/08/2564",
          id: "วิทยาศาสตร์",
          name: "มูฮัมหมัด แวเด็ง",
          room: "ม.3/2",
          cause: "ต้องไปทำบัตรประชาชน",
          doc: "ใบงาน 1.pdf",
        },
        {
          day: "09/09/2564",
          id: "ศิลปะ",
          name: "อับดุลเลาะ อาลี",
          room: "ม.3/1",
          category: "ลาป่วย",
          cause: "ตัวร้อน ไม่สบาย ต้องพักผ่อนอยู่บ้าน",
          doc: "ใบงาน 1.pdf",
        },
       
        
      ],
      showPdf : false,
    };
  },
  methods: {
      fn_showPdf(){
          this.showPdf = true;
      }
  }
};
</script>

<style lang="stylus" scoped></style>
