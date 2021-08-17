<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <div
      v-for="item in category_images.slice(0, 1)"
      :key="item.id"
      class="md-layout-item md-small-size-100 md-size-20"
    >
      <img class="image" v-if="item.image" :src="item.image" />
      <img class="image" v-else src="../../../../public/img/market-logo.png" />
    </div>
    <div class="md-layout-item md-small-size-100 md-size-20">{{ name }}</div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      {{ section_id }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_active == 'Active'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`category/update/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>
      <i
        @click="delettcategory()"
        class="fa fa-trash"
        style="cursor: pointer;"
      ></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Categories",
  props: ["id", "name", "image", "is_active", "section_id", "category_images"],
  methods: {
    delettcategory() {
      // this.$store.dispatch("deleteCategory", items);
      axios.put(`/api/categories/trash/${this.id}`, this.details);
      console.log(JSON.stringify(this.is_active));
    },
  },
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
.md-layout-item.md-size-20 {
  min-width: 20%;
  max-width: 20%;
  height: 60px;
  /* max-height: 100%; */
}
.md-card img {
  max-width: 30%;
  height: 100%;
  border-radius: 50%;
  min-height: 60%;
  max-height: 60px;
}
.md-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.fa-edit:before {
  content: "\f044";
  color: green;
}
.fa-trash:before {
  content: "\f1f8";
  color: red;
}
</style>
