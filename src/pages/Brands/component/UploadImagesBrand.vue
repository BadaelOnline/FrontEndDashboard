<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <UploadImage class="upload_img" :max="3" />
    </md-card-content>
  </md-card>
</template>
<script>
import UploadImage from "vue-upload-drop-images";

export default {
  name: "UploadImagesBrand",
  components: {
    UploadImage,
  },
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
  },
};
</script>
<style>
.beforeUpload[data-v-69bb59a3] {
  position: relative;
  text-align: center;
  width: 100%;
}
</style>
