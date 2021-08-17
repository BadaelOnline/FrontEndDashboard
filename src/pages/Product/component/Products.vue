<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <!-- <div
      v-for="img in product_image[0]"
      :key="img.id"
      class="md-layout-item md-small-size-100 md-size-20"
    >
      <img :src="img.image" />
    </div> -->
    <div class="md-layout-item md-small-size-100 md-size-20">
      <img src="../../../../public/img/aa.jpg" />
    </div>
    <div class="md-layout-item md-small-size-100 md-size-20">{{ name }}</div>
    <div class="md-layout-item md-small-size-100 md-size-20">
      {{ short_des }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_appear == 'Appear'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`product/update/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="Delete()" class="fa fa-trash"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
  props: [
    "id",
    "name",
    "image",
    "product_image",
    "is_appear",
    "quantity",
    "short_des",
  ],
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
</style>
