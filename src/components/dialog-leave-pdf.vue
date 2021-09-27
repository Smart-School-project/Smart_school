<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500" persistent>
      <v-card>
        <iframe :src="pdf" width="100%" height="600px"> </iframe>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('close')"> ยกเลิก </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["show", "pdf"],
  data() {
    return {
      dialog: true,
    };
  },
};
</script>