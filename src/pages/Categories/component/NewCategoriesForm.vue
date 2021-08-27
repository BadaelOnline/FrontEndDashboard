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
          <div class="image">
            <div>
              <div
                class="container"
                @dragover.prevent="dragOver"
                @dragleave.prevent="dragLeave"
                @drop.prevent="drop($event)"
              >
                <div class="drop" v-show="dropped == 2"></div>
                <!-- Error Message -->
                <div v-show="error" class="error">
                  {{ error }}
                </div>

                <!-- To inform user how to upload image -->
                <div v-show="Imgs.length == 0" class="beforeUpload">
                  <input
                    type="file"
                    style="z-index: 1"
                    accept="image/*"
                    ref="uploadInput"
                    @change="previewImgs"
                    multiple
                  />
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>Upload Image</title>
                    <g id="Upload_Image" data-name="Upload Image">
                      <g id="_Group_" data-name="&lt;Group&gt;">
                        <g id="_Group_2" data-name="&lt;Group&gt;">
                          <g id="_Group_3" data-name="&lt;Group&gt;">
                            <circle
                              id="_Path_"
                              data-name="&lt;Path&gt;"
                              cx="18.5"
                              cy="16.5"
                              r="5"
                              style="
                    fill: none;
                    stroke: #303c42;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                            />
                          </g>
                          <polyline
                            id="_Path_2"
                            data-name="&lt;Path&gt;"
                            points="16.5 15.5 18.5 13.5 20.5 15.5"
                            style="
                  fill: none;
                  stroke: #303c42;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                          />
                          <line
                            id="_Path_3"
                            data-name="&lt;Path&gt;"
                            x1="18.5"
                            y1="13.5"
                            x2="18.5"
                            y2="19.5"
                            style="
                  fill: none;
                  stroke: #303c42;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                          />
                        </g>
                        <g id="_Group_4" data-name="&lt;Group&gt;">
                          <polyline
                            id="_Path_4"
                            data-name="&lt;Path&gt;"
                            points="0.6 15.42 6 10.02 8.98 13"
                            style="
                  fill: none;
                  stroke: #303c42;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                          />
                          <polyline
                            id="_Path_5"
                            data-name="&lt;Path&gt;"
                            points="17.16 11.68 12.5 7.02 7.77 11.79"
                            style="
                  fill: none;
                  stroke: #303c42;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                          />
                          <circle
                            id="_Path_6"
                            data-name="&lt;Path&gt;"
                            cx="8"
                            cy="6.02"
                            r="1.5"
                            style="
                  fill: none;
                  stroke: #303c42;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                          />
                          <path
                            id="_Path_7"
                            data-name="&lt;Path&gt;"
                            d="M19.5,11.6V4A1.5,1.5,0,0,0,18,2.5H2A1.5,1.5,0,0,0,.5,4V15A1.5,1.5,0,0,0,2,16.5H13.5"
                            style="
                  fill: none;
                  stroke: #303c42;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <p class="mainMessage">
                    {{
                      uploadMsg
                        ? uploadMsg
                        : "Click to upload or drop your images here"
                    }}
                  </p>
                </div>
                <div class="imgsPreview" v-show="Imgs.length > 0">
                  <button type="button" class="clearButton" @click="reset">
                    {{ clearAll ? clearAll : "clear All" }}
                  </button>

                  <div class="imageHolder" v-for="(img, i) in Imgs" :key="i">
                    <img :src="img" />
                    <label>{{ files[0].name }}</label>
                    <span
                      class="delete"
                      style="color: white"
                      @click="deleteImg(--i)"
                    >
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </span>
                    <div class="plus" @click="append" v-if="++i == Imgs.length">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <!-- <button @click="postImages()">save</button> -->
            </div>
          </div>

          <md-button
            :data-background-color="'blue'"
            @click="postCategory()"
            class="btn"
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
// import UploadImagesCategory from "./UploadImagesCategory.vue";
// import UploadCategoryImages from "./media/UploadCategoryImages.vue";
export default {
  name: "NewCategoryForm",
  components: {
    // UploadImagesCategory,
    // UploadCategoryImages,
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
      error: "",
      files: [],
      dropped: 0,
      Imgs: [],
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
        slug: null,
        parent_id: null,
        images: [
          {
            image: null,
            is_cover: 1,
          },
        ],
        section_id: null,
        lang_id: 1,
        created_at: null,
        updated_at: null,
      },
      // "https://img.lovepik.com/photo/50015/8348.jpg_wh860.jpg"
    };
  },
  props: {
    max: Number,
    uploadMsg: String,
    maxError: String,
    fileError: String,
    clearAll: String,
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
      axios
        .post("/api/categories/create", this.categories)
        .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          document.getElementById("alertt").classList.add("block1");
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
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
      } else if (this.categories.slug == null) {
        document.getElementById("error-message2").style.display = "block";
      } else if (this.categories.section_id == null) {
        document.getElementById("error-message3").style.display = "block";
      } else if (this.categories.parent_id == null) {
        document.getElementById("error-message4").style.display = "block";
      } else {
        console.log(JSON.stringify(this.categories));
        // this.$router.push({ name: "Categories" });
      }
    },
    // images
    dragOver() {
      this.dropped = 2;
    },
    dragLeave() {},
    drop(e) {
      let status = true;
      let files = Array.from(e.dataTransfer.files);
      if (e && files) {
        files.forEach((file) => {
          if (file.type.startsWith("image") === false) status = false;
        });
        if (status == true) {
          if (
            this.$props.max &&
            files.length + this.files.length > this.$props.max
          ) {
            this.error = this.$props.maxError
              ? this.$props.maxError
              : `Maximum files is` + this.$props.max;
          } else {
            this.files.push(...files);
            this.previewImgs();
          }
        } else {
          this.error = this.$props.fileError
            ? this.$props.fileError
            : `Unsupported file type`;
        }
      }
      console.log(files[0].name);
      this.dropped = 0;
    },
    append() {
      this.$refs.uploadInput.click();
    },
    readAsDataURL(file) {
      return new Promise(function(resolve, reject) {
        let fr = new FileReader();
        fr.onload = function() {
          resolve(fr.result);
        };
        fr.onerror = function() {
          reject(fr);
        };
        fr.readAsDataURL(file);
      });
    },
    deleteImg(index) {
      this.Imgs.splice(index, 1);
      this.files.splice(index, 1);
      this.$emit("changed", this.files);
      this.$refs.uploadInput.value = null;
    },
    previewImgs(event) {
      if (
        this.$props.max &&
        event &&
        event.currentTarget.files.length + this.files.length > this.$props.max
      ) {
        this.error = this.$props.maxError
          ? this.$props.maxError
          : `Maximum files is` + this.$props.max;
        return;
      }
      if (this.dropped == 0) this.files.push(...event.currentTarget.files);
      this.error = "";
      this.$emit("changed", this.files);
      let readers = [];
      if (!this.files.length) return;
      for (let i = 0; i < this.files.length; i++) {
        readers.push(this.readAsDataURL(this.files[i]));
      }
      Promise.all(readers).then((values) => {
        this.Imgs = values;
      });
      console.log(this.files);
      this.categories.images[0].image = this.files[0].name;
      // console.log(data);
    },
    reset() {
      this.$refs.uploadInput.value = null;
      this.Imgs = [];
      this.files = [];
      this.$emit("changed", this.files);
    },
    postImages() {
      axios.post("/api/categories/create", this.categories);
      console.log(JSON.stringify(this.categories));
      // this.$router.push({ name: "categories_dash" });
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
@media (max-width: 800px) {
  .parent {
    display: block;
  }
  .parent .child_1 {
    max-width: 90%;
    margin: auto;
  }
  .parent .child_4 {
    display: inline-grid;
    max-width: 100%;
    margin: auto;
  }
  .parent .child_4 .image {
    max-width: 70%;
    margin: 20px auto;
  }
  .parent .child_4 .btn {
    margin: auto;
  }
}
@media (max-width: 500px) {
  .parent .child_1 {
    max-width: 100%;
    margin: auto;
  }
  .parent .child_4 {
    display: inline-grid;
    max-width: 100%;
    margin: auto;
  }
  .parent .child_4 .image {
    max-width: 90%;
    margin: 20px auto;
  }
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
  /* bottom: 10px; */
  /* left: 20px; */
  padding: 20px;
  color: white;
  text-align: center;
  position: fixed;
  margin: auto;
  background-color: rgb(12, 99, 33);
  z-index: 1000;
  opacity: 0.8;
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
  width: 100%;
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
/* images */
.container {
  width: 100%;
  height: 100%;
  background: #f7fafc;
  border: 0.5px solid #a3a8b1;
  border-radius: 10px;
  padding: 30px;
  position: relative;
}
.drop {
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
  position: absolute;
  background-color: #f4f6ff;
  left: 0;
  border: 3px dashed #a3a8b1;
}
.error {
  text-align: center;
  color: red;
  font-size: 15px;
}
.beforeUpload {
  position: relative;
  text-align: center;
}
.beforeUpload input {
  width: 100%;
  margin: auto;
  height: 100%;
  opacity: 0;
  position: absolute;
  background: red;
  display: block;
}
.beforeUpload input:hover {
  cursor: pointer;
}
.beforeUpload .icon {
  width: 150px;
  margin: auto;
  display: block;
}
.imgsPreview .imageHolder {
  width: 150px;
  height: 150px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  margin: 5px 5px;
  display: inline-block;
}
.imgsPreview .imageHolder img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.imgsPreview .imageHolder .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 29px;
  height: 29px;
  color: #fff;
  background: red;
  border-radius: 50%;
}
.imgsPreview .imageHolder .delete:hover {
  cursor: pointer;
}
.imgsPreview .imageHolder .delete .icon {
  width: 66%;
  height: 66%;
  display: block;
  margin: 4px auto;
}
.imgsPreview .imageHolder .plus {
  color: #2d3748;
  background: #f7fafc;
  border-radius: 50%;
  font-size: 21pt;
  height: 30px;
  width: 30px;
  text-align: center;
  border: 1px dashed;
  line-height: 23px;
  position: absolute;
  right: -42px;
  bottom: 43%;
}
.plus:hover {
  cursor: pointer;
}
.clearButton {
  color: #2d3748;
  position: absolute;
  top: 7px;
  right: 7px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
