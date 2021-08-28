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
    <div class="child4">{{ slug }}</div>
    <div class="child5">{{ section_id }}</div>
    <div class="child6" @click="statusCategory()" style="cursor:pointer;">
      <i
        v-if="is_active == 'Active'"
        id="Active"
        class="fa fa-check"
        style="color: green;"
      ></i>
      <i v-else id="norActive" class="fa fa-times" style="color: #f20b07;"></i>
    </div>
    <div class="child7">
      <!-- <router-link :to="`category/update/${id}`"> -->
      <router-link :to="{ path: `category/update/${id}`, params: { id: id } }">
        <button
          style="width: 50px; cursor:pointer"
          :data-background-color="'blue'"
        >
          <i class="fas fa-edit" style="margin: 0 10px;"></i>
        </button>
      </router-link>
      <button
        style="cursor:pointer"
        @click="delettcategory()"
        class="md-accent"
        :data-background-color="'red'"
      >
        <i class="fa fa-trash" style="margin: 0 10px;"></i>
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: [
    "id",
    "name",
    "image",
    "is_active",
    "section_id",
    "category_images",
    "slug",
  ],
  methods: {
    delettcategory() {
      console.log(JSON.stringify(this.is_active));
      // this.$store.dispatch("deleteCategory", items);
      if (this.is_active == "Active") {
        let res = confirm(`Are you sure you want to delete ${this.id}`);
        if (res) {
          axios.put(`/api/categories/trash/${this.id}`);
          console.log(JSON.stringify(this.is_active));
        }
      } else {
        alert("You cannot delete it because it has already been deleted");
      }
    },
    statusCategory() {
      console.log(JSON.stringify(this.is_active));
      if (this.is_active == "Active") {
        axios.put(`/api/categories/trash/${this.id}`);
        // window.location.reload();
      } else {
        axios.put(`/api/categories/restoreTrashed/${this.id}`);
        // window.location.reload();
      }
      setTimeout(function() {
        window.location.reload();
      }, 1000);
      //
    },
  },
};
</script>
<style>
.parent {
  display: flex;
  justify-content: space-around;
}
@media (max-width: 800px) {
  .parent {
    width: 120%;
    /* display: block; */
  }
  .parent .child1,
  .parent .child2,
  .parent .child3,
  .parent .child4,
  .parent .child5,
  .parent .child6,
  .parent .child7 {
    width: 10%;
    font-size: 15px;
  }
}
@media (max-width: 600px) {
  .parent {
    width: 150%;
    /* display: block; */
  }
}
@media (max-width: 300px) {
  .parent {
    width: 180%;
    /* display: block; */
  }
}
.parent .child5,
.parent .child6 {
  width: 20% !important;
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
.parent .child1 {
  font-weight: 700;
}
.parent .child1,
.parent .child3,
.parent .child4 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.7;
}
.parent .child3 {
  font-weight: 600;
}
.parent .child7 {
  width: 20% !important;
  display: flex;
  justify-content: center;
  margin: auto;
}
.parent .child7 button {
  width: 50px;
  height: 40px;
  margin: 5px;
  border: none;
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
#messageDelete {
  position: fixed;
  background-color: #0fb7cf;
  margin: auto;
}
</style>
