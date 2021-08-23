<template>
  <md-card>
    <div class="create">
      <!-- tab -->
      <div class="title_form">
        <h4>Category Form</h4>
      </div>
      <hr style="color: #fff;opacity: 0.5;" />
      <div class="parent">
        <!-- alert -->
        <div class="alert" id="alert" @click="hideerror()">
          <!-- <span
            class="closebtn"
            onclick="this.parentElement.style.display='none';"
            >&times;</span
          > -->
          <strong>One or more fields have an error!</strong>
          please check and try again...this fields is require
          <!-- </div> -->
          <div>One or more fields have an error!</div>
          <div>
            <span>this fields is require!</span>
          </div>
          <p>please check and try again</p>
        </div>
        <div class="alertt" id="alertt" @click="hidesucces()">
          <strong>Category New successfully</strong>
        </div>
        <div class="child_1">
          <div class="alertlang" id="alertlangen">
            <strong>Please enter your name in English also</strong>
          </div>
          <div class="alertlang" id="alertlangar">
            <strong>Please enter your name in Arabic also</strong>
          </div>
          <div class="depname">
            <md-field
              id="arabic"
              class="divname"
              data-background-color="dataBackgroundColor"
            >
              <label for="name">Name</label>
              <md-input
                v-if="lang == 'ar'"
                id="arabic"
                class="text required"
                v-model="categories.category[1].name"
              ></md-input>
              <md-input
                v-else
                id="english"
                class="text required"
                v-model="categories.category[0].name"
              ></md-input>
            </md-field>
            <div class="divlang">
              <select
                name=""
                id=""
                v-model="lang"
                @change="handleChange($event)"
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
          <div id="error-message1">name is a required field.</div>
          <!-- slug  -->
          <div class="depname">
            <md-field
              class="divname"
              data-background-color="dataBackgroundColor"
            >
              <label for="name">Slug</label>
              <md-input
                class="text required"
                v-model="categories.slug"
              ></md-input>
            </md-field>
          </div>
          <div id="error-message2">
            slug is a required field.
          </div>
          <!-- section -->
          <div
            class="md-layout-item md-size-80 selectdrop "
            id="error1"
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
            <div id="error-message3">
              section is a required field.
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
            <div id="error-message4">
              Category parent is a required field.
            </div>
          </div>
        </div>
        <div class="child_4">
          <UploadImagesCategory> </UploadImagesCategory>
          <md-button
            :data-background-color="'blue'"
            @click="postCategory()"
            class="toggle-disabled"
            id="btnAdd"
            >Add</md-button
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
    const lang = localStorage.getItem("lang") || "en";
    let lang1 = localStorage.getItem("lang1");
    return {
      lang1: lang1,
      lang: lang,
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
        slug: "null",
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
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      // window.location.reload();
    },
    hidelang() {
      document.getElementById("alertlang").style.display = "none";
    },
    hidesucces() {
      document.getElementById("alertt").style.display = "none";
      this.$router.push({ path: "/admin/categories" });
    },
    hideerror() {
      document.getElementById("alert").style.display = "none";
    },
    postCategory() {
      axios.post("/api/categories/create", this.categories);
      if (
        this.categories.category[0].name == null &&
        this.categories.category[1].name == null &&
        this.categories.section_id == null &&
        this.categories.parent_id == null
      ) {
        document.getElementById("alert").classList.add("block");
      } else if (
        this.categories.category[0].name == null &&
        this.categories.category[1].name == null
      ) {
        document.getElementById("error-message1").style.display = "block";
      } else if (this.categories.category[1].name == null) {
        document.getElementById("alertlangar").style.display = "block";
      } else if (this.categories.category[0].name == null) {
        document.getElementById("alertlangen").style.display = "block";
      } else if (this.categories.section_id == null) {
        document.getElementById("error-message3").style.display = "block";
      } else if (this.categories.parent_id == null) {
        document.getElementById("error-message4").style.display = "block";
      } else {
        console.log(JSON.stringify(this.categories));
        document.getElementById("alertt").classList.add("block1");
      }
    },
  },
};
</script>

<style scoped>
.create {
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
  width: 80%;
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
/*validation  */
#error-message1,
#error-message2,
#error-message3,
#error-message4 {
  display: none;
  color: red;
}
.alert {
  display: none;
  cursor: pointer;
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
  background-color: #1cc3d5;
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
#alertlangen,
#alertlangar {
  display: none;
  color: red;
}
.alertt {
  display: none;
  cursor: pointer;
  bottom: 10px;
  left: 20px;
  padding: 20px;
  color: white;
  text-align: center;
  position: fixed;
  background-color: rgb(12, 99, 33);
  z-index: 1000;
  width: 30%;
  font-size: 18px;
}
.block {
  display: block;
  text-align: center;
  position: fixed;
  margin: auto;
  background-color: red;
  z-index: 1000;
  color: #000;
  width: 40%;
  font-size: 18px;
  opacity: 1;
}
.block1 {
  display: flex;
  color: white;
  text-align: center;
  background-color: rgb(12, 99, 33);
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
</style>
