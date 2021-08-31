<template>
  <md-card>
    <div class="create">
              <div  id="su" class="alert alert-success" role="alert">
 {{Massage_success}} .
</div> 
<svg  id="sp" class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>
<div id="m" class="alert alert-danger alert-dismissible fade show" role="alert">
  {{Massage_warning}} .
  <button type="button" class="btn-close" @click="close()" aria-label="Close"></button>
</div>
      <!-- tab -->
      <div class="title_form">
        <div class="lng">
      <h4>Category Form</h4>
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
       
      </div>
      <hr style="color: #fff;opacity: 0.5;" />
     <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    
    <label for="validationCustom01" class="form-label">Name </label>
    <input type="text" class="form-control" id="validationCustom01" 
    v-model="categories.category[1].name"  v-if="lang == 'ar'" required>
     <input type="text" class="form-control" id="validationCustom01"   
     v-model="categories.category[0].name" required  v-else>
  
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom02" class="form-label">Slug</label>
    <input type="text" class="form-control" id="validationCustom02" v-model="categories.slug" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-md-6">
    <label for="validationCustom04" class="form-label">section_id</label>
    <select class="form-select" id="validationCustom04"  v-model="categories.section_id" required>
      <option selected disabled value="">Choose...</option>
       <option
                  v-for="item in sections"
                  :key="item.id"
                  :value="item.id"
                  >{{ item.name }}
      </option >
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
 
  <div class="col-md-6">
    <label for="validationCustom04" class="form-label">parent_id </label>
    <select class="form-select" id="validationCustom04" v-model="categories.parent_id" required>
      <option selected disabled value="">Choose...</option>
      <option 
                  v-for="category in Categories"
                  :key="category.id"
                  :value="category.id"
                  >{{ category.name }}
      </option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>

</form>
        <div class="child_4">
          <div class="image">
            <div>
              <div id="error-message5">
                images is a required field.
              </div>
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
                  <img
                    class="imgupload"
                    src=""
                  /> 
                  <!-- ../../../../public/img/uploadimg.png  -->
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
                    <!-- <label>{{ files[0].name }}</label> -->
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
        </div>
      
      <md-button
        :data-background-color="'blue'"
        @click="updateCategory()"
        class="toggle-disabled"
        id="btnAdd"
        >Update</md-button
      >
    </div>
  </md-card>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
// import UploadImagesCategory from "./UploadImagesCategory.vue";
export default {
  name: "EditCategoryForm",
  components: {
    // UploadImagesCategory,
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
     Massage_warning:"",
      statusnumber: null,
      lang1: lang1,
      lang: lang,
      error: "",
      files: [],
      dropped: 0,
      Imgs: [],
      categories: {
        "category": [
          {
            "name": "",
            "local": "en",
            "language_id": 1
          },
          {
            "name": "",
            "local": "ar",
            "language_id": 1
          }
        ],
        "is_active": 1,
        "slug": "",
        "parent_id": "",
        "images": [
          {
            "image": "",
            "is_cover": 1
          }
        ],
        "section_id": "",
        "lang_id": 1,
        "created_at": "13",
        "updated_at": "14"
      }
      // CategoryId,
    };
  },
  props: {
    max: Number,
    uploadMsg: String,
    maxError: String,
    fileError: String,
    clearAll: String,
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
    this.$store.dispatch("loadSections");
     this.fetch();
        // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
           form.classList.add('was-validated')
          
        }

       
      }, false)
    })
})()
  },
  
  methods: {
      close(){
          document.getElementById(`m`).classList.toggle('cvs');
     },
    fetch() {
     axios
    .get(`/api/categories/getById/${this.$route.params.id}?lang=en`)
    .then((res) => {
     
       this.categories.category[0].name = res.data.Category.name;
       this.categories.section_id = res.data.Category.section_id;
      this.categories.parent_id = res.data.Category.parent_id;
    });
      axios
    .get(`/api/categories/getById/${this.$route.params.id}?lang=ar`)
    .then((res) => {
       this.categories.category[1].name = res.data.Category.name;
    
    })
     .catch(function(error) {
          if (error) {
             console.log("error:",error);
            // console.log(error.response.status);
            // console.log(error.response.headers);
         
             alert(`error !! Sorry produt by id request had error we can not return old data.. work soon`);
          }
        })

    },
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
    updateCategory() {
       var self = this;
      if (this.categories.images[0].image == "") {
     this.Massage_warning ='select img is required';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
      else if (this.categories.category[1].name == "") {
       this.Massage_warning ='arabic name is required you must enter name';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
      else if (this.categories.category[0].name == "") {
        this.Massage_warning ='english name is required you must enter name';
      document.getElementById(`m`).classList.toggle('cvs');
     
      }   
       else if (this.categories.section_id == "") {

      this.Massage_warning ='section_id is required you must enter section_id';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
       else if (this.categories.parent_id == "") {
         this.Massage_warning ='parent_id is required you must enter parent_id';
      document.getElementById(`m`).classList.toggle('cvs');
    
      } 
       else if (this.categories.slug == "") {
          this.Massage_warning ='slug is required you must enter slug';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
      else {
         document.getElementById('sp').classList.toggle('cvs');
        axios
        .put(
           `/api/categories/update/${this.$route.params.id}`,
          this.categories
        )
        .then(function(response) {

           console.log(response.data);
          if(response.data.stateNum == 201 || response.data.stateNum == 200){
              document.getElementById('sp').classList.toggle('cvs');
             self.statusnumber = response.data.stateNum;
         self.Massage_success ='update Category Request Success do you want go to category tabel';
                 setTimeout(() => {
    self.$router.push({ name: 'Categories' });
      
        }, 2000);
          }
          else{    
              document.getElementById('sp').classList.toggle('cvs');
              self.Massage_warning = "Error : " + response.data.msg;
            document.getElementById('m').classList.toggle('cvs'); 
     
          }
        })
              .catch(function(error) {
          if (error.response) {
            document.getElementById('sp').classList.toggle('cvs');
            console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            self.Massage_warning = "Error : " + error.response.data.message;
            document.getElementById('m').classList.toggle('cvs'); 
          }
        });
   
      }
     
    },
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
      console.log(files);
      this.categories.images[0].image = this.files[0].name;
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
  },
};
</script>



<style scoped>

input{
  border: 1px solid #ddd;
}

.lng{
    display: flex;
  justify-content: space-around;
  align-items: center;
}
.lng h4{
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
 .spin-hide{
     display: none;
 }
 @keyframes rotator {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(270deg); }
 }

 .path {
   stroke-dasharray: $offset;
   stroke-dashoffset: 0;
   transform-origin: center;
   animation:
     dash $duration ease-in-out infinite, 
     colors ($duration*4) ease-in-out infinite;
 }

 @keyframes colors {
   0% { stroke: #4285F4; }
   25% { stroke: #DE3E35; }
   50% { stroke: #F7C223; }
   75% { stroke: #1B9A59; }
   100% { stroke: #4285F4; }
 }

 @keyframes dash {
  0% { stroke-dashoffset: $offset; }
  50% {
    stroke-dashoffset: $offset/4;
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform:rotate(450deg);
  }
 }
 .alert-danger{
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
.alert-success{
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
.cvs{
visibility: visible !important;
}
</style>