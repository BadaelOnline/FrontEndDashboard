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
          <h4>Category Form</h4>
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
            id="validationCustom01"
            v-model="custom_fields.custom_field[0].name"
            v-if="lang == 'ar'"
            required
          />
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="custom_fields.custom_field[1].name"
            required
            v-else
          />

          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label"> Description</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="custom_fields.custom_field[0].description"
            v-if="lang == 'ar'"
            required
          />
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="custom_fields.custom_field[1].description"
            required
            v-else
          />

          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
        <div v-for="(item,index) in custom_fields.CustomFieldValues.length" :key="index.ps"> 
           
          <label for="validationCustom01" class="form-label"> Value</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="custom_fields.CustomFieldValues[custom_fields.CustomFieldValues.length-(index+1)].value"
            required
          />
          <button v-if="custom_fields.CustomFieldValues.length - index == 1"
          class="add_value" @click="addValue">Add New Vlue</button>
          </div> 
         
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>     
       
      </form>
   
      <div class="child_4">
        <md-button
          :data-background-color="'blue'"
          @click="postCustom_fields()"
          class="btn"
          id="btnAdd"
          >Add</md-button
        >
      </div>
    </div>
  </md-card>
</template>

<script>

import axios from "axios";

export default {
  name: "NewCustomeForm",
  components: {
   
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      Massage_success: "",
      Massage_warning: "",
      statusnumber: null,
      error: "",
      Progress: 0,
      lang: lang,
      
      custom_fields:{
    "custom_field": [
        {
            "local": "ar",
            "name": "",
            "description": ""
        },
        {
            "local": "en",
            "name": "",
            "description": ""
        },
        {
            "local": "fr",
            "name": "color",
            "description": "efGSDFGSfBsrn"
        }
    ],
    "CustomFieldValues": [
        {
            "value": ""
        }
    ],
    "image": "asdasdasd",
    "is_active": 1
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
    
  },
  mounted() {
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
            }
          },
          false
        );
      });
    })();
  },
  methods: {
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
    },
    addValue(){
          this.custom_fields.CustomFieldValues.push({'value':''});
          
        },
    close() {
      document.getElementById(`m`).classList.toggle("cvs");
    },
    postCustom_fields() {
      var self = this;

      if (this.custom_fields.custom_field[0].name == "") {
        this.Massage_warning =
          "Please enter the name field in Arabic because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } else if (this.custom_fields.custom_field[1].name == "") {
        this.Massage_warning =
          "Please enter the name field in English because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      }
      else if (this.custom_fields.custom_field[0].description == "") {
        this.Massage_warning =
          "Please enter the description field in English because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      }
      else if (this.custom_fields.custom_field[1].description == "") {
        this.Massage_warning =
          "Please enter the description field in English because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } 
       else if (this.custom_fields.CustomFieldValues[0].value  == "") {
        this.Massage_warning =
          "Please enter the Value field because it is required";
        document.getElementById(`m`).classList.toggle("cvs");
      } 
      else {
        document.getElementById("sp").classList.toggle("cvs");
        axios
          .post(
            "/api/customfields/create",
            this.custom_fields
          )
          .then(function(response) {
            console.log(response.data);
            if (response.data.stateNum == 201 || self.statusnumber == 200) {
              document.getElementById("sp").classList.toggle("cvs");
              self.statusnumber = response.data.stateNum;
              self.Massage_success = "Create CustomeFeilds Request Success";
              document.getElementById("su").classList.toggle("cvs");
              setTimeout(() => {
                self.$router.push({ name: "CustomeFeilds" });
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
label{
  font-weight: bold;
  opacity: .8;
}
.add_value{
  border: none;
  color: #fff;
  background-color: blueviolet;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
}
.container{
 display: flex;
justify-content: center;
}
input {
  border: 1px solid #ddd;
  border-bottom: none;
}
.was-validated input{
  border-bottom: 1px solid;
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
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
.lng {
  display: grid;
}
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
  opacity: 0.9;
  font-weight: bold;
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
  opacity: 0.9;
  font-weight: bold;
}
.cvs {
  visibility: visible !important;
}
</style>
