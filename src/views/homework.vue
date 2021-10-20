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
        <v-data-table :headers="headers" :items="data" class="elevation-1" hide-default-footer>
          <template v-slot:item.file="{ item }">
            <v-btn @click="fn_showPdf(item.file)" color="red" small dark >
              เอกสาร.pdf
            </v-btn>
          </template>
        </v-data-table>
        </v-flex>
    </v-layout>

    <Pdf 
        :show="showPdf"
        :pdf="pdfProp"
        @close="showPdf = false"
    />
  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";
import Pdf from "../components/dialog-homework-pdf.vue"
export default {
  components: {
    Toolbar,
    Pdf,
  },
  data() {
    return {
      data: [],
      room: '',
      headers: [
        { text: "วัน/เดือน/ปี ที่ส่ง", align: "start" , sortable: false , value: "date"},
        { text: "ชื่อวิชา", align: "center", sortable: false, value: "cause_name" },
        { text: "ห้อง", align: "center", sortable: false, value: "room" },
        { text: "รายละเอียด", align: "center", sortable: false, value: "detail" },
        { text: "เอกสาร", align: "center", sortable: false, value: "file" },
      ],
      showPdf : false,
      pdfProp : "",
    };
  },
  mounted() {
    // this.fnHomework();
    this.fnProfile();
  },
  methods: {
    fnHomework() {
      var payload = {
        room : this.room
      };
      console.log(payload)
      const vm = this
      this.axios
        .post("http://localhost:3000/homework", payload)
        .then(function (response) {
            console.log(response.data)
            if(response.data.status == "OK") {
                // vm.data = response.data.result[0]
                vm.data = response.data.result
            }
        });
    },
    fnProfile() {
      var payload = {
        account_id: localStorage.id,
      };
      const vm = this
      
      this.axios
        .post("http://localhost:3000/profile", payload)
        .then(function (response) {
            console.log(response.data)
            if(response.data.status == "OK") {
                var dataResult = response.data.result[0]
                vm.room = dataResult.room
                vm.fnHomework()
            }
        });
    },
    onPickFile() {
        this.$refs.fileInput.click();
    },
    fn_showPdf(val) {
      this.pdfProp = val;
      this.showPdf = true;
    },
  },
};
</script>

<style></style>
