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
                            <v-list-item-title style="color: #3F91A4"><h4>ใบลากิจ/ลาป่วย สำหรับนักเรียน</h4></v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-flex >
        <v-row justify="center">
            <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            >
            <v-card ref="form">
                <v-card-text>
                    <v-text-field
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Full Name"
                        placeholder="John Doe"
                        required
                    ></v-text-field>
                    <v-text-field
                        ref="address"
                        v-model="address"
                        :rules="[
                        () => !!address || 'This field is required',
                        () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                        addressCheck
                        ]"
                        label="Address Line"
                        placeholder="Snowy Rock Pl"
                        counter="25"
                        required
                    ></v-text-field>
                    <v-text-field
                        ref="city"
                        v-model="city"
                        :rules="[() => !!city || 'This field is required', addressCheck]"
                        label="City"
                        placeholder="El Paso"
                        required
                    ></v-text-field>
                    <v-text-field
                        ref="state"
                        v-model="state"
                        :rules="[() => !!state || 'This field is required']"
                        label="State/Province/Region"
                        required
                        placeholder="TX"
                    ></v-text-field>
                    <v-text-field
                        ref="zip"
                        v-model="zip"
                        :rules="[() => !!zip || 'This field is required']"
                        label="ZIP / Postal Code"
                        required
                        placeholder="79938"
                    ></v-text-field>
                    <v-autocomplete
                        ref="country"
                        v-model="country"
                        :rules="[() => !!country || 'This field is required']"
                        :items="countries"
                        label="Country"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation>
                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                        ></v-select>
                    </v-form>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                <v-btn text color="red">
                    Cancel
                </v-btn>
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
</style>