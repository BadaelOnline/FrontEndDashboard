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
      
            <div class="testing-color" :style="{ 'background-color': `rgb(${color.red},${color.green},${color.blue},${color.alpha})`}">
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
                        <span  :style="{ 'color': `rgb(${colorText.red},${colorText.green},${colorText.blue},${colorText.alpha})`}" 
                        class="routes" v-for="item in colum" :key="item">item</span>
                    </div>
           </div>
          
              
           <div class="color-controler">
               <div>
           <input disabled class="value"  :value="color.style" placeholder="Background Color">
          
           <ColorPicker
      :color="color"
      :onStartChange="color => onChange(color, 'start')"
      :onChange="color => onChange(color, 'change')"
      :onEndChange="color => onChange(color, 'end')"
    />
            </div>
            <div>
           <input disabled class="value" :value="colorText.style" placeholder="Text Color">
      <ColorPicker
      :color="colorText"
      :onStartChange="color => onChangetext(color, 'start')"
      :onChange="color => onChangetext(color, 'change')"
      :onEndChange="color => onChangetext(color, 'end')"
    />
            </div>
        </div>
         <HR></HR>
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
          <h3>Change logo:</h3>
  <UploadImages @changed="handleImages" :max="1" />

       <div class="container"><md-button  class="md-info">Upload</md-button></div>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
<style src="vue-color-gradient-picker/dist/index.css" lang="css" ></style>
<style scoped>
.container{
 display: flex;
justify-content: center;
}
.value{
  margin-left: 25px;
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
import { ColorPicker } from 'vue-color-gradient-picker';
import UploadImages from "vue-upload-drop-images";
export default {
  data() {
    return {
    file:[0],
    colum: 1,
    color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1
      },
    colorText: {
        red: 0,
        green: 0,
        blue: 255,
        alpha: 1
      }
      
    };
  },
    components: {
  UploadImages, ColorPicker
  },
  methods: { 
       handleImages(e) {
      this.file = e;
      console.log(e[0]);
    },
    onChange(attrs) {
      this.color = { ...attrs };
      console.log(attrs.style);
    },
    onChangetext(attrs) {
      this.colorText = { ...attrs };
       console.log(attrs.style);
    }
  },
  
};
</script>
