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
       <div :style="{ 'box-shadow': `0px 6px 5px rgb(${red},${green},${blue})`}">
            <div class="testing-color" :style="{ 'background-color': `rgb(${red},${green},${blue})`}">
           </div>
           </div>
              <div class="value-switch">
              <div id="value">rgb(<span class="r">{{red}}</span>,<span class="g">{{green}}</span>,<span class="b">{{blue}}</span>)</div> 
          
           </div>
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

       

         

          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
<style scoped>
.r{
    color: red;
}
.g{
    color: green;
}
.b{
    color: blue;
}
.testing-color{
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
.value-switch{
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
}

.switch-color{
    display: flex;
    gap: 50px;
}
</style>
<script>
export default {
  data() {
  
    return {
    red: 255,
    green:1,
    blue:1,
    
      
    };
  },
  methods: {
  
  },
};
</script>
