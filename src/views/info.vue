<template id="d2">
  <div style="background-color: #eceff1; height: 100%">
    <Toolbar />
    <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
      <v-card width="350" color="blue-grey lighten-4" flat>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#3F91A4" size="50">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: #3f91a4"
              ><h3>ข้อมูลส่วนตัว</h3></v-list-item-title
            >
            <hr style="border-top: 1px solid #3f91a4" />
            <v-list-item-title style="color: #3f91a4"
              ><h4>ข้อมูลส่วนของอาจารย์</h4></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
    <v-container id="contain1" class="my-1">
      <v-layout row wrap flat>
        <v-flex>
          <v-card flat class="text-center ma-1">
            <v-responsive class="pt-4">
              <v-avatar id="avatar1" size="190">
                <img id="img1" src="../assets/profile.jpg" alt="profile" />
              </v-avatar>
            </v-responsive>
            <v-card-text id="d1">
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="name"
                        label="ชื่อ-นามสกุล"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="id"
                        label="เลขประจำตัวอาจารย์"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="id_card"
                        label="เลขบัตรประชาชน"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="room"
                        label="ครูที่ปึกษาชั้นสามัญ"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="birthday"
                        label="วัน/เดือน/ปีเกิด"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="address"
                        label="ที่อยู่"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="email"
                        label="อีเมล"
                        readonly
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="phone"
                        label="เบอร์โทรศัพท์"
                        readonly
                        outlined
                      ></v-text-field>
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
    Toolbar,
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
      phone: ""

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
        .post("http://0.0.0.0:3000/profile", payload)
        .then(function (response) {
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
            }
        });
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
}
</style>