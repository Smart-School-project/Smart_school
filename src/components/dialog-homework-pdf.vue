<template>
  <v-dialog v-model="shower" fullscreen style="background-color: #edeef0" >
    <v-card color="#525659">
      <v-toolbar color="#525659" dark flat height="50px" tile>
        <v-btn icon dark @click="fn_close()">
          <v-icon dark>{{ icons.mdiArrowLeft }}</v-icon>
        </v-btn>
        <v-toolbar-title>สร้างแบบฟอร์มจดหมายโอนสิทธิ์</v-toolbar-title>
        <!-- <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark icon @click="fn_print()">
            <v-icon dark>{{icons.mdiPrinter}}</v-icon>
          </v-btn>
          <v-btn dark icon @click="fn_download()">
            <v-icon dark >{{ icons.mdiDownload }}</v-icon>
          </v-btn>
        </v-toolbar-items> -->
      </v-toolbar>
      <br />
      <br />
      <v-card-text style="text-align: center;">
        <iframe
          :src="pdf+'#toolbar=0&navpanes=0&scrollbar=0'"
          width="840"
          height="900"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { mdiDownload, mdiArrowLeft, mdiPrinter } from "@mdi/js";
import printJS from 'print-js'
export default {
  props: ["show", "pdf"],
  data: function () {
    return {
      icons: {
        mdiDownload, 
        mdiArrowLeft,
        mdiPrinter
      },
    };
  },
  computed: {
    shower: {
      get() {
        return this.show;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    fn_close() {
      this.$emit("close");
    },

    fn_download() {
      var a = document.createElement("a");
      a.href = this.pdf; 
      a.download = "form.pdf"; 
      a.click();
    },

    fn_print() {
      printJS({printable: this.pdf, type: 'pdf', base64: true})
    }
  },
};
</script>
<style scoped>

</style>