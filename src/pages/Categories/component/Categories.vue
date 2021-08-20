<template>
  <div class="parent">
    <div class="child1">{{ id }}</div>
    <div class="child2">
      <div
        class="imag"
        v-for="item in category_images.slice(0, 1)"
        :key="item.id"
      >
        <img v-if="item.image" :src="item.image" />
        <img v-else src="../../../../public/img/market-logo.png" />
      </div>
    </div>
    <div class="child3">{{ name }}</div>
    <div class="child4">{{ section_id }}</div>
    <div class="child5">
      <i
        v-if="is_active == 'Active'"
        class="fa fa-check"
        style="color: green;"
      ></i>
      <i v-else class="fa fa-times" style="color: #f20b07;"></i>
    </div>
    <div class="child6">
      <!-- <router-link :to="`category/update/${id}`"> -->
      <router-link :to="{ path: `category/update/${id}`, params: { id: id } }">
        <md-button
          class="md-primary"
          style="width: 70px;"
          :data-background-color="'blue'"
        >
          <i class="fas fa-edit" style="margin: 0 10px;"></i>Edit</md-button
        >
      </router-link>
      <md-button
        style="width: 70px;"
        @click="delettcategory()"
        class="md-accent"
        :data-background-color="'red'"
      >
        <i class="fa fa-trash" style="margin: 0 10px;"></i>Delete</md-button
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
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
/* start alaa */
.parent {
  display: flex;
  justify-content: space-around;
}

.parent .child1,
.parent .child4,
.parent .child5 {
  width: 10% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}

.parent .child2 {
  width: 30% !important;
  display: flex;
  justify-content: center;
}
.parent .child3 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}
.parent .child6 {
  width: 30% !important;
  display: flex;
  justify-content: center;
  margin: auto;
}
.parent .child2 .imag {
  width: 210px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.parent .child2 .imag img {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
/* end alaa */
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
.actionbutton {
  flex: 0 1 10%;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
}
</style>
