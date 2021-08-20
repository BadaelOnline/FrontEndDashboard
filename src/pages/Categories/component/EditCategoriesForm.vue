<template>
  <md-card>
    <div class="update">
      <!-- tab -->
      <div class="title_form">
        <h4>Category Form{{ CategoryID.name }}</h4>
      </div>
      <hr style="color: #fff;opacity: 0.5;" />
      <div class="title_lang nav">
        <h4
          id="title_lang1"
          @click="
            enlang();
            act();
          "
        >
          English(EN)
        </h4>
        <h4
          id="title_lang2"
          @click="
            arlang();
            act();
          "
        >
          Arabic - العربية(AR)
        </h4>
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
          <md-field
            id="arabic"
            class="md-layout-item md-size-80 "
            data-background-color="dataBackgroundColor"
          >
            <label for="name">Name</label>
            <md-input
              id="name"
              class="text required"
              :value="CategoryID.name"
            ></md-input>
          </md-field>
          <md-field
            id="english"
            class="md-layout-item md-size-80 "
            data-background-color="dataBackgroundColor"
          >
            <label for="name">Name</label>
            <md-input
              id="name"
              class="text required"
              :value="CategoryID.name"
            ></md-input>
          </md-field>
          <md-field
            class="md-layout-item md-size-80 "
            data-background-color="dataBackgroundColor"
          >
            <label for="name">Section</label>

            <md-select
              class="md-layout-item md-size-100 required"
              v-model="CategoryID.section_id"
              name="font"
              id="name"
              md-dense
            >
              <md-option
                class="text"
                v-for="item in sections"
                :key="item.id"
                :value="item.id"
                >{{ item.name }}</md-option
              >
            </md-select>
          </md-field>

          <md-field
            class="md-layout-item md-size-80 "
            data-background-color="dataBackgroundColor"
          >
            <label class="title" for="font">Categories Parent</label>
            <md-select
              class="md-layout-item md-size-100 required"
              v-model="CategoryID.parent_id"
              name="font"
              id="font"
              md-dense
            >
              <md-option
                class="text"
                v-for="category in Categories"
                :key="category.id"
                :value="category.id"
                >{{ category.name }}</md-option
              >
            </md-select>
            <md-input class="text"></md-input>
          </md-field>
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
// import axios from "axios";
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
    // updateCategory() {
    //   let lang = window.localStorage.getItem("lang1");
    //   axios.put(
    //     `/api/categories/update/${this.CategoryID.id}?lang=${lang}`,
    //     this.categories
    //   );
    //   if (
    //     this.categories.category[0].name == null ||
    //     this.categories.category[1].name == null ||
    //     this.categories.section_id == null ||
    //     this.categories.parent_id == null
    //   ) {
    //     document.getElementById("alert").classList.add("block");
    //     window.scrollTo(0, 20);
    //   } else {
    //     document.getElementById("alert").classList.remove("block");
    //     document.getElementById("alertt").classList.add("block");
    //     console.log(JSON.stringify(this.categories));
    //     this.$router.push({ name: "allCategories" });
    //   }
    // },
  },
};
</script>
<style scoped>
/* tab */
.update {
  padding: 20px;
}
.title_form {
  display: flex;
}
.title_form h4 {
  padding: 10px;
  opacity: 0.9;
}
.title_lang {
  display: flex;
  padding-left: 20px;
}
.title_lang h4 {
  padding: 10px;
  opacity: 0.7;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.act {
  color: #0040ff;
  /* background-color: #0040ff; */
}
.act::before {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  -webkit-transition: border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  transition: border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  transition: border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  transition: border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s,
    -webkit-transform 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  will-change: border, opacity, transform;
  content: " ";
  background-color: #377dff;
  width: 100%;
  height: 3px;
}
.nav_tabel {
  display: flex;
  justify-content: space-around;
}

.nav_tabel .child1,
.nav_tabel .child4,
.nav_tabel .child5 {
  width: 10% !important;
  display: flex;
  justify-content: center;
}

.nav_tabel .child2 {
  width: 30% !important;
  display: flex;
  justify-content: center;
}
.nav_tabel .child3 {
  width: 20% !important;
  display: flex;
  justify-content: center;
}
.nav_tabel .child6 {
  width: 30% !important;
  display: flex;
  justify-content: center;
}
/* form */
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
