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
       <div :style="{ 'box-shadow': `0px 6px 5px rgb(${red},${green},${blue})`}">
            <div class="testing-color" :style="{ 'background-color': `rgb(${red},${green},${blue})`}">
                <ul v-for="item in colum" :key="item"
                 :style="{ 'color': `rgb(${re},${gree},${blu})`}"
                >
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
           </div>
           </div>
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
         

          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
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
.switch-color{
    display: flex;
    gap: 50px;
}
.colum-contoler{
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;
}
</style>
<script>
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
  methods: { 

  },
  
};
</script>
