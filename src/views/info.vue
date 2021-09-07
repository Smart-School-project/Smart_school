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
                            <v-list-item-title style="color: #3F91A4"><h3>ข้อมูลส่วนตัว</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>ข้อมูลส่วนของนักเรียน</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex >
            <v-container id="contain1" class="my-1">
                <v-layout row wrap flat>
                    <v-flex>
                        <v-card flat class="text-center ma-1" >
                            <v-responsive class="pt-4">
                                <v-avatar  id="avatar1" size="190">
                                    <img :src="imageUrl">
                                </v-avatar>
                            </v-responsive>
                            <div class="text-center">
                                <v-btn
                                rounded
                                color="primary"
                                dark
                                @click="onPickFile"
                                >
                                insert image
                                </v-btn>
                                <input type="file" style="display : none" ref="fileInput" accept="image/*" @change="onFilePicked">
                            </div>
                            <v-card-text id="d1">
                                <v-form>
                                    <v-container>
                                        <v-row >
                                            <v-col id="col1" cols="12" sm="6">
                                                <v-text-field v-model="name" label="ชื่อ-นามสกุล" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col  id="col1" cols="12" sm="6">
                                                <v-text-field v-model="id" label="เลขประจำตัวนักเรียน" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col id="col1" cols="12" sm="6">
                                                <v-text-field v-model="id_card" label="เลขบัตรประชาชน" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col id="col1" cols="12" sm="6">
                                                <v-text-field v-model="room" label="ชั้นสามัญ" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col id="col1" cols="12" sm="6">
                                                <v-text-field v-model="birthday" label="วัน/เดือน/ปีเกิด" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col  id="col1" cols="12" sm="6">
                                                <v-text-field v-model="address" label="ที่อยู่" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col id="col1" cols="12" sm="6">
                                                <v-text-field v-model="email" label="ชื่อ-สกุล ผู้ปกครอง" readonly outlined ></v-text-field>
                                            </v-col>
                                            <v-col id="col1" cols="12" sm="6">
                                                <v-text-field v-model="phone" label="เบอร์โทรศัพท์" readonly outlined ></v-text-field>
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
        name: "",
        id: "",
        id_card: "",
        room: "",
        birthday: "",
        address: "",
        email: "",
        phone: "",
        // img1: ""
      
    };
  },
   mounted() {
    this.fnProfile();
  },
   methods: {
    fnProfile() {
      var payload = {
        account_id: localStorage.id,
      };
      const vm = this
      this.axios
        .post("http://localhost:3000/profile", payload)
        .then(function (response) {
            console.log(response.data)
            if(response.data.status == "OK") {
                var dataResult = response.data.result[0]
                vm.name = dataResult.name
                vm.id = dataResult.id
                vm.id_card = dataResult.id_card
                vm.room = dataResult.class
                vm.birthday = dataResult.birthday
                vm.address = dataResult.address
                vm.email = dataResult.email
                vm.phone = dataResult.phone
                // vm.img1 = dataResult.img1
            }
        });
    },
    onPickFile() {
        this.$refs.fileInput.click();
    },
    
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
        margin-bottom: 15px;
    }
    #col1 {
        padding-top: 0%;
        padding-bottom: 0%;
    }

</style>