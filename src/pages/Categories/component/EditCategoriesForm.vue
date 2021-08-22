<template>
  <md-card>
    <div class="update">
      <!-- tab -->
      <div class="title_form">
        <h4>Category Form</h4>
      </div>
      <hr style="color: #fff;opacity: 0.5;" />
      <div class="parent">
        <!-- alert -->
        <div class="alert" id="alert">
          <span
            class="closebtn"
            onclick="this.parentElement.style.display='none';"
            >&times;</span
          >
          <strong>One or more fields have an error!</strong>
          please check and try again...this fields is require
          <!-- </div> -->
          <div>One or more fields have an error!</div>
          <div>
            <span>this fields is require!</span>
          </div>
          <p>please check and try again</p>
        </div>
        <div class="alertt" id="alertt">
          <strong>Category New successfully</strong>
        </div>
        <div class="child_1">
          <div class="depname">
            <md-field
              id="arabic"
              class="divname"
              data-background-color="dataBackgroundColor"
            >
              <label for="name">Name</label>
              <md-input
                id="arabic"
                class="text required"
                v-model="categories.category[1].name"
              ></md-input>
              <md-input
                id="english"
                class="text required"
                v-model="categories.category[0].name"
              ></md-input>
            </md-field>
            <div class="divlang">
              <select name="" id="">
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
          <!-- section -->
          <div
            class="md-layout-item md-size-80 selectdrop"
            data-background-color="dataBackgroundColor"
          >
            <div class="select">
              <select v-model="categories.section_id">
                <option
                  value="Section"
                  selected="selected"
                  disabled
                  style="color:#000"
                  >Choose the section</option
                >
                <option
                  v-for="item in sections"
                  :key="item.id"
                  :value="item.id"
                  >{{ item.name }}</option
                >
              </select>
            </div>
          </div>
          <!-- category parent -->
          <div
            class="md-layout-item md-size-80 selectdrop"
            data-background-color="dataBackgroundColor"
          >
            <div class="select">
              <select v-model="categories.parent_id">
                <option
                  value="Section"
                  selected="selected"
                  disabled
                  style="color:#000"
                  >Choose the Categories Parent</option
                >
                <option
                  v-for="category in Categories"
                  :key="category.id"
                  :value="category.id"
                  >{{ category.name }}</option
                >
              </select>
            </div>
          </div>
        </div>
        <div class="child_4">
          <UploadImagesCategory> </UploadImagesCategory>
          <md-button
            :data-background-color="'blue'"
            @click="updateCategory()"
            class="toggle-disabled"
            id="btnAdd"
            >Update</md-button
          >
        </div>
      </div>
    </div>
  </md-card>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
import UploadImagesCategory from "./UploadImagesCategory.vue";
export default {
  name: "EditCategoryForm",
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
  // "https://img.lovepik.com/photo/50015/8348.jpg_wh860.jpg"
  computed: {
    ...mapState({
      Categories: (state) => state.All.Categories,
      CategoryID: (state) => state.All.CategoryID,
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    // this.$store.dispatch("loadCategory");
    this.$store.dispatch("loadCategory", this.$route.params.id);
    this.$store.dispatch("loadSections");
  },
  methods: {
    arlang() {
      localStorage.setItem("lang1", "ar");
    },
    enlang() {
      localStorage.setItem("lang1", "en");
    },
    act() {
      var ar = document.getElementById("title_lang2");
      var en = document.getElementById("title_lang1");
      var english = document.getElementById("english");
      var arabic = document.getElementById("arabic");
      if (localStorage.getItem("lang1") == "ar") {
        en.classList.remove("act");
        ar.classList.toggle("act");
        arabic.style.display = "block";
        english.style.display = "none";
      } else {
        ar.classList.remove("act");
        en.classList.toggle("act");
        arabic.style.display = "none";
        english.style.display = "block";
      }
    },
    // updateCategory() {
    // this.$store.dispatch("editCategory", this.CategoryID);
    // this.$router.push
    // },
    updateCategory() {
      let lang = window.localStorage.getItem("lang1");
      axios.put(
        `/api/categories/update/${this.CategoryID.id}?lang=${lang}`,
        this.CategoryID
      );
      // if (
      //   this.categories.category[0].name == null ||
      //   this.categories.category[1].name == null ||
      //   this.categories.section_id == null ||
      //   this.categories.parent_id == null
      // ) {
      //   document.getElementById("alert").classList.add("block");
      //   window.scrollTo(0, 20);
      // } else {
      //   document.getElementById("alert").classList.remove("block");
      //   document.getElementById("alertt").classList.add("block");
      console.log(JSON.stringify(this.CategoryID));
      // this.$router.push({ name: "allCategories" });
      // }
    },
  },
};
</script>
<style scoped>
/* tab */
.update {
  padding: 20px;
}
.parent {
  display: flex;
  width: 100%;
}
.parent .child_1 {
  width: 100%;
  height: 100px;
}
.md-field {
  border: 1px solid #d0cece;
}
.md-field label {
  padding-left: 10px;
}
.parent .child_4 {
  width: 100%;
}
/* name */
.depname {
  display: flex;
  width: 70%;
}
.divlang {
  cursor: pointer;
  padding: 5px 0;
}
.divlang select {
  border: none;
  height: 3.3rem;
  cursor: pointer;
  color: #dbd9d9;
  border: 1px solid #dbd9d9;
  background-color: #1cc3d5;
}
/*  */
/* select */
.selectdrop {
  float: left;
  padding-left: 0;
}
.select select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  color: #000;
  border: 1px solid #dbd9d9;
  background-image: none;
  cursor: pointer;
}
/* Remove IE arrow */
.select select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  left: 0;
  position: relative;
  display: flex;
  width: 25em;
  height: 4em;
  border-radius: 0.25em;
  overflow: hidden;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.2em;
  color: #dbd9d9;
  background-color: #1cc3d5;
  transition: 0.25s all ease;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #fff;
}
/*  */
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
.alert div {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.alertt {
  display: none;
  padding: 20px;
  background-color: #00b618;
  color: white;
}
.block {
  display: block;
  text-align: center;
  position: fixed;
  margin: auto;
  background-color: rgb(112, 13, 13);
  z-index: 1000;
  color: #000;
  width: 40%;
  font-size: 18px;
}
.block1 {
  display: block;
  text-align: center;
  position: fixed;
  margin: auto;
  background-color: rgb(12, 99, 33);
  z-index: 1000;
  color: #000;
  width: 40%;
  font-size: 18px;
}
.closebtn {
  background-color: #fff;
  width: 20px;
}
.alert div:first-of-type {
  animation: showup 7s infinite;
}

.alert div:last-of-type {
  width: 0px;
  animation: reveal 7s infinite;
}

.alert div:last-of-type span {
  margin-left: -355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 355px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 355px;
  }
}

.alert p {
  font-size: 12px;
  color: #999;
  /* margin-top: 200px; */
}
</style>
