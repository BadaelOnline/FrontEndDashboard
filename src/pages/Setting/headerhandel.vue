<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Header Style</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content>
       <div :style="{ 'box-shadow': `0px 6px 5px rgb(${red},${green},${blue})`}">
            <div class="testing-color" :style="{ 'background-color': `rgb(${red},${green},${blue})`}">
                <div class="contain-logo">
                    <div class="logo">
                        <a href="http://front.e-dalely.com"
                            target="_blank"
                            class="simple-text logo-normal">
                        <img src="../../../public/img/Group.png"  />
                        </a>
                    </div>
                    
                </div>
              <div class="contain-item">
                        <span  :style="{ 'color': `rgb(${re},${gree},${blu})`}" 
                        class="routes" v-for="item in colum" :key="item">item</span>
                    </div>
           </div>
           </div>
               <h3>Row Item Switch:</h3>
           <div class="colum-contoler">
            <div class="switch-color">
                <md-radio v-model="colum" :value="1">item 1</md-radio>
           </div>
             <div class="switch-color">
             <md-radio  v-model="colum" :value="2">item 2</md-radio>
           </div>
             <div class="switch-color">
            <md-radio v-model="colum" :value="3">item 3</md-radio>
           </div>
             <div class="switch-color">
              <md-radio  v-model="colum" :value="4">item 4</md-radio>
           </div>
             <div class="switch-color">
              <md-radio  v-model="colum" :value="5">item 5</md-radio>
           </div>
             <div class="switch-color">
              <md-radio  v-model="colum" :value="6">item 6</md-radio>
           </div>
             <div class="switch-color">
              <md-radio  v-model="colum" :value="7">item 7</md-radio>
           </div>
                        <div class="switch-color">
              <md-radio  v-model="colum" :value="8">item 8</md-radio>
           </div>
           </div>
           <HR></HR>
           <div class="color-controler">
               <div>
           <h3>Background Color:</h3>
           <div class="switch-color">
                <label for="">red</label>
                <input type="range" min="1" max="255" step="1" v-model="red">
           </div>
            <div class="switch-color">
                <label for="">green</label>
                <input type="range" min="1" max="255" step="1"  v-model="green">
           </div>
            <div class="switch-color">
                <label for="">blue</label>
                <input type="range" min="1" max="255" step="1"  v-model="blue">  
           </div>
            </div>
            <div>
         <h3>Text Color:</h3>
           <div class="switch-color">
                <label for="">red</label>
                <input type="range" min="1" max="255" step="1" v-model="re">
           </div>
            <div class="switch-color">
                <label for="">green</label>
                <input type="range" min="1" max="255" step="1"  v-model="gree">
           </div>
            <div class="switch-color">
                <label for="">blue</label>
                <input type="range" min="1" max="255" step="1"  v-model="blu">  
           </div>
            </div>
        </div>
            <HR></HR>
          <h3>Change logo:</h3>
  <UploadImages @changed="handleImages" :max="1" />

       <div class="container"><md-button  class="md-info">Upload</md-button></div>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
<style scoped>
.container{
 display: flex;
justify-content: center;
}
.contain-logo{
width: 15%;
}
.logo{
    width: 75%;
}
.contain-item{
    width: 85%;
    display: flex;
    justify-content: space-around;
}
.routes{
    display: grid;
    align-content: center;
    font-weight: bold;
}
.testing-color{
    width: 100%;
    height: auto;
    margin-bottom: 50px;
    display: flex;
   justify-content: space-around;
   padding: 20px;
}

.color-controler{
    display: flex;
    justify-content: space-around;
}
.switch-color{
    display: flex;
    gap: 50px;
}
.colum-contoler{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
</style>
<script>
import UploadImages from "vue-upload-drop-images";
export default {
  data() {
    return {
    red: 255,
    green:1,
    blue:1,
    re: 1,
    gree:1,
    blu:1,
    colum: 1,
    
      
    };
  },
    components: {
  UploadImages
  },
  methods: { 

  },
  
};
</script>
