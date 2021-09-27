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
         <template v-slot:item.pdf="{ item }">
            <v-btn @click="fn_showPdf(item.pdf)" color="red" small dark v-if="item.type_leave != 'ลากิจ'">
              ใบรับรองแพทย์.pdf
            </v-btn>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <Pdf :show="showPdf" :pdf="pdfProp" @close="showPdf = false" />

  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";
import Pdf from "../components/dialog-leave-pdf.vue";
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
          value: "date",
        },
        {
          text: "รหัสนักเรียน",
          align: "center",
          sortable: false,
          value: "students_id",
        },
        {
          text: "ชื่อ-นามสกุล",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "ห้อง", align: "center", sortable: false, value: "room" },
        {
          text: "ประเภทการลา",
          align: "center",
          sortable: false,
          value: "type_leave",
        },
        { text: "สาเหตุ", align: "center", sortable: false, value: "cause" },
        { text: "เอกสาร", align: "center", sortable: false, value: "pdf" },
      ],
      data: [],
      showPdf: false,
      pdfProp: "",
    };
  },
  mounted() {
    this.fnLeave();
  },
  methods: {
    fn_showPdf(val) {
      this.pdfProp = val;
      this.showPdf = true;
    },

    fnLeave() {
      var payload = {
        subject: "ภาษาไทย",
        room: "ม.3",
      };
      const vm = this;
      this.axios
        .post("http://0.0.0.0:3000/leave", payload)
        .then(function (response) {
          if (response.data.status == "OK") {
            vm.data = response.data.result;
          }
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
