<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Style Controler</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content>
            <div class="container"> <input disabled :value="color.style" placeholder="Value Color"></div>
        
            <div class="container">
                <ColorPicker
                :color="color"
                :onStartChange="color => onChange(color, 'start')"
                :onChange="color => onChange(color, 'change')"
                :onEndChange="color => onChange(color, 'end')"
              />
            </div>

    <hr>
    <div class="border-button">
            <label for="">Button Border Radius</label>
               <input v-model.number="radius">
                 <md-button  :style="{ 'border-radius': `${radius}px`}" class="md-info">example</md-button>
          </div>
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
.border-button{
  display: flex;
  align-items: center;
  gap: 100px;
  }
</style>
<script>
import { ColorPicker } from 'vue-color-gradient-picker';
export default {
  data() {
  
    return {
  
    radius:0,
      color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1
      },
      
      
    };
  },
  components: {
    ColorPicker
  },
  methods: {
    onChange(attrs) {
      this.color = { ...attrs };
      //  console.log(attrs.style);     
    }
  },

};
</script>
