<template>
  <md-card>
    <div class="create">
      <div id="su" class="alert alert-success" role="alert">
        {{ Massage_success }} .
      </div>
      <svg
        id="sp"
        class="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
      <div
        id="m"
        style="cursor:pointer"
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
        @click="close()"
      >
        {{ Massage_warning }} .
        <!-- <button
          type="button"
          class="btn-close"
          @click="close()"
          aria-label="Close"
        ></button> -->
      </div>
      <!-- tab -->
      <div class="title_form">
        <div class="lng">
          <h4>Brand Form</h4>
          <div class="divlang">
            <select name="" id="" v-model="lang" @change="handleChange($event)">
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>
      </div>
      <hr style="color: #fff;opacity: 0.5;" />
      <div class="parent"></div>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">Name </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01 "
            v-model="Brands.brand[1].name"
            minlength="4"
            v-if="lang == 'ar'"
            required
          />
          <input
            type="text"
            class="form-control"
            id="validationCustom01 "
            v-model="Brands.brand[0].name"
            minlength="4"
            required
            v-else
          />

          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom02" class="form-label"
            >Description
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02 short"
            minlength="15"
            v-model="Brands.brand[1].description"
            v-if="lang == 'ar'"
            required
          />
          <input
            type="text"
            class="form-control"
            minlength="15"
            id="validationCustom02 short"
            v-model="Brands.brand[0].description"
            required
            v-else
          />
          <div id="error">
            Error! The description field must be filled with at least 15
            characters
          </div>
          <div class="valid-feedback" id="good">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">Slug</label>
          <input
            type="text"
            class="form-control"
            minlength="4"
            id="validationCustom03"
            v-model="Brands.slug"
            required
          />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
      </form>
      <form
        @submit="formSubmit"
        enctype="multipart/form-data"
        style="margin-top: 10px;"
      >
        <UploadImages @changed="handleImages" />
        <button class="btn btn-primary btn-block" style="margin-top: 10px;">
          Upload
        </button>
        <h2 v-if="Progress !== 0" style="opacity: .7;">
          Progress : <span style="color: green;">{{ Progress }} %</span>
        </h2>
      </form>
      <div class="child_4">
        <md-button
          :data-background-color="'blue'"
          @click="postBrand()"
          class="btn"
          id="btnAdd"
          >Add</md-button
        >
      </div>
    </div>
  </md-card>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import UploadImages from "vue-upload-drop-images";
