<template>
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-calendar-month-outline</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>ใบลากิจ/ลาป่วย</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>สำหรับนักเรียน</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex >
        <!-- เริ่มทำฟอร์มใบลา-->
        <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
            <v-card ref="form">
                <v-card-text>
                    <!--ประเภทการลา-->
                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'ต้องระบุข้อมูลในช่องนี้']"
                        label="ประเภทการลา"
                        required
                    ></v-select>
                    <!--ตัวปฏิทิน-->
                    <v-col id="d1" cols="12" sm="12" md="12">
                        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="ปฏิทิน"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                        </v-dialog>
                    </v-col>
                    <!--ชือ่-นามสกุล-->
                    <v-text-field
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'ต้องระบุข้อมูลในช่องนี้']"
                        :error-messages="errorMessages"
                        label="ชื่อ-นามสกุล"
                        placeholder="ซูลตอน แวกะจิ"
                        required
                    ></v-text-field>
                    <!--เลขประจำตัว-->
                    <v-text-field
                        ref="id_card"
                        v-model="id_card"
                        :rules="[() => !!id_card || 'ต้องระบุข้อมูลในช่องนี้']"
                        :error-messages="errorMessages"
                        label="เลขประจำตัวนักเรียน"
                        placeholder="00001"
                        required
                    ></v-text-field>
                    <!--ชั้นเรียน-->
                    <v-text-field
                        ref="room"
                        v-model="room"
                        :rules="[() => !!room || 'ต้องระบุข้อมูลในช่องนี้']"
                        label="ชั้นสามัญ"
                        required
                    ></v-text-field>
                    <!--หมวดวิชา-->
                    <v-select
                        v-model="select"
                        :items="subject"
                        :rules="[v => !!v || 'ต้องระบุข้อมูลในช่องนี้']"
                        label="หมวดวิชา"
                        required
                    ></v-select>
                    <!--อาจารย์-->
                    <v-select
                        v-model="select"
                        :items="teacher"
                        :rules="[v => !!v || 'ต้องระบุข้อมูลในช่องนี้']"
                        label="อาจารย์"
                        required
                    ></v-select>
                    <!--Bio-->
                    <v-col id="d2" cols="12">
                        <v-textarea
                            v-model="bio"
                            color="teal"
                        >
                            <template v-slot:label>
                                <div>
                                เหตุผลการลา
                                </div>
                            </template>
                        </v-textarea>
                    </v-col>
                    <!--เเนบไฟล์-->
                    <v-file-input
                        show-size
                        label="เเนบเอกสาร"
                    ></v-file-input>

                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                        <v-tooltip
                        v-if="formHasErrors"
                        left
                        >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                        >
                        <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </template>
                        <span>Refresh form</span>
                        </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn
                    color="green"
                    text
                    @click="submit"
                >
                    Submit
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    <!--test ตัว text box-->
    
    </div>
    
</template>

<script>

import Toolbar from "../layout/index.vue";

export default {
    components: {
        Toolbar
    },
    data: () => ({
      items: [
          'ลากิจ',
          'ลาป่วย'
          
      ],
      subject: [
          'คนิตศาสตร์',
          'วิทยาศาสตร์',
          'ศิลปะ',
      ],
      teacher: [
          'นิรุศดี นิกะจิ',
          'มุสปานี อาเเอ',
          'อับดุลมาลิก เสนาลิก',
          'ฮากีมีน พิสพัน'
      ],
      bio : '',
      select : '',
      name :'',
      id_card : '',
      room : '',
      submit : '',

      

      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.favoriteAnimal &&
          this.form.terms
        )
      },
    },
  }



</script>

<style scoped>

#d1 {
    padding-top: 0%;
    padding-bottom: 0%;
    padding-right: 0%;
    padding-left: 0%;
}
#d2{
    padding-top: 0%;
    padding-bottom: 0%;
    padding-right: 0%;
    padding-left: 0%;
}
</style>