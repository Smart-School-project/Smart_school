<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="text-h5">แก้ไขตารางเรียน</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8" md="12">
                <v-text-field label="รหัสวิชา" required v-model="subjectID" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" md="12">
                <v-text-field label="ชื่อวิชา" required v-model="subjectName" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" >
                <v-select
                  :items="['blue', 'red', 'yellow', 'green', 'purple', 'pink', 'orange', 'brown', 'grey', 'cream', 'Bronze', 'Golden', 'Silver']"
                  label="สี"
                  required
                  v-model="subjectColor"
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6"> </v-col>
              <v-col cols="12" sm="6"> </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('close')">
            Close
          </v-btn>
           <v-btn color="error" outlined @click="fnDelete">
            delete
          </v-btn>
          <v-btn
            color="blue darken-1"
            dark
            Reset
            Validation
            @click="fnSave"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["show", "item"],
  data: () => ({
    dialog: false,
    subjectID: "",
    subjectName: "",
    newItem: {},
    subjectColor: ""
  }),
  watch: {
    show(val) {
      if(val === true) {
        this.newItem = this.item
        this.subjectID =  this.newItem.id
        this.subjectName =  this.newItem.subject
        this.subjectColor =  this.newItem.color
      }
    }
  },
  methods: {

    fnSave(){
      this.newItem.id = this.subjectID 
      this.newItem.subject =  this.subjectName 
      this.newItem.color =  this.subjectColor 
      this.$emit('save',this.newItem)
    },

    fnDelete(){
      this.newItem.id = ""
      this.newItem.subject = ""
      this.newItem.color = ""
      this.$emit('close')
    }
  }
};
</script>