export default {
  name: "NewBrandForm",
  components: {
    UploadImages,
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
      Massage_success: "",
      Massage_warning: "",
      statusnumber: null,
      error: "",
      Progress: 0,
      file: [],
      lang1: lang1,
      lang: lang,
      Brands: {
        brand: [
          {
            local: "en",
            name: "",
            description: "",
          },
          {
            local: "ar",
            name: "",
            description: "",
          },
        ],
        slug: "",
        is_active: 1,
        image: "",
      },
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
      brands: (state) => state.All.Brands,
    }),
  },
  mounted() {
    this.$store.dispatch("loadBrands");

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
          "click",
          function(event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add("was-validated");
              // console.log(document.querySelectorAll("short").length);
            }
          },
          false
        );
      });
    })();
  },
  methods: {
    handleImages(e) {
      this.file = e[0];
      console.log(e[0]);
    },
    formSubmit(e) {
      var self = this;
      e.preventDefault();
      let data = new FormData();
      data.append("image", this.file, this.file.name);

      document.getElementById("sp").classList.toggle("cvs");
      axios
        .post(`/api/brands/upload`, data, {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "Upload Progress : " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
            self.Progress = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
          },
        })
        .then(function(res) {
          console.log(res);
          if (res.status == 201 || res.status == 200) {
            self.Brands.image = localStorage.getItem("server") + "/" + res.data;
            console.log(
              "image",
              localStorage.getItem("server") + "/" + res.data
            );
            document.getElementById("sp").classList.toggle("cvs");
            self.Massage_success = "Upload Success ";
            document.getElementById("su").classList.toggle("cvs");
            setTimeout(() => {
              document.getElementById("su").classList.toggle("cvs");
            }, 2000);
          } else {
            document.getElementById("sp").classList.toggle("cvs");
            self.Massage_warning = "Error : " + res.statusText;
            document.getElementById("m").classList.toggle("cvs");
          }
        })
        .catch(function(error) {
          if (error.response) {
            document.getElementById("sp").classList.toggle("cvs");
            console.log(error.response.data);
            self.Massage_warning = "Error : " + error.response.data.message;
            document.getElementById("m").classList.toggle("cvs");
          }
        });
    },
    close() {
      document.getElementById(`m`).classList.toggle("cvs");
    },
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
    },
    postBrand() {
      var self = this;
      var length = length;
      if (this.Brands.brand[1].name == "") {
        this.Massage_warning =
          "Please enter the name field in Arabic because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else if (this.Brands.brand[0].name == "") {
        this.Massage_warning =
          "Please enter the name field in English because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else if (this.Brands.brand[1].description == "") {
        this.Massage_warning =
          "Please enter the description field in Arabic because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else if (this.Brands.brand[0].description == "") {
        this.Massage_warning =
          "Please enter the description field in English because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else if (this.Brands.slug == "") {
        this.Massage_warning =
          "Please enter the slug field because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else if (this.Brands.image == "") {
        this.Massage_warning =
          "Please choose a picture and upload it because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else {
        if (document.querySelectorAll("short").length < 15) {
          document.getElementById("error").style.display = "block";
          document.getElementById("good").style.display = "none";
        }
        document.getElementById("sp").classList.toggle("cvs");
        axios
          .post(
            "http://edalili.e-dalely.com/public/api/brands/create",
            this.Brands
          )
          .then(function(response) {
            console.log(response.data);
            if (response.data.stateNum == 201 || self.statusnumber == 200) {
              document.getElementById("sp").classList.toggle("cvs");
              self.statusnumber = response.data.stateNum;
              self.Massage_success = "Create Category Request Success";
              document.getElementById("su").classList.toggle("cvs");
              setTimeout(() => {
                self.$router.push({ name: "Brands" });
              }, 2000);
            } else {
              document.getElementById("sp").classList.toggle("cvs");
              self.Massage_warning = "Error : " + response.data.msg;
              document.getElementById("m").classList.toggle("cvs");
            }
          })
          .catch(function(error) {
            if (error.response) {
              document.getElementById("sp").classList.toggle("cvs");
              console.log(error.response.data);
              self.Massage_warning = "Error : " + error.response.data.message;
              document.getElementById("m").classList.toggle("cvs");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #ddd;
}
.child_4 {
  box-shadow: 1px 1px 10px #09b2c7;
  border-radius: 5px;
  margin: 20px 0;
  transition: all 0.5s;
}
.child_4:hover {
  box-shadow: 2px 2px 20px #0d6efd;
}
.lng {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.lng h4 {
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #158a8ade;
  padding: 10px;
}
.create {
  padding: 20px;
  height: auto;
  width: 100%;
  text-align: center;
  position: relative;
}

.divlang {
  cursor: pointer;
  padding: 5px 0;
}
.divlang select {
  border: none;
  height: 3.3rem;
  cursor: pointer;
  color: #fff;
  border: 1px solid #dbd9d9;
  background-color: #1cc3d5;
  width: 150px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

/* images */
.image {
  margin-top: 30px;
}
.container {
  width: 100%;
  height: 200px;
  background: #f7fafc;
  border: 0.5px solid #a3a8b1;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  align-items: center;
}
.imgupload {
  width: 1000px;
  max-height: 800px;
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
#error {
  display: none;
  color: red;
  font-size: 13px;
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
<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
  position: absolute;
  z-index: 50;
  top: 50%;
  left: 50%;
  visibility: hidden;
}
.spin-hide {
  display: none;
}
@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite,
    colors ($duration * 4) ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
.alert-danger {
  position: fixed !important;
  width: 75%;
  height: 150px;
  visibility: hidden;
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  left: 20%;
  z-index: 5;
}
.alert-success {
  visibility: hidden;
  position: fixed !important;
  width: 75%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  font-size: 20px;
  left: 20%;
}
.cvs {
  visibility: visible !important;
}
</style>
