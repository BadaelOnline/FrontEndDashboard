<template>
  <div class="content">
    <form>
      <md-card>
        <div class="title_form">
          <h4>Brands Tabel</h4>
          <router-link :to="`/admin/brand/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Brand</md-button
            ></router-link
          >
        </div>
        <hr style="color: #fff;opacity: 0.5;" />

        <div class="table" v-if="Brands.length > 0">
          <div class="nav_tabel">
            <div class="child1">
              <div class="child">
                <span>ID</span>
              </div>
            </div>
            <div class="child2">
              <div class="child">
                <span>Img</span>
              </div>
            </div>
            <div class="child3">
              <div class="child">
                <span>Name</span>
              </div>
              <input
                type="input"
                class="search"
                name="search"
                id="name"
                v-model="searchName"
                placeholder="Name"
                autofocus
                required
              />
            </div>
            <!-- <div class="child4">
              <div class="child">
                <span>Slug</span>
              </div>
            </div> -->
            <div class="child5">
              <div class="child">
                <span>description</span>
              </div>
            </div>
            <!-- <div class="child8">
              <div class="child">
                <span>Parent Category</span>
              </div>
            </div> -->
            <div class="child6">
              <div class="child">
                <span>Status</span>
              </div>
              <select v-model="selectedFilter">
                <option value="all" selected>All</option>
                <option value="active">Active</option>
                <option value="notActive">Not Active</option>
              </select>
            </div>
            <div class="child7">
              <div class="child">
                <span>Action</span>
              </div>
            </div>
          </div>

          <brands
            v-for="brand in filteredName"
            :key="brand.id"
            :id="brand.id"
            :name="brand.name"
            :image="brand.image"
            :is_active="brand.is_active"
            :description="brand.description"
          >
          </brands>
          <!--     -->
        </div>
        <div class="unavaible_category" v-else>
          <router-link :to="`/admin/brand/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Brand</md-button
            ></router-link
          >
          <div class="unavaible">
            <h2>Ops... Brands doesnt exist yet.</h2>
          </div>
        </div>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import brands from "../component/brand.vue";
export default {
  components: { brands },
  data() {
    return {
      searchID: "",
      searchName: "",
      selectedFilter: "",
    };
  },
  computed: {
    ...mapState({
      Brands: (state) => state.All.Brands,
    }),
    filteredName() {
      if (this.searchName != "") {
        return this.Brands.filter((el) => {
          var regex = new RegExp(this.searchName, "i");
          return el.name.match(regex);
        });
      }
      if (this.selectedFilter == "notActive") {
        return this.Brands.filter((el) => {
          return el.is_active == false;
        });
      } else if (this.selectedFilter == "active") {
        return this.Brands.filter((el) => {
          return el.is_active == true;
        });
      } else {
        return this.Brands;
      }
    },
  },
  mounted() {
    this.$store.dispatch("loadBrands");
  },
};
</script>

<style scoped>
title_form {
  display: flex;
  justify-content: center;
  gap: 60%;
}
@media (max-width: 600px) {
  .title_form {
    gap: 20%;
  }
}
.title_form h4 {
  padding: 10px;
  opacity: 0.9;
}
.title_lang {
  display: flex;
  padding-left: 20px;
}
.title_lang h4 {
  padding: 10px;
  opacity: 0.7;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.nav_tabel {
  display: flex;
}
.nav_tabel .child1,
.nav_tabel .child2,
.nav_tabel .child3,
.nav_tabel .child4,
.nav_tabel .child5,
.nav_tabel .child6,
.nav_tabel .child7,
.nav_tabel .child8 {
  height: 10em;
  align-items: center;
  text-align: center;
  color: #fff;
}
.nav_tabel .child1 .child,
.nav_tabel .child2 .child,
.nav_tabel .child3 .child,
.nav_tabel .child4 .child,
.nav_tabel .child5 .child,
.nav_tabel .child6 .child,
.nav_tabel .child7 .child,
.nav_tabel .child8 .child {
  background-color: #36bdca;
  height: 4em;
  font-weight: 900;
  margin: auto;
  margin: 10px 0;
}
.search {
  width: 70px;
  height: 2em;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
  background-color: white;
  background-image: url("../../../../public/img/search.png");
  background-position: 5px 5px;
  background-size: 15px;
  background-repeat: no-repeat;
  align-items: center;
  padding: 12px 20px 12px 30px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.search:focus {
  width: 100%;
  border: 1px solid #36bdca;
}
.nav_tabel .child6 select {
  width: 50%;
  height: 2.5em;
  font-size: 13px;
  margin: auto;
  align-items: center;
  border: none;
  color: gray;
  border: 1px solid rgb(199, 196, 196);
  background-color: #fff;
}
.nav_tabel .child6 select option {
  font-size: 13px;
  margin: auto;
}
.nav_tabel .child5,
.nav_tabel .child8 {
  width: 20% !important;
  justify-content: center;
  position: relative;
}
.nav_tabel .child6 {
  width: 30% !important;
  justify-content: center;
  position: relative;
}
.nav_tabel .child2 {
  width: 30% !important;
  justify-content: center;
}
.nav_tabel .child1,
.nav_tabel .child3,
.nav_tabel .child4 {
  width: 20% !important;
}
.nav_tabel .child7 {
  width: 20% !important;
}
/* .nav_tabel .child6::before {
  content: "(click to restore)";
  opacity: 0.6;
  font-size: 13px;
  position: absolute;
  bottom: -15px;
} */
.search {
}
.new_product {
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  gap: 60%;
  justify-content: center;
  align-items: center;
}
.unavaible_category {
  background-color: #ecf0f1;
  height: auto;
  width: 100%;
  margin: auto;
}
.unavaible {
  margin: 50px auto;
  width: 90%;
  text-align: center;
  height: 300px;
}
.unavaible_product h2 {
  font-size: 3em;
  color: gray;
}
</style>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>
