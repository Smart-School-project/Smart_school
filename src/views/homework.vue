<template>
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-book-open-variant</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>การบ้าน</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>สำหรับอาจารย์</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex >
        <!-- เริ่มทำฟอร์มการบ้าน-->
        <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
            <v-card ref="form">
                <v-card-text>
                    <!--วิชา-->
                    <v-text-field
                        v-model="subject"
                        :error-messages="errorMessages"
                        label="วิชา"
                    ></v-text-field>

                    <!--ห้อง-->
                    <v-select
                        v-model="room_select"
                        :items="room"
                        label="ห้อง"
                    ></v-select>

                    <!--ปฏิทินวันส่ง-->
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

                    <!--Bio-->
                    <v-col id="d2" cols="12">
                        <v-textarea
                            v-model="detail"
                            color="teal"
                            label="รายละเอียด"
                        >
                            <!-- <template v-slot:label>
                                <div>
                                รายละเอียด
                                </div>
                            </template> -->
                        </v-textarea>
                    </v-col>

                    <!--เเนบไฟล์-->
                    <v-file-input
                        v-model="file"
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
      room: [
          '3/1',
          '3/2',
          '3/3',
          '3/4',
      ],
      room_select: '',
      detail : '',
      select : '',
      errorMessages : '',
      formHasErrors : '',
      file : '',
      fileBase64 : '',
      subject: '',
      date_end: '',


      

      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
    methods: {
        async fn_submit() {
            this.fileBase64 = await this.toBase64()

            var payload = {
                    course_name: this.subject,
                    room: this.room_select,
                    date: this.date,
                    detail: this.detail,
                    filePdf: this.fileBase64,
             };
             this.axios
                .post("http://0.0.0.0:3000/homework", payload)
                .then(function (response) { 
                    if(response.data.status == "OK") {
                        alert(response.data.result)    
                    }
                });

        },
        toBase64() {
            console.log(this.file)
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(this.file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },
        reset() {
            this.bio =  '',
            this.detail = '',
            this.room_select = [],
            this.submit = '',
            this.subject = '',
            this.file = [],
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