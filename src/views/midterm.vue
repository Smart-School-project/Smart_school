<template id="d2">
    <div style="background-color: #ECEFF1; height: 100%;">
        <Toolbar/>
        <!-- ในส่วนของ bar ด้านบน -->
        <v-flex xs12 md4 lg4 xl4 class="my-8 ma-7">
            <v-card width="350" color="blue-grey lighten-4" flat > 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="#3F91A4" size="50">mdi-clipboard-list-outline</v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: #3F91A4"><h3>คะเเนน</h3></v-list-item-title>
                                <hr style="border-top: 1px solid #3F91A4">
                            <v-list-item-title style="color: #3F91A4"><h4>คะเนนระหว่างเรียน</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex>
        <!-- ในส่วนของ table  -->
        <div>
        </div>
        <div id="d10">
              
             </div>
             <div id="d6">
               <!-- <input type="button" name="add" value="Add Data" @click="Addchanel()" class="btn btn-success"><br><br>
               <input type="button" name="add" value="Add point" @click="Addpoint()" class="btn btn-success"> -->
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th rowspan="2" align="center" width="1%">ที่</th>
                  <th rowspan="2" align="center" width="3%">รหัส</th>
                  <th rowspan="2" align="center">กลุ่มสาระ</th>
                  <th nowrap="" rowspan="2" align="center" width="2%">หน่วย<br>
                  การเรียน</th>
                  <th nowrap="" colspan="5" align="center" class="text-center">เช็คชื่อเวลาเรียน</th>
                  <th rowspan="2" align="center" class="text-center">คะแนนรายมาตรฐาน/ตัวชี้วัด</th>
                  <th nowrap="" colspan="2" align="center" class="text-center">รวมคะแนน</th>
                </tr>
                <tr>
                  <th nowrap="" align="center" width="2%">เต็ม</th>
                  <th nowrap="" align="center" width="2%">ที่ได้</th>
                  <th nowrap="" align="center" width="2%">ขาด</th>
                  <th nowrap="" align="center" width="2%">ป่วย</th>
                  <th nowrap="" align="center" width="2%">กิจ</th>
                  <th nowrap="" align="center" width="3%">เต็ม</th>
                  <th nowrap="" align="center" width="3%">ที่ได้</th>
                </tr>
              </thead>
              <tbody>
                <!-- หน่วยการเรียนรู้ -->
                <tr>
                  <td colspan="2">&nbsp;</td>
                  <td colspan="11" class="small2">สาระการเรียนรู้พื้นฐาน</td>
                </tr>

                <tr>
                  <td nowrap="" valign="top" align="center">1</td>
                  <td nowrap="" valign="top" align="center">ท31102</td>
                  <td nowrap="">ภาษาไทย 2 <br>
                    <span class="small">
                    ผู้สอน:&nbsp;ภูซีลา&nbsp;เจ๊ะแล<br>
                    โทร:&nbsp;0828205539</span>
                  </td>
                    <td align="center">1.0</td>
                    <td align="center">0</td>
                    <td align="center">0</td>
                    <td align="center">0</td>
                    <td align="center">0</td>
                    <td align="center">0</td>
                    <td align="left" style="padding:0px">
                      <table height="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small">ตัวชี้วัด(เต็ม)</td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                          </tr> 
                          <tr >
                            <td style="border-right: 1px #000 solid;" class="small">คะแนน</td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            <td style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                            
                             
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  <td align="center">0</td>
                  <td align="center">0</td>
                </tr>
                <!-- ตัวที่เราสามารถสร้างเอาไว้ใส่คะเนน -->
                  <tr>
                    <td nowrap="" valign="top" align="center">2</td>
                    <td nowrap="" valign="top" align="center">พ31102</td>
                    <td nowrap="">สุขศึกษา 2 <br>
                      <span class="small">
                      ผู้สอน:&nbsp;นูรียะ&nbsp;เซะกะมิ<br>
                      โทร:&nbsp;0862890095</span>
                    </td>
                    <td align="center">0.5</td>
                    <td align="center">3</td>
                    <td align="center">3</td>
                    <td align="center">0</td>
                    <td align="center">0</td>
                    <td align="center">0</td>
                    <td align="left" style="padding:0px">
                  <table height="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small">ตัวชี้วัด(เต็ม)</td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td nowrap="" align="left" style="border-right: 1px #000 solid; border-bottom: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                      </tr>
                      <tr>
                        <td style="border-right: 1px #000 solid;" class="small">คะแนน</td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                        <td height="50%" align="center" style="border-right: 1px #000 solid;" class="small"><input type="text" size="10px"></td>
                      </tr>
                    </tbody>
                  </table>
                    </td>
                  <td align="center">20</td>
                  <td align="center">0</td>
                  </tr>
                </tbody>
                </table>
              </div>
        </div>
        
</template>

<script>

import Toolbar from "../layout/index.vue";
export default {
    components: {
        Toolbar
    },
    methods:{
      // Addchanel(){
      //   // var tr = document.createElement('tr');
      //   var td1 = document.createElement('td');
      //   // var td2 = tr.appendChild(document.createElement('td'));
      //   td1.innerHTML= '<input type="text" size="10px">'
      //   // td2.innerHTML= '<input type="text" size="10px">'
      //   document.getElementById("tbl").appendChild(td1);
      // },
      // Addpoint(){
      //   // var tr = document.createElement('tr');
      //   var td1 = document.createElement('td');
      //   // var td2 = tr.appendChild(document.createElement('td'));
      //   td1.innerHTML= '<input type="text" size="10px">'
      //   // td2.innerHTML= '<input type="text" size="10px">'
      //   document.getElementById("tbp").appendChild(td1);
      // }
    }

  }
</script>

<style scoped>
    #d5{
      padding-left: 0%;
      padding-right: 0%;
    }
    #d6{
      background-color: rgb(255, 255, 255);
      padding-left: 1.5%;
      padding-right: 1.5%;
      padding-top: 1.5%;
      padding-bottom: 1.5%;
      overflow-x: auto;
    }
    #d7{
      background-color: aqua;

    }
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      text-align: center;
      padding-left: 7px;
      padding-right: 7px;
    }
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
    #d10{
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
    }
</style>