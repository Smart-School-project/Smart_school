<template id="d2">
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-account</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>ปฏิทินกิจกรรม</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>ภาคเรียนที่ 1 ปีการศึกษา 2564</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex>
        <!-- ปฏิทิน -->
        <div>
          <v-row class="fill-height">
            <v-col>
              <v-sheet height="64">
                <v-toolbar
                  flat
                >
                  <v-btn
                    outlined
                    class="mr-4"
                    color="grey darken-2"
                    @click="setToday"
                  >
                    Today
                  </v-btn>
                  <!-- ย้อนกลับเดือน -->
                  <v-btn
                    fab
                    text
                    small
                    color="grey darken-2"
                    @click="prev"
                  >
                    <v-icon small>
                      mdi-chevron-left
                    </v-icon>
                  </v-btn>
                  <!-- ไปหน้าเดือน -->
                  <v-btn
                    fab
                    text
                    small
                    color="grey darken-2"
                    @click="next"
                  >
                    <v-icon small>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                  <!-- ชื่อเดือนที่เเสดง -->
                  <v-toolbar-title v-if="$refs.calendar">
                    {{ $refs.calendar.title }}
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <!-- เมนูของเดือนต่างๆ day month year -->
                  <v-menu
                    bottom
                    right
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        outlined
                        color="grey darken-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <span>{{ typeToLabel[type] }}</span>
                        <v-icon right>
                          mdi-menu-down
                        </v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="type = 'day'">
                        <v-list-item-title>Day</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = 'week'">
                        <v-list-item-title>Week</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = 'month'">
                        <v-list-item-title>Month</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = '4day'">
                        <v-list-item-title>4 days</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-toolbar>
              </v-sheet>
              <!-- พวกอีเว้นต่างๆภายในตาราง -->
              <v-sheet height="600">
                <v-calendar
                  ref="calendar"
                  v-model="focus"
                  color="primary"
                  :events="events"
                  :event-color="getEventColor"
                  :type="type"
                  @click:event="showEvent"
                  @click:more="viewDay"
                  @click:date="viewDay"
                  @change="updateRange"
                ></v-calendar>
                <!-- เมื่อกดไปที่อีเว้นจะมีป็อปอัพขึ้นมา -->
                <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
                >
                  <v-card
                    color="grey lighten-4"
                    min-width="350px"
                    flat
                  >
                    <v-toolbar
                      :color="selectedEvent.color"
                      dark
                    >
                      <v-btn icon>
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                      <!-- ชื่ออีเว้น -->
                      <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <!-- detailภายในอีเว้นเมื่อเราคลิก -->
                    <v-card-text>
                      <span v-html="selectedEvent.details"></span>
                    </v-card-text>
                    <!-- ปุ่ม cancel -->
                    <v-card-actions>
                      <v-btn
                        text
                        color="secondary"
                        @click="selectedOpen = false"
                      >
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
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
        Toolbar
    },
    // data() {
    //   return{
    //   today: new Date().toISOString().substr(0,10),
    //   focus: new Date().toISOString().substr(0,10),
    //   type: "month",
    //   typeToLabel: {
    //     month: "Month",
    //     week: "Week",
    //     day: "Day",
    //      "4day": "4 Days"
    //    },
    //   name: '',
    //   details: null,
    //   start: null,
    //   end: null,
    //   color: "#1976D2",
    //   currentlyEditing: null,
    //   selectedEvent: {},
    //   selectedElement: null,
    //   selectedOpen: false,
    //   event: [],
    //   dialog: false
    //   }
    // },

    data: () => ({
      today: new Date().toISOString().substr(0,10),
      focus: new Date().toISOString().substr(0,10),
      type: "month",
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days"
      },
      name: "",
      details: "",
      start: "",
      end: "",
      color: "#1976D2",
      currentlyEditing: "",
      selectedEvent: {},
      selectedElement: "",
      selectedOpen: false,
      events: [],
      dialog: false
    }),
    async mounted(){
      this.getEvents();
    },
    methods:{
      async getEvents() {
      var payload = {
        name : this.name,
        start : this.start,
        end : this.end,
        details : this.details
      };
      const vm = this
      console.log(payload)
      this.axios
        .post("http://localhost:3000/calendar", payload)
        .then(function (response) {
            console.log(response.data)
            if(response.data.status == "OK") {
                // callback(response.data.calendardata)
                // let events = [];
                // let appData = response.data();
                // appData.id = response.id;
                // events.push(appData)
                vm.dataResult = response.data.result[0]
                // vm.name = dataResult.name
                // vm.details = dataResult.details
                // vm.start = dataResult.start
                // vm.end = dataResult.end
                // let snapshot =  response.data.result[0]
                // let events = [];
                // snapshot.forEach(doc =>{
                //   let appData = doc.data();
                //   appData.id = doc.id;
                //   events.push(appData)
                // });
            }
        });
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    }
  };
</script>

<style scoped>

</style>