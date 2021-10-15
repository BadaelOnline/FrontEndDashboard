<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Server Controler</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content>
         
             
          <md-field>
            <label>Type here!</label>
            <md-input v-model="server_change"></md-input>
            <span class="md-helper-text">Helper text : http://edalili.e-dalely.com</span>
          </md-field>
            <md-button @click="handleChange()" class="md-info">change</md-button>
         
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    const server = localStorage.getItem("server") || "http://edalili.e-dalely.com/public";
    return {
      
      server: server,
      server_change: null,
      
    };
  },
  methods: {
    handleChange() {
      this.server = this.server_change;
      localStorage.setItem("server", this.server);
      alert("succed change youe new domain is :" + this.server);
      window.location.reload();
    },
  },
};
</script>
