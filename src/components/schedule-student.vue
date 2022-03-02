<template>
  <div>
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
              @click="fnEdit(item.eight)"
            >
              <p>
                {{ item.eight.id }}<br />
                {{ item.eight.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.eight)"
            >
            </v-chip>
            
          </template>

          <!-- 9 โมง -->
          <template v-slot:item.nine="{ item }" @click="fnEdit()">
            <v-chip
              class="chip"
              :color="item.nine.color"
              label
              large
              v-if="item.nine.subject != ''"
               @click="fnEdit(item.nine)"
            >
              <p>
                {{ item.nine.id }} <br />
                {{ item.nine.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.nine)"
            >
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
               @click="fnEdit(item.ten)"
            >
              <p>
                {{ item.ten.id }} <br />
                {{ item.ten.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.ten)"
            >
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
               @click="fnEdit(item.eleven)"
            >
              <p>
                {{ item.eleven.id }} <br />
                {{ item.eleven.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.eleven)"
            >
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
               @click="fnEdit(item.twelve)"
            >
              <p>
                {{ item.twelve.id }} <br />
                {{ item.twelve.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.twelve)"
            >
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
               @click="fnEdit(item.thirteen)"
            >
              <p>
                {{ item.thirteen.id }} <br />
                {{ item.thirteen.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.thirteen)"
            >
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
               @click="fnEdit(item.fourteen)"
            >
              <p>
                {{ item.fourteen.id }} <br />
                {{ item.fourteen.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.fourteen)"
            >
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
              @click="fnEdit(item.fifteen)"
            >
              <p>
                {{ item.fifteen.id }} <br />
                {{ item.fifteen.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.fifteen)"
            >
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
              @click="fnEdit(item.sixteen)"
            >
              <p>
                {{ item.sixteen.id }} <br />
                {{ item.sixteen.subject }}
              </p>
            </v-chip>
            <v-chip
              class="chip"
              color="white"
              label
              large
              v-else
              @click="fnEdit(item.sixteen)"
            >
            </v-chip>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

     <editSC
      :show="editSC"
      :item="editItem"
      @close="editSC = false"
      @save="fnSaveEdit"
    />

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
      data: [],
      editSC : false,
      editItem : {}
    };
  },
  mounted() {
    this.fnStudent();
  },
  methods: {
    fnEdit(item) {
      this.editSC = true;
      this.editItem = item;
      console.log(item)
    },
    fnSaveEdit(val) {
      console.log(val);
      this.editSC = false;
      console.log("data",this.data);
    },
    fnStudent() {
      var payload = {
        room: "ม.3/1",
      };
      const vm = this;
      console.log(payload);
      this.axios
        .post("http://0.0.0.0:3000/schedule_student", payload)
        .then(function (response) {
          if (response.data.status == "OK") {
            var dataResult = response.data.result[0];
            vm.data = dataResult.schedule;
          }
        });
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