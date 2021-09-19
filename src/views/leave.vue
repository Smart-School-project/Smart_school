<template>
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-email-newsletter</v-icon>
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
                        label="ประเภทการลา"
                    ></v-select>
                    <!--ตัวปฏิทิน-->
                    <v-col id="d1" cols="12" sm="12" md="12">
                        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="วันที่ส่ง"
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
                        :error-messages="errorMessages"
                        label="ชื่อ-นามสกุล"
                        placeholder="ซูลตอน แวกะจิ"
                    ></v-text-field>
                    <!--เลขประจำตัว-->
                    <v-text-field
                        ref="id_card"
                        v-model="id_card"
                        :error-messages="errorMessages"
                        label="เลขประจำตัวนักเรียน"
                        placeholder="00001"
                    ></v-text-field>
                    <!--ชั้นเรียน-->
                    <v-text-field
                        ref="room"
                        v-model="room"
                        label="ชั้นสามัญ"
                    ></v-text-field>
                    
                    <!--หมวดวิชา-->
                    <v-select
                        v-model="subject"
                        :items="subject1"
                        label="หมวดวิชา"
                        
                    ></v-select>
                    <!--อาจารย์-->
                    <v-select
                        v-model="teacher"
                        :items="teacher1"
                        label="อาจารย์"
                    ></v-select>
                    <!--Bio-->
                    <v-col id="d2" cols="12">
                        <v-textarea
                            v-model="bio"
                            color="teal"
                            label="เหตุผลการลา"
                        >
                        </v-textarea>
                    </v-col>
                    <!--เเนบไฟล์-->
                     <v-file-input
                        v-model="pdf_file"
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
                    color="error"
                    text
                    @click="reset"
                    >
                    Reset Form
                </v-btn>
                <v-btn
                    color="green"
                    text
                    @click="fn_submit"
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
      subject1: [
          'คนิตศาสตร์',
          'วิทยาศาสตร์',
          'ศิลปะ',
      ],
      teacher1: [
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
      errorMessages : '',
      formHasErrors : '',
      subject: '',
      teacher: '',
      pdf_file: [],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      date1: '',
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
    methods: {
        async fn_submit() {
            var filebase64 = await this.toBase64()

            var payload = {
                date: this.date1,
                name: this.name,
                students_id: this.id_card,
                room: this.room,
                teacher: this.teacher,
                subject: this.subject,
                type_leave: this.select,
                cause: this.bio,
                pdf: filebase64,
             };
             console.log(payload)
             this.axios
                .post("http://localhost:3000/leave", payload)
                .then(function (response) { 
                    if(response.data.status == "OK") {
                        alert(response.data.result)
                    }
                });
        },
        toBase64() {
            console.log(this.pdf_file)
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(this.pdf_file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },
        reset(){
            this.bio =  '',
            this.select = '',
            this.name = '',
            this.id_card = '',
            this.room = '',
            this.submit = '',
            this.subject = '',
            this.teacher = '',
            this.pdf_file = [],
            this.date = [],
            this.$refs.observer.reset()
        },

    }
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