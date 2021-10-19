<template>
  <div id="app">
 
    <notifications group="foo" 
    position="top left" 
    :width="500" 
    classes="my-custom-class" />
    
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
.my-custom-class {
  // styling
  margin: 10px 5px 10px 5px;
  padding: 20px;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  
  // default (blue)
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  // types (green, amber, red) info
  &.info {
    background: #44A4FC;
    border-left: 5px solid #187FE7;
  }
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
}
</style>
<script>
export default {
  components: {
  },
  methods:{

  },

};
</script>