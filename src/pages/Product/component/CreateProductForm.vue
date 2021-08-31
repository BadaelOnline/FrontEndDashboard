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
      <h4>Products Form</h4>
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
      <div class="parent"> 
      </div>
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">Name </label>  
    <input type="text" class="form-control" id="validationCustom01" 
    v-model="products.product[0].name"  v-if="lang == 'ar'" required>
     <input type="text" class="form-control" id="validationCustom01"   
     v-model="products.product[1].name" required  v-else>
  
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom02" class="form-label">slug</label>
    <input type="text" class="form-control" id="validationCustom02" 
    v-model="products.slug" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-6">
    <label for="validationCustom02" class="form-label">long description</label>
    <input type="text" class="form-control" id="validationCustom02" 
    v-model="products.product[0].long_des"  v-if="lang == 'ar'" required>
    <input type="text" class="form-control" id="validationCustom02"
       v-model="products.product[1].long_des"  v-else required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
<div class="col-md-6">
    <label for="validationCustom02" class="form-label">short description</label>
    <input type="text" class="form-control" id="validationCustom02" 
    v-model="products.product[0].short_des"  v-if="lang == 'ar'" required>
    <input type="text" class="form-control" id="validationCustom02" 
    v-model="products.product[1].short_des"  v-else required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-10">
    <label for="validationCustom04" class="form-label">section_id</label>
    <select class="form-select" id="validationCustom04"  v-model="products.sections[0].section_id" required>
      <option selected disabled value="">Choose...</option>
       <option
                  v-for="item in sections"
                  :key="item.pr"
                  :value="item.id"
                  >{{ item.name }}
      </option >
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
 
  <!-- <div class="col-md-8">
    <label for="validationCustom04" class="form-label">brand_id </label>
    <select class="form-select" id="validationCustom04" v-model="products.brand_id" required>
      <option selected disabled value="">Choose...</option>
      <option 
                  v-for="items in Brands"
                  :key="items.pr"
                  :value="items.id"
                  >{{ items.name }}
      </option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div> -->

</form>
 
      <md-button
        :data-background-color="'blue'"
        @click="postProduct()"
        class="btn"
        id="btnAdd"
        >Add</md-button
      >
    
    </div>
  </md-card>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "CreateProductForm",
  components: {
  
  },
  props: {
   
  },
  data() {
   const lang = localStorage.getItem("lang") || "en";
    return {
      Massage_success: "",
     Massage_warning:"",
      lang: lang,
      products: {
    "product": [
        {
            "local": "ar",
            "name": "",
            "meta": "arefe",
            "short_des": "",
            "long_des": ""
        },
        {
            "local": "en",
            "name": "",
            "meta": "efefen",
            "short_des": "",
            "long_des": ""
        },
        {
            "local": "fr",
            "name": "ffer",
            "meta": "ffefr",
            "short_des": "fr fr",
            "long_des": "fr fr"
        }
    ],
    "brand_id": 1,
    "barcode": "mobiles",
    "slug": "",
    "is_active": 1,
    "is_appear": 1,
    "category": [
        {
            "category_id": 1
        },
        {
            "category_id": 2
        },
        {
            "category_id": 3
        }
    ],
    "sections": [
        {
            "section_id": ""
        },
        {
            "section_id": 2
        },
        {
            "section_id": 3
        },
                {
            "section_id": 4
        },
                {
            "section_id": 5
        },
                {
            "section_id": 6
        }
    ],
    "CustomFieldValue": [
        {
            "custom_field_value_id": 1
        },
        {
            "custom_field_value_id": 2
        },
        {
            "custom_field_value_id": 3
        }
    ],
    "images": [
        {
            "image": "{{fahed3}}",
            "is_cover": 1
        },
        {
            "image": "{{fahed2}}",
            "is_cover": 0
        },
        {
            "image": "{{feahd1}}",
            "is_cover": 0
        }
    ]
},
    };
  },
  computed: {
    ...mapState({
      // Categories: (state) => state.All.Categories,
      Product: (state) => state.All.Product,
      // Brands: (state) => state.All.Brands,
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    // this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadProducts");
    // this.$store.dispatch("loadBrands");
    this.$store.dispatch("loadSections");

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
   handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      // window.location.reload();
    },
   postProduct() {
    var self = this;
      //  if (this.categories.images[0].image == "") {
      // alert('select img is required');
      // } 
      if (this.products.product[0].name == "" || this.products.product[0].long_des == "" || this.products.product[0].short_des == "") {
      this.Massage_warning ='Arabic data is required you must enter data';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
      else if (this.products.product[1].name == "" || this.products.product[1].long_des == "" || this.products.product[1].short_des == "") {
      this.Massage_warning ='English data is required you must enter data';
      document.getElementById(`m`).classList.toggle('cvs');
      }   
       else if (this.products.slug == "") {
      this.Massage_warning ='slug is required you must enter slug data';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
       else if (this.products.sections[0].section_id == "") {
      this.Massage_warning ='section_id is required you must enter section_id data';
      document.getElementById(`m`).classList.toggle('cvs');
    
      } 
      else {
         document.getElementById('sp').classList.toggle('cvs');
        axios
        .post(
          "http://edalili.e-dalely.com/public/api/products/create",
          this.products
        )
        .then(function(response) {
           console.log(response.data.stateNum);
          if(response.data.stateNum == 201 || self.statusnumber == 200){
               document.getElementById('sp').classList.toggle('cvs');
            self.statusnumber = response.data.stateNum;
         self.Massage_success ='Create product Request Success do you want go to product tabel';
         document.getElementById("su").classList.toggle('cvs');
              setTimeout(() => {
     
    self.$router.push({ name: 'Products' });
       
      
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