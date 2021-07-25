<template>
  <div>
    <editSC
    :edit="editSC"
        @close="editSC = false"
    />
    <v-layout row justify-right align-right>
      <v-flex xs12 md12 lg12 xl12>
      <v-btn tile color="warning" style="float: right" @click="fnEdit">
        <v-icon left> mdi-pencil </v-icon>
        แก้ไข
      </v-btn>
      </v-flex>
    </v-layout>
<br>
<br>
    <v-layout row justify-center align-top>
      <!-- ตาราง -->
      <v-flex xs12 md12 lg12 xl12>
        <v-data-table
          :headers="headers"
          :items="data"
          class="elevation-1"
          hide-default-footer
        >
          <!-- 8 โมง -->
          <template v-slot:item.eight="{ item }" >
            <v-chip
              class="chip"
              :color="item.eight.color"
              label
              large
              v-if="item.eight.subject != ''"
            >
              <p>
                {{ item.eight.id }}<br />
                {{ item.eight.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 9 โมง -->
          <template v-slot:item.nine="{ item }">
            <v-chip
              class="chip"
              :color="item.nine.color"
              label
              large
              v-if="item.nine.subject != ''"
            >
              <p>
                {{ item.nine.id }} <br />
                {{ item.nine.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 10 โมง -->
          <template v-slot:item.ten="{ item }">
            <v-chip
              class="chip"
              :color="item.ten.color"
              label
              large
              v-if="item.ten.subject != ''"
            >
              <p>
                {{ item.ten.id }} <br />
                {{ item.ten.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 11 โมง -->
          <template v-slot:item.eleven="{ item }">
            <v-chip
              class="chip"
              :color="item.eleven.color"
              label
              large
              v-if="item.eleven.subject != ''"
            >
              <p>
                {{ item.eleven.id }} <br />
                {{ item.eleven.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 12 โมง -->
          <template v-slot:item.twelve="{ item }">
            <v-chip
              class="chip"
              :color="item.twelve.color"
              label
              large
              v-if="item.twelve.subject != ''"
            >
              <p>
                {{ item.twelve.id }} <br />
                {{ item.twelve.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 13 โมง -->
          <template v-slot:item.thirteen="{ item }">
            <v-chip
              class="chip"
              :color="item.thirteen.color"
              label
              large
              v-if="item.thirteen.subject != ''"
            >
              <p>
                {{ item.thirteen.id }} <br />
                {{ item.thirteen.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 14 โมง -->
          <template v-slot:item.fourteen="{ item }">
            <v-chip
              class="chip"
              :color="item.fourteen.color"
              label
              large
              v-if="item.fourteen.subject != ''"
            >
              <p>
                {{ item.fourteen.id }} <br />
                {{ item.fourteen.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 15 โมง -->
          <template v-slot:item.fifteen="{ item }">
            <v-chip
              class="chip"
              :color="item.fifteen.color"
              label
              large
              v-if="item.fifteen.subject != ''"
            >
              <p>
                {{ item.fifteen.id }} <br />
                {{ item.fifteen.subject }}
              </p>
            </v-chip>
          </template>

          <!-- 16 โมง -->
          <template v-slot:item.sixteen="{ item }">
            <v-chip
              class="chip"
              :color="item.sixteen.color"
              label
              large
              v-if="item.sixteen.subject != ''"
            >
              <p>
                {{ item.sixteen.id }} <br />
                {{ item.sixteen.subject }}
              </p>
            </v-chip>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import editSC from "../components/dialog-schedule-student"
export default {
  components: {
      editSC,
  },
  data() {
    return {
      headers: [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "day",
        },
        { text: "08:00", align: "center", sortable: false, value: "eight" },
        { text: "09:00", align: "center", sortable: false, value: "nine" },
        { text: "10:00", align: "center", sortable: false, value: "ten" },
        { text: "11:00", align: "center", sortable: false, value: "eleven" },
        { text: "12:00", align: "center", sortable: false, value: "twelve" },
        { text: "13:00", align: "center", sortable: false, value: "thirteen" },
        { text: "14:00", align: "center", sortable: false, value: "fourteen" },
        { text: "15:00", align: "center", sortable: false, value: "fifteen" },
        { text: "16:00", align: "center", sortable: false, value: "sixteen" },
      ],
      data: [
        {
          day: "จันทร์",
          eight: { subject: "ภาษาไทย", id: "ท31101", color: "blue lighten-2" },
          nine: { subject: "ฟิสิกส์", id: "ว31201", color: "lime lighten-2" },
          ten: { subject: "", id: "", color: "" },
          eleven: {
            subject: "ภาษาอังกฤษ",
            id: "อ31101",
            color: "brown lighten-3",
          },
          twelve: { subject: "", id: "", color: "" },
          thirteen: {
            subject: "ชีววิทยา",
            id: "ว31213",
            color: "green lighten-3",
          },
          fourteen: { subject: "", id: "", color: "" },
          fifteen: {
            subject: "สังคมศึกษา",
            id: "ส31101",
            color: "blue-grey lighten-3",
          },
          sixteen: { subject: "", id: "", color: "" },
        },
        {
          day: "อังคาร",
          eight: {
            subject: "คณิตศาสตร์",
            id: "ค31101",
            color: "pink lighten-4",
          },
          nine: { subject: "", id: "", color: "" },
          ten: { subject: "เคมี", id: "ว31207", color: "orange lighten-1" },
          eleven: { subject: "", id: "", color: "" },
          twelve: { subject: "", id: "", color: "" },
          thirteen: {
            subject: "ประวัติศาสตร์",
            id: "ส31103",
            color: "blue lighten-5",
          },
          fourteen: {
            subject: "ดาราศาสตร์",
            id: "ว31110",
            color: "red lighten-2",
          },
          fifteen: { subject: "", id: "", color: "" },
          sixteen: {
            subject: "สุขศึกษา",
            id: "พ31101",
            color: "lime accent-3",
          },
        },
        {
          day: "พุธ",
          eight: { subject: "", id: "", color: "" },
          nine: { subject: "ศิลปะ", id: "ศ31101", color: "cyan lighten-4" },
          ten: { subject: "ฟิสิกส์", id: "ว31201", color: "lime lighten-2" },
          eleven: { subject: "", id: "", color: "" },
          twelve: { subject: "", id: "", color: "" },
          thirteen: {
            subject: "ภาษาไทย",
            id: "ท31101",
            color: "blue lighten-2",
          },
          fourteen: { subject: "", id: "", color: "" },
          fifteen: {
            subject: "การงาน",
            id: "ง31101",
            color: "indigo lighten-3",
          },
          sixteen: { subject: "เคมี", id: "ว31207", color: "orange lighten-1" },
        },
        {
          day: "พฤหัสบดี",
          eight: {
            subject: "พลศึกษา",
            id: "พ31201",
            color: "purple lighten-3",
          },
          nine: { subject: "", id: "", color: "" },
          ten: { subject: "ชีววิทยา", id: "ว31213", color: "green lighten-3" },
          eleven: { subject: "ภาษาไทย", id: "ท31101", color: "blue lighten-2" },
          twelve: { subject: "", id: "", color: "" },
          thirteen: {
            subject: "ฟิสิกส์",
            id: "ว31201",
            color: "lime lighten-2",
          },
          fourteen: {
            subject: "คณิตศาสตร์",
            id: "ค31101",
            color: "pink lighten-4",
          },
          fifteen: { subject: "", id: "", color: "" },
          sixteen: { subject: "", id: "", color: "" },
        },
        {
          day: "ศุกร์",
          eight: { subject: "", id: "", color: "" },
          nine: {
            subject: "คณิตศาสตร์",
            id: "ค31101",
            color: "pink lighten-4",
          },
          ten: { subject: "", id: "", color: "" },
          eleven: { subject: "เคมี", id: "ว31207", color: "orange lighten-1" },
          twelve: { subject: "", id: "", color: "" },
          thirteen: { subject: "", id: "", color: "" },
          fourteen: {
            subject: "ชีววิทยา",
            id: "ว31213",
            color: "green lighten-3",
          },
          fifteen: {
            subject: "ภาษาอังกฤษ",
            id: "อ31101",
            color: "brown lighten-3",
          },
          sixteen: {
            subject: "สังคมศึกษา",
            id: "ส31101",
            color: "blue-grey lighten-3",
          },
        },
      ],
      editSC : false,
    };
  },
  methods: {
    fnEdit() {
      this.editSC = true;
    },
  },
};
</script>

<style scoped>
.chip {
  width: 70px;
  height: 100px;
  text-align: left !important;
}
.chip p {
  font-size: 2px;
}
</style>