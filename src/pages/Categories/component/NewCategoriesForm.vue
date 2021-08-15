<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">New Category</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>

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
                  <md-input
                    v-if="lang1 == 'ar'"
                    v-model="categories.category[1].name"
                  ></md-input>
                  <md-input
                    v-else-if="lang1 == 'en'"
                    v-model="categories.category[0].name"
                  ></md-input>
                  <select
                    class="cu_1"
                    v-model="lang1"
                    @change="handleChange1($event)"
                  >
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </md-field>
              </div>
              <md-button
                class="md-raised md-primary"
                :data-background-color="'green'"
                @click="setDone('first', 'second')"
                >Next</md-button
              >
            </md-step>
            <!-- section -->
            <md-step
              id="second"
              md-label="Second Step"
              :md-error="secondStepError"
              :md-done.sync="second"
            >
              <md-card-header data-background-color="dataBackgroundColor">
                <h4 class="title">Section</h4>
              </md-card-header>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label for="font">Section</label>
                  <md-select
                    v-model="categories.section_id"
                    name="font"
                    id="font"
                    md-dense
                  >
                    <md-option
                      v-for="item in sections"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.name }}</md-option
                    >
                  </md-select>
                </md-field>
              </div>
              <md-button
                class="md-raised md-primary"
                @click="setDone('second', 'third')"
                :data-background-color="'green'"
                >Next</md-button
              >
            </md-step>
            <!-- category -->

            <md-step
              id="third"
              md-label="third Step"
              :md-error="thirdStepError"
              :md-done.sync="third"
            >
              <md-card-header data-background-color="dataBackgroundColor">
                <h4 class="title">Categories Parent</h4>
              </md-card-header>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <md-select
                    v-model="categories.parent_id"
                    name="font"
                    id="font"
                    md-dense
                  >
                    <md-option
                      v-for="category in Categories"
                      :key="category.id"
                      :value="category.id"
                      >{{ category.name }}</md-option
                    >
                  </md-select>
                </md-field>
              </div>
              <md-button
                class="md-raised md-primary"
                @click="setDone('third', 'four')"
                :data-background-color="'green'"
                >Next</md-button
              >
            </md-step>
            <!--  -->
            <md-step id="four" md-label="four Step" :md-done.sync="four">
              <div class="md-layout-item md-medium-size-100">
                <UploadImagesCategory> </UploadImagesCategory>
              </div>
              <md-button
                @click="
                  postCategory();
                  setDone('four');
                "
                class="md-raised md-primary"
                :data-background-color="'green'"
                >Add</md-button
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
import UploadImagesCategory from "./UploadImagesCategory.vue";
export default {
  name: "NewCategoryForm",
  components: {
    UploadImagesCategory,
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    let lang1 = window.localStorage.getItem("lang1");
    return {
      lang1: lang1,
      active: "first",
      first: false,
      second: false,
      third: false,
      four: false,
      secondStepError: null,
      thirdStepError: null,
      categories: {
        category: [
          {
            name: null,
            local: "en",
            language_id: 1,
          },
          {
            name: null,
            local: "ar",
            language_id: 1,
          },
        ],
        is_active: 1,
        slug: "hbjhk",
        parent_id: null,
        images: [
          {
            image: "https://img.lovepik.com/photo/50015/8348.jpg_wh860.jpg",
            is_cover: 1,
          },
        ],
        section_id: null,
        lang_id: 1,
        created_at: null,
        updated_at: null,
      },
    };
  },
  computed: {
    ...mapState({
      Categories: (state) => state.All.Categories,
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadSections");
  },
  methods: {
    handleChange1(event) {
      localStorage.setItem("lang1", event.target.value);
    },
    postCategory() {
      axios.post("/api/categories/create", this.categories);
      console.log(JSON.stringify(this.categories));
      this.$router.push({ name: "allCategories" });
    },
    setDone(id, index) {
      this[id] = true;

      this.secondStepError = null;

      if (index) {
        this.active = index;
      }
    },
    setError() {
      this.secondStepError = "This is an error!";
    },
  },
};
</script>

<style scoped>
.md-layout-item.md-size-33 {
  min-width: 100%;
  max-width: 100%;
  flex: 0 1 33.3333%;
}
.md-steppers-navigation {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  display: flex;
  gap: 10px;
  margin: 20px auto;
}
.md-menu.md-select {
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: #94db464a;
}
</style>
