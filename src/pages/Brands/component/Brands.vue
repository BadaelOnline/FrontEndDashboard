<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <div
      class="md-layout-item md-small-size-100 md-size-20"
      v-for="item in brand_images.slice(0, 1)"
      :key="item.id"
    >
      <!-- <img class="image" v-if="item.image" :src="item.image" /> -->
      <img class="image" src="../../../../public/img/market-logo.png" />
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">{{ name }}</div>
    <div class="md-layout-item md-small-size-100 md-size-20">
      {{ description }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_active == '1'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`brand/update/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="delbrand()" class="fa fa-trash" style="cursor: pointer;"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Brands",
  props: ["id", "name", "brand_images", "is_active", "description"],
  methods: {
    delbrand() {
      axios.put(`/api/brands/trash/${this.id}`, this.details);
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
