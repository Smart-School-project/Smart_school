<template>
    <div >
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
          <template v-slot:item.eight="{ item }"  @click="fnEdit()">
            <v-chip
              class="chip"
              :color="item.eight.color"
              label
              large
              v-if="item.eight.subject != ''"
              @click="fnEdit()"
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
export default {
  data() {
    return {
      headers: [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "day",
        },
        { text: "08:00", align: "center", sortable: false, value: "eight"},
        { text: "09:00", align: "center", sortable: false, value: "nine" },
        { text: "10:00", align: "center", sortable: false, value: "ten" },
        { text: "11:00", align: "center", sortable: false, value: "eleven" },
        { text: "12:00", align: "center", sortable: false, value: "twelve" },
        { text: "13:00", align: "center", sortable: false, value: "thirteen" },
        { text: "14:00", align: "center", sortable: false, value: "fourteen" },
        { text: "15:00", align: "center", sortable: false, value: "fifteen" },
        { text: "16:00", align: "center", sortable: false, value: "sixteen" },
      ],
      data: []
    };
  },
  mounted(){
    this.fnStudent();
  },
  methods: {
     fnStudent() {
      var payload = {
        room: "ม.3/1",
      };
      const vm = this;
      console.log(payload);
      this.axios
        .post("http://localhost:3000/schedule_student", payload)
        .then(function (response) {
          if (response.data.status == "OK") {
            var dataResult = response.data.result[0];
            vm.data = dataResult.schedule;
          }
        });
    },
  }
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