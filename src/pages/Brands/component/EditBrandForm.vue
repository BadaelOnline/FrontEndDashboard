<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">edit Brand</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>
      <!-- name -->
      <md-card-content>
        <div>
          <md-steppers :md-active-step.sync="active" md-linear>
            <md-step
              id="first"
              md-label="First Step"
              md-description="Optional"
              :md-done.sync="first"
            >
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Name</label>
                  <md-input v-model="Brands.brands[2].name"></md-input>
                </md-field>
              </div>
              <md-button
                class="md-raised md-primary"
                :data-background-color="'green'"
                @click="setDone('first', 'second')"
                >Next</md-button
              >
            </md-step>
            <!-- Description -->
            <md-step
              id="second"
              md-label="Second Step"
              :md-error="secondStepError"
              :md-done.sync="second"
            >
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Description</label>
                  <md-input v-model="Brands.brands[2].description"></md-input>
                </md-field>
              </div>
              <md-button
                class="md-raised md-primary"
                @click="setDone('second', 'third')"
                :data-background-color="'green'"
                >Next</md-button
              >
            </md-step>
            <!--  -->
            <md-step id="third" md-label="third Step" :md-done.sync="third">
              <div class="md-layout-item md-medium-size-100">
                <UploadImagesCategory> </UploadImagesCategory>
              </div>
              <md-button
                @click="
                  updateBrands();
                  setDone('third');
                "
                class="md-raised md-primary"
                :data-background-color="'green'"
                >Update</md-button
              >
            </md-step>
          </md-steppers>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "EditBrandForm",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: "first",
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      thirdStepError: null,
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
  computed: {
    BrandID: (state) => state.All.BrandID,
  },
  mounted() {
    this.$store.dispatch("loadBrand", this.$route.params.id);
  },
  methods: {
    updateBrands() {
      axios.put(
        `http://admin.e-dalely.com/public/api/brands/update/${this.BrandID.id}`,
        this.Brands
      );
      console.log(JSON.stringify(this.Brands));
      this.$router.push({ name: "allBrands" });
    },
  },
};
</script>

<style scoped></style>
