<template>
  <div style="background-color: #eceff1; height: 100vh">
    <Toolbar />
    <v-layout row justify-center align-top>
      <!-- tab ใบลา -->
      <v-flex xs12 sm12 md12 lg11 xl11 class="mt-10 mb-10">
        <v-card width="350" color="blue-grey lighten-4" flat>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#3F91A4" size="50">mdi-email-newsletter</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: #3f91a4"
                ><h3>ใบลากิจ / ลาป่วย</h3></v-list-item-title
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
          text: "วัน/เดือน/ปี",
          align: "start",
          sortable: false,
          value: "day",
        },
        { text: "รหัสนักเรียน", value: "id" },
        { text: "ชื่อ-นามสกุล", value: "name" },
        { text: "ห้อง", value: "room" },
        { text: "ประเภทการลา", value: "category" },
        { text: "สาเหตุ", value: "cause" },
        { text: "เอกสาร", value: "doc" },
      ],
      data: [
        {
          day: "17/08/2564",
          id: "6110107",
          name: "ซูลตอน แวกะจิ",
          room: "ม.3/1",
          category: "ลาป่วย",
          cause: "มีไข้ ทำให้ไม่สามารถไปโรงเรียนได้",
          doc: "ใบรับรองแพทย์.pdf",
        },
        {
          day: "26/08/2564",
          id: "6110363",
          name: "มูฮัมหมัด แวเด็ง",
          room: "ม.3/2",
          category: "ลากิจ",
          cause: "ต้องไปทำบัตรประชาชน",
          doc: "",
        },
        {
          day: "09/09/2564",
          id: "6110628",
          name: "อับดุลเลาะ อาลี",
          room: "ม.3/1",
          category: "ลาป่วย",
          cause: "ตัวร้อน ไม่สบาย ต้องพักผ่อนอยู่บ้าน",
          doc: "ใบรับรองแพทย์.pdf",
        },
        {
          day: "13/09/2564",
          id: "6110362",
          name: "มุสปานี อาแด",
          room: "ม.3/4",
          category: "ลากิจ",
          cause: "เนื่องจากต้องไปงานแต่งงานแฟนเก่า",
          doc: "",
        },
        {
          day: "28/09/2564",
          id: "6110500",
          name: "ฮากีมีน พิศพรรณ",
          room: "ม.3/3",
          category: "ลากิจ",
          cause: "แม่ให้กรอกน้ำที่บ้าน",
          doc: "",
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
