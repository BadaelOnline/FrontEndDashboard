<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">New Brand</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Name</label>
              <md-input v-model="Brands.brands[1].name"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Description</label>
              <md-input
                v-model="Brands.brands[1].description"
                type="text"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-button @click="postBrands()">Add</md-button>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Image</label>
              <md-input
                v-model="categories.image"
                type="email"
                placeholder="Size"
              ></md-input>
            </md-field>
          </div> -->
          <!-- Brand -->
          <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Brand</h4>
          </md-card-header>
            <Brands></Brands>
        </md-card>
      </div> -->
          <!-- Categories -->
          <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Categories</h4>
          </md-card-header>
            <Categories></Categories>
        </md-card>
      </div> -->
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "NewBrandForm",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      Brands: {
    "brands": [
        {
            "locale": "ar",
            "name": "ar",
            "description": "ar ar"
        },
        {
            "locale": "en",
            "name": null,
            "description": null
        },
        {
            "locale": "fr",
            "name": "fr",
            "description": "fr fr"
        }
    ],
    "slug": "mobiles",
    "is_active": 1,
    "images": [
        {
            "image": "{{IMG-20170318-WA0000.jpg}}",
            "is_cover": 1
        },
        {
            "image": "{{asdasasd}}",
            "is_cover": 0
        },
        {
            "image": "{{asdasddsds}}",
            "is_cover": 0
        }
    ]
},
    };
  },
  computed: {
    ...mapState({
      Brands: (state) => state.All.Brands,
    }),
  },
  mounted() {
    this.$store.dispatch("loadBrands");
  },
  methods: {
    postBrands() {
      axios.post(
        "http://edalili.e-dalely.com/public/api/brands/create",
        this.Brands
      );
      console.log(JSON.stringify(this.Brands));
    },
  },
};
</script>

<style scoped></style>
