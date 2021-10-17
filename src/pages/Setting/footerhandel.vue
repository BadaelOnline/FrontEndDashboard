<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Footer Style</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content>
    
            <div class="testing-color" :style="{ 'background-color': `rgb(${color.red},${color.green},${color.blue})`}">
                <ul v-for="item in colum" :key="item"
                 :style="{ 'color': `rgb(${colorText.red},${colorText.green},${colorText.blue})`}"
                >
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
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
           <input disabled class="value" :valuer="colorText.style" placeholder="Text Color">
      <ColorPicker
      :color="colorText"
      :onStartChange="color => onChangetext(color, 'start')"
      :onChange="color => onChangetext(color, 'change')"
      :onEndChange="color => onChangetext(color, 'end')"
    />
            </div>
        </div>
         <hr>
     <h3>Colum Switch:</h3>
           <div class="colum-contoler">
            <div class="switch-color">
                <md-radio v-model="colum" :value="1">colum 1</md-radio>
           </div>
             <div class="switch-color">
             <md-radio  v-model="colum" :value="2">colum 2</md-radio>
           </div>
             <div class="switch-color">
            <md-radio v-model="colum" :value="3">colum 3</md-radio>
           </div>
             <div class="switch-color">
              <md-radio  v-model="colum" :value="4">colum 4</md-radio>
           </div>
           </div>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
<style src="vue-color-gradient-picker/dist/index.css" lang="css" ></style>
<style scoped>
.testing-color{
    width: 100%;
    height: auto;
    margin-bottom: 50px;
    display: flex;
   justify-content: space-around;
}
.testing-color ul{
    list-style: none;
    padding: 10px 0;
    margin: 0;
    font-size: 20px;
    line-height: 1.7;
    font-weight: bold;
}
.color-controler{
    display: flex;
    justify-content: space-around;
}
.value{
  margin-left: 25px;
}
.colum-contoler{
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;
}
</style>
<script>
import { ColorPicker } from 'vue-color-gradient-picker';
export default {
  data() {
  
    return {
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
      },
    colum: 1,
      
    };
  },
     components: {
  ColorPicker
  },
  methods: { 
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
