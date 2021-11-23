<template>
  <div class="content">
    <form>
      <md-card>
        <div class="title_form">
          <h4>Offers Tabel</h4>
          <router-link :to="`/admin/newOffer`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Offer</md-button
            ></router-link
          >
        </div>
        <hr style="color: #fff;opacity: 0.5;" />

        <div class="table" v-if="Offers.length > 0">
          <!-- <div class="col-span-4 md:col-span-2">
            <label for="per_page">
              Per page
            </label>
            <div class="relative">
              <select id="per_page">
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="60">60</option>
                <option value="100">100</option>
              </select>
            </div>
          </div> -->
          <div class="nav_tabel">
            <div class="child1">
              <div class="child">
                <span>ID</span>
              </div>
            </div>
            <div class="child2">
              <div class="child">
                <span>img</span>
              </div>
            </div>
            <div class="child3">
              <div class="child">
                <span>selling_price </span>
              </div>
  
            </div>
            <div class="child4">
              <div class="child">
                <span>price </span>
              </div>
            </div>
            <div class="child5">
              <div class="child">
                <span>quantity</span>
              </div>

            </div>
            <div class="child8">
              <div class="child">
                <span style="font-size:13px">time start</span>
              </div>
            </div>
              <div class="child8">
              <div class="child">
                <span style="font-size:13px">time ended</span>
              </div>
            </div>
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
          <main>
            <div style=" height:auto; overflow:auto">
              <!--   -->
              <Offers
               v-for="item in filteredName"
                :key="item.pr"
                :id="item.id"
                :price="item.price"
                :offer_image="item.offer_image"
                :selling_price="item.selling_price"
                :quantity="item.quantity"
                :ended_at="item.ended_at"
                :started_at="item.started_at"
                :is_active="item.is_active"
                style="margin: 30px 0;"
              >
              </Offers>
            </div>
                <nav v-if="filteredName.length > 0">
  <ul class="pagination" style="justify-content: center;margin-top: 30px;">
    <li class="page-item" :class="{ disabled : page == 1}" @click="Previous">
      <span class="page-link">Previous</span>
    </li>
    
    <li class="page-item" :class="{ active : page == pag}"  v-show="pag == page || pag == ( parseInt(page )+2) || pag == ( parseInt(page)+1) || pag == ( parseInt(page)-1)"
    v-for="pag in total_page" :key="pag">
        <span class="page-link" @click="getPage(pag)"> {{pag}}</span>
    </li>
   <span style="display: grid;align-content: center;">
        <span style="color: #9d1c9b;font-weight: bold; "> /  total : {{total_page}}</span>
    </span>
    <li class="page-item" @click="Next">
      <span class="page-link">Next</span>
    </li>
  </ul>
</nav>
          </main>
        </div>
        <div class="unavaible_category" v-else>
          <router-link :to="`/admin/category/create`"
            ><md-button class="md-accent" :data-background-color="'blue'">
              New Offer</md-button
            ></router-link
          >
          <div class="unavaible">
            <h2>Ops... Offers doesnt exist yet.</h2>
          </div>
        </div>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Offers from "../component/offers.vue";
// import axios from "axios";
const page = window.localStorage.getItem("page") || 1;
export default {
  data() {
    return {
      page: page,
      searchID: "",
      searchName: "",
      searchSection: "",
      selectedFilter: ""
    };
  },
  components: { Offers },
  name: "AllOffers",
  computed: {
    ...mapState({
      Offers: (state) => state.All.Offers,
      total_page: (state) => state.All.total_page,
     
    }),

     filteredName() {
      if (this.selectedFilter == "notActive") {
        return this.Offers.filter((el) => {
          return el.is_active == "Not Active";
        });
      } else if (this.selectedFilter == "active") {
        return this.Offers.filter((el) => {
          return el.is_active == "Active";
        });
      } else {
        return this.Offers;
      }
    },
  },
  methods: {
    getPage(i) {
      localStorage.setItem("page", i);
      this.$store.dispatch("loadCategories");
      window.location.reload();
    },
     Next(){
            localStorage.setItem("page", parseInt(this.page)+1);
             window.location.reload();
        },
       Previous(){
           if(localStorage.getItem("page") > 1){
            localStorage.setItem("page",parseInt(this.page)-1);
             window.location.reload();
           }

        },
 
  },
  mounted() {
    this.$store.dispatch("loadOffers");

  },
  
};
</script>

<style scoped>
.page-item{
  cursor: pointer;
}
.disabled{
   cursor: auto;
}
.title_form {
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
  height: 3em;
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
  height: 3em;
  font-weight: 900;
  margin: 10px 0;
}
.nav_tabel .child1 .child span,
.nav_tabel .child2 .child span,
.nav_tabel .child3 .child span,
.nav_tabel .child4 .child span,
.nav_tabel .child5 .child span,
.nav_tabel .child6 .child span,
.nav_tabel .child7 .child span,
.nav_tabel .child8 .child span {
  margin: auto;
  align-items: center;
}
main {
  margin: 20px 0;
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
  width: 20% !important;
  justify-content: center;
  position: relative;
}
.nav_tabel .child2 {
  width: 20% !important;
  justify-content: center;
}
.nav_tabel .child1{
  width: 10% !important;
}
.nav_tabel .child3,
.nav_tabel .child4 {
  width: 20% !important;
}
.nav_tabel .child7 {
  width: 20% !important;
}
 .nav_tabel .child6::before {
  content: "(click to restore)";
  opacity: 0.7;
  font-size: 13px;
  position: absolute;
  bottom: -10px;
  width: 200px;
  left: -10px;
} 
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
/*  */
li.ivu-page-next.ivu-page-disabled {
  background-color: #000;
}
li.ivu-page-prev {
  background-color: #000;
}
</style>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>
