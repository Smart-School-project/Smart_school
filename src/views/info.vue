<template id="d2">
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-calendar-month-outline</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>ข้อมูลส่วนตัว</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>ข้อมูลส่วนของนักเรียน</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex >
            <v-container id="contain1" class="my-1">
                <v-layout row wrap>
                    <v-flex>
                        <v-card flat class="text-center ma-1" >
                            <v-responsive class="pt-4">
                                <v-avatar  id="avatar1" size="190">
                                    <img id="img1"  src="../assets/profile.jpg" alt="profile">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text id="d1">
                                <v-form>
                                    <v-container>
                                        <v-row >
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="ซูลตอน แวกะจิ" label="ชื่อ-สกุล" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="6110110107" label="เลขประจำตัวนักเรียน" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="1-8423-4521-45-7" label="เลขบัตรประชาชน" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="ม.3/1" label="ชั้นสามัญ" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="01/12/2547" label="วัน/เดือน/ปีเกิด" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="60 ถ.ท่าเสด็จ ต.ตะลุบัน อ.สายบุรี จ.ปัตตานี 94110" label="ที่อยู่" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="นาย มูฮัมหมัด เฮลโล" label="ชื่อ-สกุล ผู้ปกครอง" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field value="084-569-5794" label="เบอร์โทรศัพท์" readonly outlined ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
    </div>
</template>

<script>

import Toolbar from "../layout/index.vue";

export default {
    components: {
        Toolbar
    },
    data() {
    return {
      
    };
  },
};
</script>

<style scoped>
    #d1 {
        text-align: left;
    }
    #contain1 {
        width: 100%;
    }
    #img1 {
        align-items: center;
    }
    #avatar1 {
        margin-top: 15px;
    }
</style>