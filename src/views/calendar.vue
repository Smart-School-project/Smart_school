<template id="d2">
  <div style="background-color: #eceff1; height: 100%">
    <Toolbar />
    <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
      <v-card width="350" color="blue-grey lighten-4" flat>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#3F91A4" size="50">mdi-calendar-month</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #3f91a4"
              ><h3>ปฏิทินกิจกรรม</h3></v-list-item-title
            >
            <hr style="border-top: 1px solid #3f91a4" />
            <v-list-item-title style="color: #3f91a4"
              ><h4>ภาคเรียนที่ 1 ปีการศึกษา 2564</h4></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
    <!-- ปฏิทิน -->
    <div id="calen">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small> mdi-chevron-left </v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small> mdi-chevron-right </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @change="fncalendar"
            ></v-calendar>
            
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Toolbar from "../layout/index.vue";

export default {
  components: {
    Toolbar,
  },
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    fncalendar({start , end}){
      var payload = {
        start : start.date,
        end : end.date,
      };
      const vm = this
      this.axios
        .post("http://localhost:3000/calendar", payload)
        .then(function (response) {
            console.log(response.data)
            if(response.data.status == "OK") {
              vm.updateRange(response.data.result)
            }
        });
    },
    getEventColor(event) {
      return event.color;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    updateRange(val) {
      const events = [];
      
      for(var i of val){
      events.push(
        {
          name: i.name,
          start: new Date(i.start),
          end: new Date(i.end),
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        }
      );}
      this.events = events;
      
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>

<style scoped>
#calen {
  margin-left: 2.5%;
  margin-right: 2.5%;
}
</style>