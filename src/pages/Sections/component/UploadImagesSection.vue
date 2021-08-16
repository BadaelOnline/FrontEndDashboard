<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <UploadImage class="upload_img" :max="1" />
      <!-- <md-button class="md-round md-success"></md-button> -->
    </md-card-content>
  </md-card>
</template>
<script>
import UploadImage from "vue-upload-drop-images";
import { mapState } from "vuex";
import axios from "axios";

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
  data() {
    return {
      files: [],
      Brands: {
        brands: [
          {
            name: "jhjjhjh",
            description: "jbjb",
            locale: "en",
            language_id: 1,
          },
          {
            name: ",ljlkjlkj",
            description: "knjlnlk",
            locale: "fr",
            language_id: 1,
          },
          {
            name: null,
            description: null,
            locale: "ar",
            language_id: 1,
          },
        ],
        slug: "gfvghf",
        is_active: 1,
        image: null,
        lang_id: 1,
      },
    };
  },
  methods: {
    // Pushes posts to the server when called.
    postsections() {
      axios.post("/api/sections/create", this.Brands);
      console.log(JSON.stringify(this.Brands));
      this.$router.push({ name: "loadBrands" });
    },
    handleImages() {
      console.log("file is drag");
    },
    // handleImages(Imgs) {
    //     this.categories.image = 'http://localhost:8081/img/' + Imgs[0].name;
    //     for (var i = 0; i < Imgs.length; i++) {
    //         this.categories.images[i] = Imgs[i].name;
    //         this.categories.images[i] = {
    //             image: Imgs[i].name,
    //             product_id: this.CategoryID.id,
    //             is_cover: i === 0 ? 1 : 0,
    //         };
    //     }
    //     console.log(this.categories.images);
    // },
  },
  computed: {
    ...mapState({
      sections: (state) => state.All.sections,
      SectionID: (state) => state.All.SectionID,
    }),
  },
  mounted() {
    this.$store.dispatch("loadSections");
    this.$store.dispatch("loadSection", this.$route.params.id);
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
