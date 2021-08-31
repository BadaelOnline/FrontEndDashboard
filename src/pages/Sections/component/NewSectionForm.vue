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
        <h4>Section Form</h4>
      </div>
      <hr style="color: #fff;opacity: 0.5;" />
      <div class="parent"> 
      </div>
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-8">
    <label for="validationCustom01" class="form-label">English Name </label>
    <input type="text" class="form-control" id="validationCustom01" 
    v-model="sections.section[0].name"   required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
    <div class="col-md-8">
    <label for="validationCustom02" class="form-label">Arabic Name</label>
    <input type="text" class="form-control" id="validationCustom02" 
     v-model="sections.section[1].name" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-8">
    <label for="validationCustom02" class="form-label">slug</label>
    <input type="text" class="form-control" id="validationCustom02" 
    v-model="sections.slug" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
</form>
 
      <md-button
        :data-background-color="'blue'"
        @click="updateSections()"
        class="btn"
        id="btnAdd"
        >Add</md-button
      >
    
    </div>
  </md-card>
</template>
<script>
import axios from "axios";
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
      statusnumber: null,
      lang: lang,
      sections: {
    "section": [
        {
            "name": "",
            "local": "en",
            "description": "asasas",
            "section_id": 1
        },
        {
            "name": "",
            "local": "ar",
            "description": "asasas",
            "section_id": 1
        },
        {
            "name": "fahed",
            "local": "fr",
            "description": "asasas",
            "section_id": 1
        }  
    ],
    "slug": "",
    "is_active": 1,
    "image": "fafaffafa",
    "created_at": "",
    "updated_at": ""
},
    };
  },
  mounted() {
  

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
  updateSections() {
    var self = this;
      //  if (this.categories.images[0].image == "") {
      // alert('select img is required');
      // } 
     
      if (this.sections.section[0].name == "") {
       this.Massage_warning ='english name is required you must enter name';
      document.getElementById(`m`).classList.toggle('cvs');
      }  
      else if (this.sections.section[1].name == "" ) {
      this.Massage_warning ='arabic name is required you must enter name';
      document.getElementById(`m`).classList.toggle('cvs');
      }  
       else if (this.sections.slug == "") {
         this.Massage_warning ='slug is required you must enter slug';
      document.getElementById(`m`).classList.toggle('cvs');
      } 
      else {
          document.getElementById('sp').classList.toggle('cvs');
        axios
        .post(
           `/api/sections/create`,
          this.sections
        )
        .then(function(response) {
           console.log(response.data.stateNum);
          if(response.data.stateNum == 201 || self.statusnumber == 200){
          document.getElementById('sp').classList.toggle('cvs');
          self.statusnumber = response.data.stateNum;
          self.Massage_success ='Create sections Request Success do you want go to category tabel';
          document.getElementById("su").classList.toggle('cvs');
                        setTimeout(() => {
          self.$router.push({ name: 'section' });
              
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
.create {
  padding: 20px;
  height: auto;
  width: 100%;
  text-align: center;
}
.parent {
  display: flex;
  width: 100%;
  height: auto;
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
  height: auto;
}
.md-field {
  border: 1px solid #d0cece;
}
.md-field label {
  padding-left: 10px;
}
.parent .child_4 {
  width: 100%;
  margin: auto;
}
h4{
font-size: 20px;
font-weight: bold;
border: 1px solid #158a8ade;
padding: 10px;
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