<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">New Category</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>
      <md-card-content>
        <div>
          <div class="alert" id="alert">
            <span
              class="closebtn"
              onclick="this.parentElement.style.display='none';"
              >&times;</span
            >
            <strong>Danger!</strong> You must fill in all fields.
          </div>
          <div class="alertt" id="alertt">
            <span
              class="closebtn"
              onclick="this.parentElement.style.display='none';"
              >&times;</span
            >
            <strong>Good</strong> "operation accomplished successfully.
          </div>

          <div class="md-layout md-size-100">
            <div class="md-layout-item  md-size-50">
              <div class="md-layout-item  md-size-100">
                <md-card-header data-background-color="dataBackgroundColor">
                  <h4 class="title">Name</h4>
                </md-card-header>
                <md-field class="md-layout-item md-size-100">
                  <div class="md-layout-item md-size-70">
                    <label>Name</label>
                    <md-input
                      v-if="lang1 == 'ar'"
                      v-model="categories.category[1].name"
                    ></md-input>
                    <md-input
                      v-else-if="lang1 == 'en'"
                      v-model="categories.category[0].name"
                    ></md-input>
                  </div>
                  <select
                    class="cu_1 md-layout-item md-size-30"
                    v-model="lang1"
                    @change="handleChange1($event)"
                  >
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </md-field>
              </div>
              <div class="md-layout-item  md-size-100">
                <md-card-header data-background-color="dataBackgroundColor">
                  <h4 class="title">Section</h4>
                </md-card-header>
                <div class="md-layout-item  md-size-60">
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
              </div>
              <div class="md-layout-item md-size-100">
                <md-card-header data-background-color="dataBackgroundColor">
                  <h4 class="title">Categories Parent</h4>
                </md-card-header>
                <div class="md-layout-item md-size-60">
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
              </div>
            </div>
            <div class="md-layout-item md-size-50">
              <div class="md-layout-item md-size-100">
                <div class="md-layout-item md-size-100">
                  <UploadImagesCategory> </UploadImagesCategory>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout md-medium-size-100 ">
            <md-button @click="postCategory()">Add</md-button>
          </div>
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
      if (
        this.categories.category[0].name == null ||
        this.categories.category[1].name == null ||
        this.categories.section_id == null ||
        this.categories.parent_id == null
      ) {
        document.getElementById("alert").classList.add("block");
        // document.getElementById("alert").scrollTop
        window.scrollTo(0, 0);
      } else {
        document.getElementById("alert").classList.remove("block");
        document.getElementById("alertt").classList.add("block");
        console.log(JSON.stringify(this.categories));
        this.$router.push({ name: "allCategories" });
      }
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
.md-layout-item.md-size-100 {
  min-width: 100%;
  max-width: 100%;
  margin-left: 0 !important;
  flex: 1 1 100%;
  margin: 60px;
}
.md-layout-item.md-size-60 {
  min-width: 60%;
  max-width: 60%;
  flex: 0 1 60%;
  /* padding: 20px; */
  margin: auto;
}
.md-menu.md-select {
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: #94db464a;
}
.alert {
  display: none;
  padding: 20px;
  transition: all 0.5s;
  border: 0;
  margin: 20px;
  gap: 20px;
  border-radius: 0;
  position: relative;
  padding: 20px 15px;
  line-height: 20px;
  margin-bottom: 20px;
  background-color: red;
  color: #ffffff;
  border-radius: 3px;
  -webkit-box-shadow: 0 12px 20px -10px rgb(153 153 153 / 28%),
    0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(153 153 153 / 20%);
  box-shadow: 0 12px 20px -10px rgb(153 153 153 / 28%),
    0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(153 153 153 / 20%);
}
.alertt {
  display: none;
  padding: 20px;
  background-color: #00b618;
  color: white;
}
.block {
  display: flex;
  background-color: red;
}
</style>
