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
  name: "UploadImages",
  components: {
    UploadImage,
  },
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
  },
  methods: {
    // handleImages(Imgs) {
    //   this.products.image = "http://localhost:8081/img/" + Imgs[0].name;
    //   for (var i = 0; i < Imgs.length; i++) {
    //     this.products.images[i] = Imgs[i].name;
    //     this.products.images[i] = {
    //       image: Imgs[i].name,
    //       product_id: this.ProductID.id,
    //       is_cover: i === 0 ? 1 : 0,
    //     };
    //   }
    //   console.log(this.products.images);
    // },
  },
};
</script>
<style></style>
