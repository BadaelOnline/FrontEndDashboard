<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      <img class="image" :src="image" />
      <!-- <img class="image" src="../../../../public/img/market-logo.png" /> -->
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">{{ name }}</div>
    <div class="icon md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`editsection/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="delsection()" class="fa fa-trash" style="cursor: pointer;"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Section",
  props: ["id", "name", "image"],
  methods: {
    delsection() {
      axios.put(`/api/sections/trash/${this.id}`, this.details);
      console.log(JSON.stringify(this.is_active));
    },
  },
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
.md-layout-item {
  padding-right: 15px;
  padding-left: 15px;
  margin: 10px auto;
}
</style>
