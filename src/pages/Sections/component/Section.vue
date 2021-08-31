<template>

    <div class="parent">
    <div class="child1">{{ id }}</div>
    <div class="child2">
      <div class="imag">
        <img v-if="image" :src="image" />
        <img v-else src="../../../../public/img/market-logo.png" />
      </div>
    </div>
    <div class="child3">{{ name }}</div>

    <div class="child6"  v-if="is_active" @click="restore(id)" style="cursor:pointer;"> 
      <i
        v-if="is_active == 'Active'"
        id="Active"
        class="fa fa-check"
        style="color: green;"
      ></i>
      <i v-else id="norActive" class="fa fa-times" style="color: #f20b07;"></i>
    </div>
    <div class="child6" v-else>
Active key  doesnt exist 
    </div>
    <div class="child7">
      <router-link :to="`section/update/${id}`">
        <button
          style="width: 50px; cursor:pointer"
          :data-background-color="'blue'"
        >
          <i class="fas fa-edit" style="margin: 0 10px;"></i>
        </button>
      </router-link>
            <div
        @click="Delete(id)"
        class="delet"
        :class="{ non_active_delete : !is_active}"
      >
        <i class="fa fa-trash" style="margin: 0 10px;"></i>
      </div>
    </div>
    
    
<div  :id="`s${id}`" class="alert alert-success" role="alert">
 {{Massage_success}} .
</div> 
<svg  :id="`sp${id}`" class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>
<div :id="`m${id}`" class="alert alert-danger alert-dismissible fade show" role="alert">
  {{Massage_warning}} .
  <button type="button" class="btn-close" @click="close()" aria-label="Close"></button>
</div>
  </div>
</template>
<script>
 import axios from "axios";
export default {
  name: "Section",
    data(){
    return{  
    Massage_success: "",
    Massage_warning:"",
    }
  },
  props: ["id", "name", "image"],
      methods: { 
      close(){
          document.getElementById(`m${this.id}`).classList.toggle('cvs');
     },
      Delete(i) {
        if(this.is_active == 'Not Active'){
        this.Massage_warning ='This not Active element you can not delete it please choose restore item on the left side';
        document.getElementById(`m${i}`).classList.toggle('cvs');
      }
      else{
         var r = confirm(`Are you sure you want to delete Product id ${i}`);
        if (r == true) {
          document.getElementById(`sp${i}`).classList.toggle('cvs');
  
          axios.put(`/api/sections/trash/${this.id}`,this.form).then(function( response ){
                console.log(response);
                  if(response.data.stateNum == 201 || self.statusnumber == 200){
                
                  self.Massage_success = 'Success Item Delete';
                    document.getElementById(`sp${i}`).classList.toggle('cvs');
                     document.getElementById(`s${i}`).classList.toggle('cvs');
                      setTimeout(() => {
                         document.getElementById(`s${i}`).classList.toggle('cvs');
                      }, 3000);
                      setTimeout(() => {
                         window.location.reload(); 
                    }, 3500);
                      
                      
                }    
              else{
                      document.getElementById(`sp${i}`).classList.toggle('cvs');
                this.Massage_warning =` error !! Sorry we will work for this error soon `
               document.getElementById(`m${i}`).classList.toggle('cvs');
                } 
                })
                   .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            document.getElementById(`sp${i}`).classList.toggle('cvs');
               alert(`error !! Sorry we will work for this error soon`);
          }
        });    
        } 
         
       this.$forceUpdate();
                   
          
      }
    },
        restore(i) {
           if(this.is_active == 'Active'){
        this.Massage_warning ='This not Active element you can not delete it please choose restore item on the left side';
        document.getElementById(`m${i}`).classList.toggle('cvs');
      }
      else{
         var r = confirm(`Are you sure you want to restore sections id ${i}`);
        if (r == true) {
         document.getElementById(`sp${i}`).classList.toggle('cvs');
  
          axios.put(`/api/sections/restoreTrashed/${this.id}`).then(function( response ){
                console.log(response);
                  if(response.data.stateNum == 201 || self.statusnumber == 200){
                 self.Massage_success = 'Success Item restore';
                    document.getElementById(`sp${i}`).classList.toggle('cvs');
                     document.getElementById(`s${i}`).classList.toggle('cvs');
                      setTimeout(() => {
                         document.getElementById(`s${i}`).classList.toggle('cvs');
                      }, 3000);
                      setTimeout(() => {
                         window.location.reload(); 
                    }, 3500);
                      
                }     
                   else{
                      document.getElementById(`sp${i}`).classList.toggle('cvs');
                this.Massage_warning =` error !! Sorry we will work for this error soon `
               document.getElementById(`m${i}`).classList.toggle('cvs');
                }
                })
                 .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
            document.getElementById(`sp${i}`).classList.toggle('cvs');
               alert(`error !! Sorry we will work for this error soon`);
          }
        });   
        } 
         
       this.$forceUpdate();
                   
          
      }
    }
  },
};
</script>
<style>
.parent {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.alert-danger{
position: absolute !important;
width: 100%;
height: 100%;
visibility: hidden;
display: flex;
justify-content: center;
font-size: 20px;
align-items: center;
}
.alert-success{
  visibility: hidden;
  position: absolute !important;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  font-size: 20px;
}
.cvs{
visibility: visible !important;
}
@media (max-width: 800px) {
  .parent {
    width: 120%;
    /* display: block; */
  }
  .parent .child1,
  .parent .child2,
  .parent .child3,
  .parent .child4,
  .parent .child5,
  .parent .child6,
  .parent .child7 {
    width: 10%;
    font-size: 15px;
  }
}
@media (max-width: 600px) {
  .parent {
    width: 150%;
    /* display: block; */
  }
}
@media (max-width: 300px) {
  .parent {
    width: 180%;
    /* display: block; */
  }
}
.parent .child5,
.parent .child6 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}

.parent .child2 {
  width: 30% !important;
  display: flex;
  justify-content: center;
}
.parent .child1 {
  font-weight: 700;
}
.parent .child1,
.parent .child3,
.parent .child4 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}
.parent .child3 {
  font-weight: 600;
}
.parent .child7 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
}
.parent .child7 button {
  width: 50px;
  height: 40px;
  margin: 5px;
  border: none;
}
.parent .child2 .imag {
  width: 210px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.parent .child2 .imag img {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.delet{
  cursor: pointer;
display: flex;
align-items: center;
width: 50px;
height: 40px;
justify-content: center;
margin-top: 13px;
background-color: #e8403c !important;
color: #fff;
}
.non_active_delete{
  background-color: #ddd !important;
  cursor: default !important; 
}
</style>
<style lang="scss" scoped>
 $offset: 187;
 $duration: 1.4s;

 .spinner {
   animation: rotator $duration linear infinite;
   position: absolute;
   z-index: 50;
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
</style>