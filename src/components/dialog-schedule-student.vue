<template>
  <v-row justify="center">
    <v-dialog
      v-model="edit"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title>
          <span class="text-h5">แก้ไขตารางเรียน</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="8"
                md="6"
              >
                <v-text-field
                  label="รหัสวิชา"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="8"
                md="6"
              >
                <v-text-field
                  label="ชื่อวิชา"
                  required
                ></v-text-field>
              </v-col>
              
              
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี','ศุกร์']"
                  label="วัน"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00']"
                  label="เวลา"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close')"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="resetValidation"
            Reset Validation
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
    props:["edit"],
    data: () => ({
      dialog: false,
    }),
  }
</script>